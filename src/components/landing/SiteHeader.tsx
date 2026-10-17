import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PRIMARY_PHONE } from "@/lib/contacts";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#osago", label: "ОСАГО" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#how", label: "Как работаем" },
  { href: "#payment-steps", label: "Этапы выплаты" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0d0f12]/95 backdrop-blur border-b border-[#d4a537]/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo-legis.png" alt="ЛЕГИС ПРО" className="h-10 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="text-white text-xl font-bold tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ЛЕГИС <span className="text-[#d4a537]">ПРО</span>
            </span>
            <span className="text-white/50 text-[9px] tracking-[0.3em] mt-1">ПОМОЩЬ ПРИ ДТП</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-6 text-sm text-white/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#d4a537] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`tel:${PRIMARY_PHONE.tel}`}
          className="hidden sm:inline-flex items-center gap-2 bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] text-sm font-semibold px-4 h-9 rounded-lg transition-colors shrink-0"
        >
          <Icon name="Phone" size={15} />
          {PRIMARY_PHONE.display}
        </a>
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={26} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0d0f12] border-t border-[#d4a537]/20 px-4 py-4 flex flex-col gap-4 text-white/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d4a537] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] text-sm font-semibold h-10 rounded-lg transition-colors"
          >
            <Icon name="Phone" size={15} />
            {PRIMARY_PHONE.display}
          </a>
        </div>
      )}
    </nav>
  );
}
