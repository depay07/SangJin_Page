"use client";

import { PageHero } from "@/components/sites/gmsangjin/shared";
import { COMPANY } from "@/components/sites/gmsangjin/data";

export default function ContactPage() {
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
          <form className="rounded-2xl border p-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-xl font-extrabold">문의하기</h2>
            <label className="mt-4 block text-sm font-bold">이름 *<input required className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="성함" /></label>
            <label className="mt-3 block text-sm font-bold">연락처 *<input required className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="010-0000-0000" /></label>
            <label className="mt-3 block text-sm font-bold">관심 분야
              <select className="mt-1 w-full rounded-md border px-3 py-2 font-normal">
                <option>DACRO 설비 (SPIN/DIP/TILTI)</option>
                <option>도장설비 (액체/분체/전착/전처리)</option>
                <option>자동제어 (판넬/HMI)</option>
                <option>기타 문의</option>
              </select>
            </label>
            <label className="mt-3 block text-sm font-bold">문의 내용<textarea rows={5} className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="설비 종류, 물량, 희망 일정 등을 적어 주세요." /></label>
            <button type="submit" className="mt-4 w-full rounded-md bg-[#0e2a63] py-3 text-sm font-bold text-white">보내기</button>
            <p className="mt-2 text-xs text-neutral-500">* 데모용 폼입니다. 실제 문의는 대표전화 {COMPANY.mobile} 로 연락 부탁드립니다.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
