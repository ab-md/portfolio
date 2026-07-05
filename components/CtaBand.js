"use client";

import { useContactModal } from "@/context/ContactModalContext";

export default function CtaBand() {
  const { open } = useContactModal();

  return (
    <div className="bg-surface mt-12 border border-white/[0.08] rounded-[20px] mx-6 md:mx-16 mb-14 md:mb-24 px-6 md:px-16 py-11 md:py-[70px] text-center">
      <h2 className="text-2xl md:text-[30px] font-extrabold mb-4">
        راه ارتباطی با من
      </h2>
      <p className="text-ink-dim mb-8">
        اگر برای همکاری، استخدام یا اجرای یک پروژه وب به دنبال توسعه‌دهنده Front-end هستید، خوشحال می‌شوم با هم در ارتباط باشیم.
      </p>
      <button
        onClick={open}
        className="inline-block bg-accent text-[#0F1A12] px-7 py-4 rounded-md font-bold text-[15px] mt-8"
      >
        در تماس باشید
      </button>
    </div>
  );
}
