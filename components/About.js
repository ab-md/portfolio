import Image from "next/image";

const skills = ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"];

export default function About() {
  return (
    <section id="about" className="bg-base-2 flex flex-col md:flex-row items-center gap-12 md:gap-16 px-6 md:px-16 py-14 md:py-24 text-center md:text-right">
      <div className="about w-full max-w-[300px] md:max-w-[320px] h-[300px] md:h-[380px] rounded-2xl bg-surface border border-white/[0.08] flex-shrink-0">
        {/* <Image 
        src={"/assets/aboutBanner.png"}
        alt="Abolfazl Madadi"
        width={220}
        height={20}
        // fill
        // className="object-cover"
        priority
        /> */}
      </div>

      <div className="flex-1">
        <div className="text-accent text-sm font-bold mb-3.5">درباره من</div>
        <h2 className="text-2xl md:text-[28px] font-extrabold mb-4.5">
          ایده‌ها را به رابط‌های سریع و زیبا تبدیل می‌کنم
        </h2>
        <p className="text-ink-dim text-[15px] max-w-[480px] mx-auto md:mx-0 mb-7">
          علاقه‌مند به توسعه وب و ساخت تجربه‌های کاربری ساده، سریع و کاربردی. بیشتر تمرکزم روی React و Next.js است و در کنار آن، در حال یادگیری Node.js و توسعه سمت سرور هستم تا بتوانم پروژه‌های Full-stack را به‌صورت کامل پیاده‌سازی کنم.
          برای من، نوشتن کد فقط رسیدن به خروجی نیست؛ بلکه ساختار مناسب، خوانایی و تجربه کاربری خوب به همان اندازه اهمیت دارد
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-surface border border-white/[0.08] px-4 py-2 rounded-full text-[13px]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
