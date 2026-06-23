import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "Phone",
    title: "Обращение и анализ",
    term: "1 день",
    desc: "Бесплатно изучаем документы по ДТП, оцениваем перспективы и реальную сумму к взысканию. Заключаем договор.",
  },
  {
    icon: "FileSearch",
    title: "Независимая экспертиза",
    term: "3–7 дней",
    desc: "Проводим оценку ущерба и трасологическую экспертизу. Готовим доказательную базу для страховой и суда.",
  },
  {
    icon: "FileText",
    title: "Претензия в страховую",
    term: "до 20 дней",
    desc: "Направляем досудебную претензию. Часто на этом этапе страховая доплачивает без суда.",
  },
  {
    icon: "Gavel",
    title: "Суд при необходимости",
    term: "1–3 месяца",
    desc: "Если страховая занижает выплату — идём в суд. Взыскиваем ущерб, неустойку, штраф и расходы.",
  },
  {
    icon: "Wallet",
    title: "Получение денег",
    term: "результат",
    desc: "Вы получаете максимальную выплату на счёт. Наш гонорар — только процент с фактически взысканной суммы.",
  },
];

export default function PaymentSteps() {
  return (
    <section id="payment-steps" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <p className="text-red-700 text-sm font-semibold tracking-widest uppercase mb-3">Пошаговый процесс</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ЭТАПЫ ВЫПЛАТЫ
          </h2>
          <div className="w-14 h-1 bg-red-700 rounded" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-7 top-4 bottom-4 w-0.5 bg-red-200" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex gap-5 md:gap-6">
                <div className="relative z-10 w-14 h-14 shrink-0 bg-red-700 rounded-sm flex items-center justify-center">
                  <Icon name={s.icon as "Phone"} size={24} className="text-white" />
                </div>
                <div className="card-hover flex-1 bg-white border-2 border-gray-100 hover:border-red-200 rounded-sm p-5 md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3
                      className="text-lg md:text-xl font-bold text-[#111]"
                      style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}
                    >
                      <span className="text-red-700 mr-2">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-sm">
                      <Icon name="Clock" size={13} />
                      {s.term}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
