const services = [
  {
    num: "۰۱",
    title: "توسعه رابط کاربری",
    desc: "رابط‌های دقیق و ریسپانسیو ساخته‌شده با React و Tailwind.",
  },
  {
    num: "۰۲",
    title: "اپلیکیشن‌های Next.js",
    desc: "ساخت کامل فرانت‌اند با روتینگ، SSR و بهینه‌سازی عملکرد.",
  },
  {
    num: "۰۳",
    title: "صفحات فرود",
    desc: "صفحات فرود سریع و متمرکز بر تبدیل که آنی لود می‌شوند.",
  },
];

export default function Services() {
  return (
    <section className="bg-base-2 px-6 md:px-16 py-14 md:py-24">
      <div className="text-center max-w-[560px] mx-auto mb-12 md:mb-14">
        <div className="text-accent text-sm font-bold mb-3.5">خدمات</div>
        <h2 className="text-[26px] md:text-[32px] font-extrabold mb-3.5">
          چطور می‌تونم کمک کنم
        </h2>
        <p className="text-ink-dim text-[15px]">
          خدمات تخصصی فرانت‌اند برای فریلنسرها، استارتاپ‌ها و تیم‌ها.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.num}
            className="bg-base border border-white/[0.08] rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-[10px] bg-accent/[0.12] flex items-center justify-center mb-5 text-accent font-extrabold text-lg">
              {s.num}
            </div>
            <h3 className="text-[17px] font-bold mb-2.5">{s.title}</h3>
            <p className="text-ink-dim text-[13.5px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
