"use client";

import { useContactModal } from "@/context/ContactModalContext";
import Image from "next/image";

export default function Hero() {
  const { open } = useContactModal();
  return (
    <section className="relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-10 px-6 md:px-16 pt-8 md:pt-10 pb-16 md:pb-24 text-center md:text-right">
      {/* گلوی سبز پس‌زمینه */}
      <div
        className="pointer-events-none absolute -top-52 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-[560px]">
        <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold mb-5">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(74,222,128,0.15)]" />
          آماده همکاری فریلنسری
        </div>

        <h1 className="text-[28px] md:text-[48px] font-extrabold leading-[1.4] mb-5">
          توسعه‌دهنده فرانت‌اند
          <br />
          {/* می‌سازم رابط‌های <span className="text-accent">تمیز</span> و مدرن */}
          با  
          <span className="text-accent"> React </span> 
          و 
          <span className="text-accent"> Next.js</span>
        </h1>

        <p className="text-ink-dim text-base max-w-[460px] mx-auto md:mx-0 mb-8">
          من ابوالفضل مددی هستم — رابط‌های کاربری سریع، واکنشگرا و مدرن طراحی میکنم و در مسیر تبدیل شدن به یک توسعه‌دهنده‌ی full-stack با node.js هستم.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#works"
            className="bg-accent text-[#0F1A12] px-7 py-4 rounded-md font-bold text-[15px]"
          >
            مشاهده نمونه‌کارها
          </a>
          <button
            onClick={open}
            className="border border-white/[0.08] text-ink px-7 py-4 rounded-md font-semibold text-[15px]"
          >
            تماس با من
          </button>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-11 mt-12 justify-center md:justify-start">
          <div>
            <div className="text-2xl md:text-[28px] font-extrabold">۴۰+</div>
            <div className="text-xs text-ink-dim mt-1">پروژه انجام‌شده</div>
          </div>
          <div>
            <div className="text-2xl md:text-[28px] font-extrabold">۵+</div>
            <div className="text-xs text-ink-dim mt-1">سال تجربه</div>
          </div>
          <div>
            <div className="text-2xl md:text-[28px] font-extrabold">۳۰+</div>
            <div className="text-xs text-ink-dim mt-1">مشتری راضی</div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 w-full max-w-[340px] md:max-w-[380px] h-[300px] md:h-[440px]
        rounded-[20px] border border-white/[0.08] flex items-center justify-center flex-shrink-0"
        style={{
          background: "linear-gradient(160deg, #1C2620, #16201A)",
        }}
      >
        <div
          className="w-[70%] h-[70%] rounded-2xl border flex items-center justify-center text-center p-5
          text-accent text-[13px] font-semibold tracking-wide overflow-hidden relative"
          style={{
            background:
              "linear-gradient(145deg, rgba(74,222,128,0.14), rgba(74,222,128,0.02))",
            borderColor: "rgba(74,222,128,0.2)",
          }}
        >
          <Image 
          src={"/assets/home/heroBanner.jpg"}
          alt="Abolfazl Madadi"
          // width={500} 
          // height={700}
          fill
          className="object-cover object-top"
          priority
          />
        </div>
      </div>
    </section>
  );
}
