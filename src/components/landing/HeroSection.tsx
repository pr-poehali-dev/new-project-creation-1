import Icon from "@/components/ui/icon";
import { PHONES } from "@/lib/contacts";

const HERO_BG =
  "https://cdn.poehali.dev/projects/bae5034d-7fc4-474e-8215-3e70c80b0b04/files/f89ecc28-463e-42cb-8e05-09fda0355ef6.jpg";

const bannerServices = [
  { icon: "Phone", label: "Консультация по ДТП" },
  { icon: "ClipboardList", label: "Оценка ущерба и экспертиза" },
  { icon: "ShieldCheck", label: "Работа со страховой" },
  { icon: "FileText", label: "Претензия и переговоры" },
  { icon: "Scale", label: "Взыскание ущерба и представительство в суде" },
];

const stats = [
  { icon: "Wallet", value: "0 ₽", label: "работаем без предоплаты" },
  { icon: "ShieldCheck", value: "100%", label: "ущерб за повреждение авто" },
  { icon: "UserCheck", value: "Эксперты", label: "независимые специалисты" },
  { icon: "Search", value: "Трасология", label: "профессиональные трасологи" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-[#0d0f12]">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent" />

      <div className="relative w-full max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <img src="/logo-legis.png" alt="ЛЕГИС ПРО" className="h-20 md:h-24 w-auto" />
            <div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white leading-none"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                ЛЕГИС <span className="text-[#d4a537]">ПРО</span>
              </h1>
              <p className="text-white/80 text-sm md:text-base tracking-[0.45em] mt-2 font-semibold">
                ПОМОЩЬ ПРИ ДТП
              </p>
            </div>
          </div>
          <p
            className="text-[#d4a537] text-xl md:text-2xl mb-6 animate-fade-up animate-fade-up-delay-1"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
          >
            от первого звонка до выплаты
          </p>
          <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Взыскиваем максимальные выплаты со страховых компаний.
            Оплата только по результату — вы ничем не рискуете.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 animate-fade-up animate-fade-up-delay-3">
            {PHONES.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="inline-flex items-center justify-center gap-2 bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] px-6 h-12 rounded-lg text-base font-bold whitespace-nowrap transition-colors"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
              >
                <Icon name="Phone" size={18} />
                {p.display}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-[#d4a537]/60 hover:border-[#d4a537] hover:bg-[#d4a537]/10 text-white px-6 h-12 rounded-lg text-base font-semibold whitespace-nowrap transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
            >
              БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 animate-fade-up animate-fade-up-delay-3">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-[#1a1d23]/80 border border-[#d4a537]/30 hover:border-[#d4a537] rounded-xl p-3 text-center transition-colors"
              >
                <Icon name={s.icon as "Wallet"} size={20} className="text-[#d4a537] mx-auto mb-1.5" />
                <div className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {s.value}
                </div>
                <div className="text-white/50 text-[11px] leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 lg:gap-8 animate-fade-up animate-fade-up-delay-2">
          <div className="w-0.5 shrink-0 bg-gradient-to-b from-transparent via-[#d4a537] to-transparent" />
          <ul className="space-y-5 py-2">
            {bannerServices.map((s) => (
              <li key={s.label} className="flex items-center gap-4">
                <span className="w-12 h-12 shrink-0 rounded-full border-2 border-[#d4a537] bg-[#0d0f12]/70 flex items-center justify-center">
                  <Icon name={s.icon as "Phone"} size={20} className="text-[#d4a537]" />
                </span>
                <span
                  className="text-white text-base md:text-lg font-semibold uppercase leading-snug"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                >
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
