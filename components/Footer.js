export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-16 py-8 border-t border-white/[0.08] text-ink-dim text-[13px] text-center">
      <div>
        ساخته شده با ❤️ توسط ابوالفضل مددی با استفاده از Next.js و Tailwind CSS.
      </div>
      <div className="flex gap-5">
        <a href="https://github.com/ab-md">گیت‌هاب</a>
        <a href="https://www.linkedin.com/in/abolfazl-madadi/">لینکدین</a>
        <a href="https://t.me/phoenix_tch">تلگرام</a>
      </div>
    </footer>
  );
}
