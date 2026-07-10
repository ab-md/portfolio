import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/context/ContactModalContext";
import ContactModal from "@/components/ContactModal";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
});

export const metadata = {
  title: "ابوالفضل مددی | توسعه‌دهنده فرانت‌اند",
  description: "پورتفولیوی ابوالفضل مددی — توسعه‌دهنده فرانت‌اند متخصص React و Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="bg-base text-ink font-vazir overflow-x-hidden">
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
