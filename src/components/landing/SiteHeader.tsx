import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PHONES } from "@/lib/contacts";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#osago", label: "ОСАГО" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#how", label: "Как работаем" },
  { href: "#payment-steps", label: "Этапы выплаты" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
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
        <div className="hidden xl:flex items-center gap-6 text-sm text-white/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#d4a537] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden sm:flex items-center gap-2.5 shrink-0 ml-auto mr-3 xl:ml-0 xl:mr-0">
          <span className="w-9 h-9 rounded-full bg-[#d4a537] flex items-center justify-center">
            <Icon name="Phone" size={16} className="text-[#111]" />
          </span>
          <div className="flex flex-col leading-tight">
            {PHONES.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="text-white hover:text-[#d4a537] text-sm font-semibold whitespace-nowrap transition-colors"
              >
                {p.display}
              </a>
            ))}
          </div>
        </div>
        <button
          className="xl:hidden text-white p-2 -mr-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={26} />
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden bg-[#0d0f12] border-t border-[#d4a537]/20 px-4 py-4 flex flex-col gap-4 text-white/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-1.5 hover:text-[#d4a537] transition-colors"
            >
              {l.label}
            </a>
          ))}
          {PHONES.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] text-sm font-semibold h-10 rounded-lg transition-colors"
            >
              <Icon name="Phone" size={15} />
              {p.display}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}