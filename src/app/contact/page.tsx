"use client";

import { useRef, useState } from "react";
import { PageHero } from "@/components/sites/gmsangjin/shared";
import { COMPANY } from "@/components/sites/gmsangjin/data";

type Status = { kind: "idle" | "sending" | "done" | "error"; text: string };

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const [sending, setSending] = useState(false);
  const [fallback, setFallback] = useState("");
  const [fallbackBody, setFallbackBody] = useState("");
  const [copied, setCopied] = useState("");

  async function copyText(text: string, which: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(which);
    window.setTimeout(() => setCopied(""), 2000);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form || sending) return;
    if (!form.reportValidity()) return;
    const honey = (form.elements.namedItem("_honey") as HTMLInputElement)?.value;
    if (honey) return;

    setSending(true);
    setStatus({ kind: "sending", text: "문의 내용을 전송하고 있습니다." });

    async function trySend(target: HTMLFormElement): Promise<{ ok: boolean; needsActivation: boolean }> {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(
          `https://formsubmit.co/ajax/${COMPANY.email}`,
          { method: "POST", headers: { Accept: "application/json" }, body: new FormData(target), signal: controller.signal }
        );
        if (!response.ok) return { ok: false, needsActivation: false };
        const result = await response.json().catch(() => null);
        if (result?.success === true || result?.success === "true") {
          return { ok: true, needsActivation: false };
        }
        const msg = String(result?.message ?? "");
        return { ok: false, needsActivation: /activat/i.test(msg) };
      } catch {
        return { ok: false, needsActivation: false };
      } finally {
        window.clearTimeout(timer);
      }
    }

    try {
      // 일시적 장애에 대비해 1회 재시도
      let r = await trySend(form);
      if (!r.ok && !r.needsActivation) {
        setStatus({ kind: "sending", text: "다시 전송하고 있습니다." });
        r = await trySend(form);
      }
      if (r.ok) {
        form.reset();
        setFallback("");
        setStatus({
          kind: "done",
          text: "문의가 접수되었습니다. 남겨주신 연락처로 확인 후 답변드리겠습니다.",
        });
        return;
      }
      if (r.needsActivation) {
        throw new Error(
          `수신邮箱(${COMPANY.email}) 승인 절차가 남아 있습니다. 메일함(스팸함 포함)의 승인 메일을 클릭한 뒤 다시 보내주세요. 급하시면 아래 버튼을 이용해주세요.`
        );
      }
      throw new Error("send failed");
    } catch (err) {
      const data = new FormData(form);
      const body = `이름: ${data.get("이름")}\n연락처: ${data.get("연락처")}\n관심분야: ${data.get("관심분야")}\n\n${data.get("문의내용")}`;
      setFallbackBody(body);
      setFallback(
        `mailto:${COMPANY.email}?subject=${encodeURIComponent("지엠상진 홈페이지 문의")}&body=${encodeURIComponent(body)}`
      );
      setStatus({
        kind: "error",
        text:
          err instanceof Error && err.message !== "send failed"
            ? err.message
            : `전송 서버가 응답하지 않습니다. 아래 버튼으로 메일 앱에서 바로 보내주세요. 또는 ${COMPANY.mobile}로 문의해주세요.`,
      });
    } finally {
      setSending(false);
    }
  }

  const statusColor =
    status.kind === "done"
      ? "text-green-700"
      : status.kind === "error"
        ? "text-red-600"
        : "text-blue-700";

  return (
    <main>
      <PageHero title="고객문의" en="Contact" />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold">고객센터</h2>
            <dl className="mt-4 space-y-4 text-sm leading-6">
              <div>
                <dt className="font-bold">회사 주소</dt>
                <dd className="text-neutral-600">본사: {COMPANY.address}</dd>
              </div>
              <div>
                <dt className="font-bold">전화 / 팩스</dt>
                <dd className="text-neutral-600">
                  대표전화 {COMPANY.mobile} / T. {COMPANY.tel} / F. {COMPANY.fax}
                </dd>
              </div>
              <div>
                <dt className="font-bold">이메일</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>
                </dd>
              </div>
              <div>
                <dt className="font-bold">대표 / 설립</dt>
                <dd className="text-neutral-600">
                  {COMPANY.ceo} / {COMPANY.founded} / {COMPANY.businessType}
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-7 text-neutral-600">
              전기제어시스템·PLC 제어프로그램·전기판넬제작·전기공사,
              DACRO·도장·자동제어 설비의 설계부터 시운전까지 일괄 수행합니다.
              신규 설비계획이 있으시면 전화로 먼저 문의해 주세요. 신속한 A/S를
              약속드립니다.
            </p>
          </div>
          <form ref={formRef} onSubmit={onSubmit} className="rounded-2xl border p-6">
            <h2 className="text-xl font-extrabold">문의하기</h2>
            <input type="hidden" name="_subject" value="지엠상진 홈페이지 문의" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <label className="mt-4 block text-sm font-bold">이름 *<input name="이름" required className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="성함" /></label>
            <label className="mt-3 block text-sm font-bold">연락처 *<input name="연락처" required className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="010-0000-0000" /></label>
            <label className="mt-3 block text-sm font-bold">관심 분야
              <select name="관심분야" className="mt-1 w-full rounded-md border px-3 py-2 font-normal">
                <option>DACRO 설비 (SPIN/DIP/TILTI)</option>
                <option>도장설비 (액체/분체/전착/전처리)</option>
                <option>자동제어 (판넬/HMI)</option>
                <option>기타 문의</option>
              </select>
            </label>
            <label className="mt-3 block text-sm font-bold">문의 내용<textarea name="문의내용" rows={5} className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="설비 종류, 물량, 희망 일정 등을 적어 주세요." /></label>
            <button type="submit" disabled={sending} className="mt-4 w-full rounded-md bg-[#0e2a63] py-3 text-sm font-bold text-white disabled:opacity-60">
              {sending ? "전송 중..." : "보내기"}
            </button>
            {status.text && (
              <p className={`mt-3 text-sm leading-6 ${statusColor}`}>{status.text}</p>
            )}
            {status.kind === "error" && fallback && (
              <div className="mt-3 space-y-2">
                <a
                  href={fallback}
                  className="block rounded-md border border-[#0e2a63] py-3 text-center text-sm font-bold text-[#0e2a63] hover:bg-blue-50"
                >
                  메일 앱으로 보내기
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => copyText(COMPANY.email, "email")}
                    className="rounded-md border py-2.5 text-xs font-bold hover:bg-neutral-100"
                  >
                    {copied === "email" ? "복사됨 ✓" : "이메일 주소 복사"}
                  </button>
                  <button
                    type="button"
                    onClick={() => copyText(fallbackBody, "body")}
                    className="rounded-md border py-2.5 text-xs font-bold hover:bg-neutral-100"
                  >
                    {copied === "body" ? "복사됨 ✓" : "문의 내용 복사"}
                  </button>
                </div>
                <p className="text-xs leading-5 text-neutral-500">
                  메일 앱이 없으면 이메일 주소와 문의 내용을 복사해 네이버·지메일 등에서 {COMPANY.email}로 보내주세요.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
