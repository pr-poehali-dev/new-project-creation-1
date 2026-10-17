import Icon from "@/components/ui/icon";
import { PRIMARY_PHONE, SITE, TELEGRAM } from "@/lib/contacts";

const values = [
  { icon: "ShieldCheck", label: "Честно и прозрачно" },
  { icon: "Target", label: "Работаем на результат" },
  { icon: "Clock", label: "Экономим ваше время и нервы" },
  { icon: "Handshake", label: "Индивидуальный подход" },
];

const oswald = { fontFamily: "'Oswald', sans-serif" };

export default function ScheduleUrgent() {
  return (
    <section className="py-20 bg-[#14171c]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* SCHEDULE */}
          <div className="bg-[#1a1d23] border border-[#d4a537]/60 rounded-xl p-6 md:p-8 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={oswald}>
              ГРАФИК РАБОТЫ
            </h3>
            <div className="w-14 h-1 bg-[#d4a537] rounded mb-8" />

            <div className="flex items-center gap-4">
              <span className="w-12 h-12 shrink-0 rounded-full border-2 border-[#d4a537] flex items-center justify-center">
                <Icon name="Calendar" size={20} className="text-[#d4a537]" />
              </span>
              <div>
                <p className="text-white/70 text-sm md:text-base">Понедельник – Пятница</p>
                <p className="text-3xl md:text-4xl font-bold text-[#d4a537] leading-tight" style={oswald}>
                  10:00 – 18:00
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10 my-6" />

            <div className="flex items-center gap-4">
              <span className="w-12 h-12 shrink-0 rounded-full border-2 border-[#d4a537] flex items-center justify-center">
                <Icon name="Calendar" size={20} className="text-[#d4a537]" />
              </span>
              <div>
                <p className="text-white/70 text-sm md:text-base">Суббота – Воскресенье</p>
                <p className="text-3xl md:text-4xl font-bold text-[#d4a537] leading-tight" style={oswald}>
                  ВЫХОДНОЙ
                </p>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <a
                href={`tel:${PRIMARY_PHONE.tel}`}
                className="inline-flex items-center gap-2 border border-[#d4a537] rounded-full px-5 py-2.5 text-white hover:bg-[#d4a537]/10 transition-colors text-sm md:text-base font-semibold"
              >
                <Icon name="PhoneCall" size={18} className="text-[#dc2626]" />
                Если что-то срочно — по звонку!
              </a>
            </div>
          </div>

          {/* URGENT */}
          <div className="bg-[#1a1d23] border border-white/20 rounded-xl p-6 md:p-8 flex flex-col">
            <div className="flex items-start gap-5 mb-6">
              <span className="w-16 h-16 shrink-0 rounded-full bg-[#dc2626] flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.45)]">
                <Icon name="PhoneCall" size={28} className="text-white" />
              </span>
              <div>
                <p className="text-xl md:text-2xl font-bold text-white leading-tight" style={oswald}>
                  ЕСЛИ ЧТО-ТО СРОЧНО
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[#dc2626] leading-none mt-1" style={oswald}>
                  ПО ЗВОНКУ!
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="text-white text-lg font-semibold">Мы на связи для вас</p>
              <span
                className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full tracking-wide"
                style={oswald}
              >
                <Icon name="Clock" size={14} />
                24/7 ПО ТЕЛЕФОНУ
              </span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Даже в выходные и нерабочее время проконсультируем и подскажем, что делать в вашей
              ситуации.
            </p>

            <div className="mt-auto bg-[#0d0f12] border border-white/10 rounded-xl p-4 md:p-5">
              <a href={`tel:${PRIMARY_PHONE.tel}`} className="flex items-center gap-4 group">
                <span className="w-12 h-12 shrink-0 rounded-lg bg-[#d4a537] flex items-center justify-center">
                  <Icon name="Phone" size={22} className="text-[#111]" />
                </span>
                <span
                  className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#d4a537] transition-colors"
                  style={oswald}
                >
                  {PRIMARY_PHONE.display}
                </span>
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 pt-4 border-t border-white/10 text-sm">
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-[#d4a537] transition-colors"
                >
                  <Icon name="Globe" size={16} className="text-[#d4a537]" />
                  {SITE.display}
                </a>
                <a
                  href={TELEGRAM.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-[#d4a537] transition-colors"
                >
                  <Icon name="Send" size={16} className="text-[#d4a537]" />
                  {TELEGRAM.display}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SLOGAN + VALUES STRIP */}
        <div className="mt-6 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] rounded-xl overflow-hidden border border-[#d4a537]/40">
          <div className="bg-[#d4a537] text-[#111] p-6 md:p-8 flex items-center gap-4">
            <Icon name="ShieldCheck" size={44} className="shrink-0 text-[#111]" />
            <p className="text-xl md:text-2xl font-bold leading-tight uppercase" style={oswald}>
              Защищаем ваши интересы — добиваемся полной выплаты!
            </p>
          </div>
          <div className="bg-[#1a1d23] grid grid-cols-2 md:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.label}
                className={`flex flex-col items-center justify-center text-center gap-3 p-5 md:p-6 ${
                  i > 0 ? "md:border-l border-white/10" : ""
                } ${i % 2 === 1 ? "border-l md:border-l border-white/10" : ""} ${
                  i > 1 ? "border-t md:border-t-0 border-white/10" : ""
                }`}
              >
                <Icon name={v.icon as "Target"} size={30} className="text-[#d4a537]" />
                <span className="text-white text-sm font-semibold uppercase leading-snug" style={oswald}>
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
