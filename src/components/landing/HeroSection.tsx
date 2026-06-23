import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { PRIMARY_PHONE } from "@/lib/contacts";

const stats = [
  { icon: "Wallet", value: "0 ₽", label: "работаем без предоплаты" },
  { icon: "ShieldCheck", value: "100%", label: "ущерб за повреждение авто" },
  { icon: "UserCheck", value: "Эксперты", label: "независимые специалисты" },
  { icon: "Search", value: "Трасология", label: "профессиональные трасологи" },
];

export default function HeroSection() {
  return (
    <section
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 55%, #0d0d0d 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-24 top-1/4 w-96 h-96 border border-red-900/20 rounded-full" />
        <div className="absolute -left-12 top-1/4 w-72 h-72 border border-red-900/30 rounded-full" />
        <div
          className="absolute right-0 bottom-0 w-1/2 h-full opacity-10"
          style={{ background: "radial-gradient(circle at 100% 100%, #DC2626 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-6 bg-red-700/20 text-red-400 border border-red-700/30 text-xs tracking-widest uppercase animate-fade-up">
            Юридическая помощь
          </Badge>
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up animate-fade-up-delay-1"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            ПОПАЛИ В ДТП?<br />
            <span className="text-red-500">МЫ ВЕРНЁМ</span><br />
            ВАШИ ДЕНЬГИ
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Взыскиваем максимальные выплаты со страховых компаний.
            Оплата только по результату — вы ничем не рискуете.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-fade-up-delay-3">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white px-8 rounded-sm text-base font-semibold tracking-wide"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
              >
                БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
              </Button>
            </a>
            <a href={`tel:${PRIMARY_PHONE.tel}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 rounded-sm text-base bg-transparent"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
              >
                <Icon name="Phone" size={18} className="mr-2" />
                ПОЗВОНИТЬ
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 animate-fade-up animate-fade-up-delay-2">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-white/5 border border-white/10 rounded-sm p-6 text-center hover:bg-white/10 hover:border-red-700/40 transition-all"
            >
              <Icon name={s.icon as "Wallet"} size={28} className="text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}