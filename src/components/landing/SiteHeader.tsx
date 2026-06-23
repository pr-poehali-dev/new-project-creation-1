import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { PRIMARY_PHONE } from "@/lib/contacts";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#111111]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white text-xl font-bold tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ЛЕГИС<span className="text-red-500">ПРО</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#advantages" className="hover:text-white transition-colors">Преимущества</a>
          <a href="#how" className="hover:text-white transition-colors">Как работаем</a>
          <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
        </div>
        <a href={`tel:${PRIMARY_PHONE.tel}`} className="hidden sm:block">
          <Button className="bg-red-700 hover:bg-red-800 text-white text-sm px-5 h-9 rounded-sm">
            <Icon name="Phone" size={15} className="mr-2" />
            {PRIMARY_PHONE.display}
          </Button>
        </a>
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={26} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-white/80">
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Услуги</a>
          <a href="#advantages" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Преимущества</a>
          <a href="#how" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Как работаем</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Отзывы</a>
          <a href={`tel:${PRIMARY_PHONE.tel}`} onClick={() => setMenuOpen(false)}>
            <Button className="w-full bg-red-700 hover:bg-red-800 text-white text-sm h-10 rounded-sm">
              <Icon name="Phone" size={15} className="mr-2" />
              {PRIMARY_PHONE.display}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}