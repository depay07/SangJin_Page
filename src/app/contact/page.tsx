"use client";

import { useRef, useState } from "react";
import { PageHero } from "@/components/sites/gmsangjin/shared";
import { COMPANY } from "@/components/sites/gmsangjin/data";

type Status = { kind: "idle" | "sending" | "done" | "error"; text: string };

const ERP_INQUIRY_URL =
  "https://gqttpmdpqotrkbdbstuu.supabase.co/functions/v1/website-inquiry";

const SUBMIT_ATTEMPTS = 3;

async function saveToErp(target: HTMLFormElement, requestId: string): Promise<boolean> {
  try {
    const data = new FormData(target);
    const name = String(data.get("이름") ?? "");
    const phone = String(data.get("연락처") ?? "");
    const interest = String(data.get("관심분야") ?? "");
    const msg = String(data.get("문의내용") ?? "");
    const message = [
      `이름: ${name}`,
      `연락처: ${phone}`,
      `관심 분야: ${interest}`,
      "",
      "[문의 내용]",
      msg || "문의 내용 미입력",
    ].join("\n");
    if (message.length < 10) return false;
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(ERP_INQUIRY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          request_id: requestId,
          inquiry_type: `SANGJIN - ${interest || "홈페이지 문의"}`,
          message,
          contact: `${name} ${phone}`.trim(),
          source_page: window.location.href,
          source: "sangjin",
          website: String(data.get("website") ?? ""),
        }),
        signal: controller.signal,
      });
      if (!response.ok) return false;
      const result = await response.json().catch(() => null);
      return result?.ok === true;
    } finally {
      window.clearTimeout(timer);
    }
  } catch {
    return false;
  }
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form || sending) return;
    if (!form.reportValidity()) return;
    const honey = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honey) return;

    setSending(true);
    setStatus({ kind: "sending", text: "문의 내용을 전송하고 있습니다." });
    const requestId = crypto.randomUUID();
    try {
      for (let attempt = 1; attempt <= SUBMIT_ATTEMPTS; attempt += 1) {
        if (await saveToErp(form, requestId)) {
          form.reset();
          setStatus({
            kind: "done",
            text: "문의가 접수되었습니다. 남겨주신 연락처로 확인 후 답변드리겠습니다.",
          });
          return;
        }
        if (attempt < SUBMIT_ATTEMPTS) {
          setStatus({ kind: "sending", text: "접수 상태를 확인하고 있습니다." });
          await new Promise(resolve => window.setTimeout(resolve, attempt * 1000));
        }
      }
      setStatus({
        kind: "error",
        text: `접수 서버 연결이 원활하지 않습니다. 입력 내용은 그대로 유지됩니다. 잠시 후 보내기 버튼을 다시 눌러주세요.`,
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
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
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
            <button type="submit" disabled={sending} className="mt-4 w-full rounded-md bg-[var(--legacy-2)] py-3 text-sm font-bold text-white disabled:opacity-60">
              {sending ? "전송 중..." : "보내기"}
            </button>
            {status.text && (
              <p className={`mt-3 text-sm leading-6 ${statusColor}`}>{status.text}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
