"use client"
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    tag: "پروژه ۰۳",
    category: "فروشگاهی",
    title: "رابط فروشگاه آنلاین",
    desc: "فروشگاه سریع و ریسپانسیو با سبد خرید و فرآیند پرداخت.",
    techs: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://meta-shop-pi.vercel.app/",
    image: "/assets/projects/shop.webp"
  },
  {
    tag: "پروژه ۰۲",
    category: "صفحه فرود",
    title: "سایت معرفی ارز دیجیتال",
    desc: "صفحه فرود با تمرکز بر نرخ تبدیل، ساخته‌شده با Next.js.",
    techs: ["Next.js", "Framer Motion"],
    demoUrl: "https://crypto-app-nine-sooty.vercel.app/",
    image: "/assets/projects/crypto.png"
  },
  {
    tag: "پروژه ۰۱",
    category: "اپلیکیشن وب",
    title: "اپلیکیشن مخاطبین",
    desc: "داشبورد ادمین با حالت تیره و نمودارهای داده.",
    techs: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "https://contact-app-cyan-mu.vercel.app/",
    image: "/assets/projects/contact_app.webp"
  },
];


export default function Works() {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveCard(null);
      }
    }
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  return (
    <section ref={containerRef} className="px-6 md:px-16 py-14 md:py-24">
      <div className="text-center max-w-[560px] mx-auto mb-12 md:mb-14">
        <div className="text-accent text-sm font-bold mb-3.5">نمونه‌کارهای منتخب</div>
        <h2 className="text-[26px] md:text-[32px] font-extrabold mb-3.5">پروژه‌های اخیر</h2>
        <p className="text-ink-dim text-[15px]">
          چند نمونه از کارهایی که اخیراً ساخته‌ام — از صفحات فرود تا رابط‌های کامل محصول.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="group bg-surface border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            {/* تصویر پروژه + لایه هاور/تپ */}
            <div
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              className="relative h-[180px] flex items-center justify-center text-accent text-xs font-bold tracking-wide overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74,222,128,0.16), rgba(28,38,32,0.4))",
              }}
            >
              {/* <span className="transition-opacity duration-200 group-hover:opacity-0">
                {p.tag}
              </span> */}
              <Image
                src={p.image}
                alt="project"
                width={300}
                height={170}
                // fill
                // className="object-cover"
                priority
              />

              {/* لایه‌ای که موقع هاور (دسکتاپ) یا تپ (موبایل) میاد رو */}
              <div
                className={`absolute inset-0 bg-[#0F1A12]/90 backdrop-blur-[2px]
                flex flex-col items-center justify-center gap-4 px-5
                translate-y-2 pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-250 ease-out
                ${activeCard === i ? "opacity-100 !translate-y-0 !pointer-events-auto" : "opacity-0"}`}
              >
                <div className="flex flex-wrap justify-center gap-2">
                  {p.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold text-ink bg-white/[0.08]
                      border border-white/[0.12] rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 bg-accent text-[#0F1A12]
                  text-xs font-bold px-4 py-2 rounded-md"
                >
                  مشاهده دمو
                  <span className="text-sm leading-none">↗</span>
                </a>
              </div>
            </div>

            <div className="px-6 pt-5 pb-6">
              <div className="text-accent text-xs font-bold mb-2">{p.category}</div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-ink-dim text-[13.5px]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// export default function Works() {
//   const [activeCard, setActiveCard] = useState(null);

//   return (
//     <section className="px-6 md:px-16 py-14 md:py-24">
//       <div className="text-center max-w-[560px] mx-auto mb-12 md:mb-14">
//         <div className="text-accent text-sm font-bold mb-3.5">نمونه‌کارهای منتخب</div>
//         <h2 className="text-[26px] md:text-[32px] font-extrabold mb-3.5">پروژه‌های اخیر</h2>
//         <p className="text-ink-dim text-[15px]">
//           چند نمونه از کارهایی که اخیراً ساخته‌ام — از صفحات فرود تا رابط‌های کامل محصول.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
//         {projects.map((p, i) => (
//           <div
//             key={p.title}
//             className="group bg-surface border border-white/[0.08] rounded-2xl overflow-hidden"
//           >
//             {/* تصویر پروژه + لایه هاور/تپ */}
//             <div
//               onClick={() => setActiveCard(activeCard === i ? null : i)}
//               className="relative h-[180px] flex items-center justify-center text-accent text-xs font-bold tracking-wide overflow-hidden cursor-pointer md:cursor-default"
//               style={{
//                 background:
//                   "linear-gradient(135deg, rgba(74,222,128,0.16), rgba(28,38,32,0.4))",
//               }}
//             >
//                 {/* {p.tag} */}
//               {/* <span className="transition-opacity duration-200 group-hover:opacity-0">
//                 <Image
//                   src={p.image}
//                   alt="project"
//                   width={300}
//                   height={170}
//                   // fill
//                   // className="object-cover"
//                   priority
//                 />
//               </span> */}

//               <Image
//                 src={p.image}
//                 alt="project"
//                 width={300}
//                 height={170}
//                 // fill
//                 // className="object-cover"
//                 priority
//               />
//               {/* لایه‌ای که موقع هاور (دسکتاپ) یا تپ (موبایل) میاد رو */}
//               <div
//                 className={`absolute inset-0 bg-[#0F1A12]/90 backdrop-blur-[2px]
//                 flex flex-col items-center justify-center gap-4 px-5
//                 translate-y-2 pointer-events-none
//                 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
//                 transition-all duration-250 ease-out
//                 ${activeCard === i ? "opacity-100 !translate-y-0 !pointer-events-auto" : "opacity-0"}`}
//               >
//                 <div className="flex flex-wrap justify-center gap-2">
//                   {p.techs.map((tech) => (
//                     <span
//                       key={tech}
//                       className="text-[11px] font-semibold text-ink bg-white/[0.08]
//                       border border-white/[0.12] rounded-full px-3 py-1"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <a
//                   href={p.demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(e) => e.stopPropagation()}
//                   className="flex items-center gap-1.5 bg-accent text-[#0F1A12]
//                   text-xs font-bold px-4 py-2 rounded-md"
//                 >
//                   مشاهده دمو
//                   <span className="text-sm leading-none">↗</span>
//                 </a>
//               </div>
//             </div>

//             <div className="px-6 pt-5 pb-6">
//               <div className="text-accent text-xs font-bold mb-2">{p.category}</div>
//               <h3 className="text-lg font-bold mb-2">{p.title}</h3>
//               <p className="text-ink-dim text-[13.5px]">{p.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
