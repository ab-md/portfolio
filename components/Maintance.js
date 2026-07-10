import Link from "next/link";

export default function UnderConstruction({ title = "این بخش" }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0) 70%)",
        }}
      />

      <div className="relative z-10">
        <div
          className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20
          flex items-center justify-center mx-auto mb-8 text-4xl"
        >
          🚧
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
          {title} هنوز در حال ساخته
        </h1>

        <p className="text-ink-dim text-[15px] max-w-[420px] mx-auto mb-10">
          داریم روی این بخش کار می‌کنیم و به‌زودی در دسترس قرار می‌گیره. فعلاً می‌تونی بقیه سایت رو ببینی.
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