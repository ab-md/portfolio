import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* گلوی پس‌زمینه */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0) 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="text-accent text-[100px] md:text-[140px] font-extrabold leading-none mb-2">
          ۴۰۴
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
          صفحه‌ای که دنبالش بودی پیدا نشد
        </h1>

        <p className="text-ink-dim text-[15px] max-w-[420px] mx-auto mb-10">
          ممکنه لینک اشتباه باشه یا این صفحه جابه‌جا شده باشه. برگرد به صفحه اصلی و از اونجا مسیرت رو پیدا کن.
        </p>

        <Link
          href="/"
          className="inline-block bg-accent text-[#0F1A12] px-7 py-4 rounded-md font-bold text-[15px]"
        >
          بازگشت به خانه
        </Link>
      </div>
    </main>
  );
}
