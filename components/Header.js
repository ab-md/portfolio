"use client";

import { useState } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import Link from "next/link";

const navLinks = [
  { label: "خانه", href: "/" },
  { label: "درباره من", href: "#about" },
  // {
  //   label: "خدمات",
  //   href: "#",
  //   submenu: [
  //     { label: "توسعه رابط کاربری", href: "#" },
  //     { label: "اپلیکیشن Next.js", href: "#" },
  //     { label: "صفحه فرود", href: "#" },
  //   ],
  // },
  { label: "نمونه‌کارها", href: "#works" },
  // { label: "تماس با من", href: "#contact" },
  { label: "وبلاگ", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { open } = useContactModal();

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-16 py-5 relative z-[100]">
        <div className="text-xl font-extrabold">
          ابوالفضل<span className="text-accent">.</span>
        </div>

        {/* دسکتاپ */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-ink-dim hover:text-ink text-[15px] font-medium py-2 transition-colors"
                >
                  {link.label}
                  {link.submenu && (
                    <span className="text-[10px] mt-0.5 transition-transform group-hover:rotate-180">
                      ▾
                    </span>
                  )}
                </Link>

                {link.submenu && (
                  <ul
                    className="absolute top-full right-0 mt-2 min-w-[190px] bg-surface border
                    border-white/[0.08] rounded-xl p-2 opacity-0 invisible -translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-200 shadow-2xl"
                  >
                    {link.submenu.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block px-3.5 py-2.5 rounded-lg text-sm text-ink-dim hover:bg-accent/[0.08] hover:text-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <button
            onClick={open}
            className="hidden md:inline-block bg-accent text-[#0F1A12] px-6 py-2.5 rounded-md text-sm font-bold"
          >
            تماس با من
          </button>

          {/* دکمه همبرگری */}
          <button
            aria-label="باز کردن منو"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1.5 z-[200]"
          >
            <span
              className={`w-6 h-0.5 bg-ink rounded-full transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-ink rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-ink rounded-full transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* پس‌زمینه تیره پشت منوی موبایل */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[120] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* منوی کشویی موبایل */}
      <nav
        className={`fixed top-0 h-screen w-[78%] max-w-[320px] bg-base-2 border-l border-white/[0.08]
        z-[150] pt-24 px-8 pb-8 overflow-y-auto transition-all duration-300
        ${menuOpen ? "right-0" : "-right-full"}`}
      >
        <ul className="flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="w-full flex items-center justify-between text-ink text-[17px] font-semibold py-3.5 border-b border-white/[0.08]"
                  >
                    {link.label}
                    <span
                      className={`text-xs transition-transform duration-300 ${
                        submenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      submenuOpen ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    {link.submenu.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block px-4 py-3 text-ink-dim text-[15px]"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={link.href}
                  className="block text-ink text-[17px] font-semibold py-3.5 border-b border-white/[0.08]"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => { setMenuOpen(false); open(); }}
              className="block w-full text-right text-ink text-[17px] font-semibold py-3.5"
            >
              تماس با من
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
