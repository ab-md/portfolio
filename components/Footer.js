export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-16 py-8 border-t border-white/[0.08] text-ink-dim text-[13px] text-center">
      <div>© ۲۰۲۶ ابوالفضل مددی. تمامی حقوق محفوظ است.</div>
      <div className="flex gap-5">
        <a href="#">گیت‌هاب</a>
        <a href="#">لینکدین</a>
        <a href="#">توییتر</a>
      </div>
    </footer>
  );
}
