import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    tag: "پروژه ۰۱",
    category: "اپلیکیشن وب",
    title: "اپلیکیشن مخاطبین",
    desc: " صفحه فرود با تمرکز بر نرخ تبدیل، ساخته‌شده با Next.js.",
    link: "https://contact-app-cyan-mu.vercel.app/",
    image: "/assets/projects/contact_app.webp"
  },
  {
    tag: "پروژه ۰۲",
    category: "صفحه فرود",
    title: "سایت معرفی ارز دیجیتال",
    desc: "داشبورد ادمین با حالت تیره و نمودارهای داده.",
    link: "https://crypto-app-nine-sooty.vercel.app/",
    image: "/assets/projects/crypto.png"
  },
  {
    tag: "پروژه ۰۳",
    category: "فروشگاهی",
    title: "رابط فروشگاه آنلاین",
    desc: "فروشگاه سریع و ریسپانسیو با سبد خرید و فرآیند پرداخت.",
    link: "https://meta-shop-pi.vercel.app/",
    image: "/assets/projects/shop.webp"
  },
];

export default function Works() {
  return (
    <section className="px-6 md:px-16 py-14 md:py-24">
      <div className="text-center max-w-[560px] mx-auto mb-12 md:mb-14">
        <div className="text-accent text-sm font-bold mb-3.5">نمونه‌کارهای منتخب</div>
        <h2 className="text-[26px] md:text-[32px] font-extrabold mb-3.5">پروژه‌های اخیر</h2>
        <p className="text-ink-dim text-[15px]">
          چند نمونه از کارهایی که اخیراً ساخته‌ام — از صفحات فرود تا رابط‌های کامل محصول.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {projects.map((p) => (
          <Link
            href={p.link}
            target="_blank"
            key={p.title}
            className="bg-surface border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <div
              className="h-[180px] flex items-center justify-center text-accent text-xs font-bold tracking-wide"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74,222,128,0.16), rgba(28,38,32,0.4))",
              }}
            >
              <Image
                src={p.image}
                alt="project"
                width={300}
                height={170}
                // fill
                // className="object-cover"
                priority
              />
              {/* {p.tag} */}
            </div>
            <div className="px-6 pt-5 pb-6">
              <div className="text-accent text-xs font-bold mb-2">{p.category}</div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-ink-dim text-[13.5px]">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
