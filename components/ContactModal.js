"use client";

import { useState, useEffect } from "react";
import { useContactModal } from "@/context/ContactModalContext";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  // بستن با کلید Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // قفل اسکرول پس‌زمینه وقتی مودال بازه
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // TODO: اینجا به API یا سرویس ایمیل خودت وصل کن
    setTimeout(() => {
      setStatus("sent");
    }, 900);
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      {/* پس‌زمینه تار */}
      <div
        onClick={close}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_.2s_ease]"
      />

      {/* کارت مودال */}
      <div
        className="relative w-full max-w-[440px] bg-surface border border-white/[0.08]
        rounded-2xl p-7 md:p-9 shadow-2xl animate-[slideUp_.25s_ease]"
      >
        <button
          onClick={close}
          aria-label="بستن"
          className="absolute top-5 left-5 w-8 h-8 flex items-center justify-center
          rounded-full text-ink-dim hover:text-ink hover:bg-white/5 transition-colors"
        >
          ✕
        </button>

        {status !== "sent" ? (
          <>
            <div className="text-accent text-sm font-bold mb-2">بیایید صحبت کنیم</div>
            <h2 className="text-2xl font-extrabold mb-2">پیام بگذارید</h2>
            <p className="text-ink-dim text-sm mb-6">
              فرم زیر رو پر کنید، معمولاً ظرف یک روز کاری پاسخ می‌دم.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs text-ink-dim mb-1.5">نام</label>
                <input
                  type="text"
                  required
                  placeholder="نام شما"
                  className="w-full bg-base border border-white/[0.08] rounded-lg px-4 py-3
                  text-sm text-ink placeholder:text-ink-dim/60 outline-none
                  focus:border-accent/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-ink-dim mb-1.5">ایمیل</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-base border border-white/[0.08] rounded-lg px-4 py-3
                  text-sm text-ink placeholder:text-ink-dim/60 outline-none
                  focus:border-accent/50 transition-colors"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs text-ink-dim mb-1.5">پیام</label>
                <textarea
                  required
                  rows={4}
                  placeholder="کمی درباره پروژه‌تون بگید..."
                  className="w-full bg-base border border-white/[0.08] rounded-lg px-4 py-3
                  text-sm text-ink placeholder:text-ink-dim/60 outline-none resize-none
                  focus:border-accent/50 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 bg-accent text-[#0F1A12] rounded-lg py-3.5 font-bold text-sm
                disabled:opacity-60 transition-opacity"
              >
                {status === "sending" ? "در حال ارسال..." : "ارسال پیام"}
              </button>
            </form>

            <div className="flex items-center gap-3 my-6">
              <div className="h-px bg-white/[0.08] flex-1" />
              <span className="text-xs text-ink-dim">یا</span>
              <div className="h-px bg-white/[0.08] flex-1" />
            </div>

            <a
              href="https://t.me/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/[0.08]
              rounded-lg py-3 text-sm font-semibold text-ink hover:border-accent/40 transition-colors"
            >
              پیام در تلگرام
            </a>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-accent/10 text-accent text-2xl
            flex items-center justify-center mx-auto mb-5">
              ✓
            </div>
            <h2 className="text-xl font-extrabold mb-2">پیام شما ارسال شد</h2>
            <p className="text-ink-dim text-sm mb-6">
              ممنون که پیام دادید — به‌زودی باهاتون تماس می‌گیرم.
            </p>
            <button
              onClick={close}
              className="bg-accent text-[#0F1A12] rounded-lg px-6 py-3 font-bold text-sm"
            >
              بستن
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
