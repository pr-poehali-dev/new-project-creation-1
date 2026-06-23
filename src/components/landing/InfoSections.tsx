import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Car",
    title: "Помощь при ДТП",
    desc: "Бесплатная консультация 24/7, помощь в сборе документов, полное сопровождение от начала до конечного результата в страховой компании и в суде. Взыскиваем полный ущерб.",
    accent: true,
  },
  {
    icon: "FileText",
    title: "Оформление ОСАГО",
    desc: "Оформим полис ОСАГО быстро и без переплат. Подберём выгодные условия среди ведущих страховых компаний.",
    accent: false,
  },
  {
    icon: "Scale",
    title: "Досудебное урегулирование",
    desc: "Переговоры со страховой компанией, составление претензий и получение максимальной выплаты без суда.",
    accent: false,
  },
  {
    icon: "Gavel",
    title: "Судебная защита",
    desc: "Полное сопровождение в суде: от искового заявления до выдачи исполнительного листа. Оплата по результату.",
    accent: false,
  },
];

const advantages = [
  {
    icon: "Wallet",
    title: "Работаем без предоплаты",
    desc: "Вы не платите ни рубля до результата. Наш гонорар — это процент с фактически взысканной суммы. Нет выплаты — нет оплаты.",
  },
  {
    icon: "ShieldCheck",
    title: "Полный ущерб за авто",
    desc: "Взыскиваем 100% реального ущерба за повреждение транспортного средства, а не заниженные суммы от страховой компании.",
  },
  {
    icon: "UserCheck",
    title: "Независимые эксперты",
    desc: "Привлекаем независимых специалистов для объективной оценки повреждений. Их заключения принимаются судами без вопросов.",
  },
  {
    icon: "Search",
    title: "Профессиональные трасологи",
    desc: "Наши трасологи восстанавливают полную картину ДТП по следам и повреждениям — это решающий аргумент в спорных делах.",
  },
];

const steps = [
  { num: "01", title: "Звонок", desc: "Бесплатная консультация по вашей ситуации. Оцениваем перспективы." },
  { num: "02", title: "Документы", desc: "Собираем все необходимые документы. Проводим независимую экспертизу." },
  { num: "03", title: "Результат", desc: "Получаете максимальную выплату. Гонорар — только с выигранной суммы." },
];

const reviews = [
  {
    name: "Андрей М.",
    city: "Петропавловск-Камчатский",
    date: "март 2025",
    text: "Влетели мне в бок на перекрёстке, страховая упёрлась — насчитали 80 тысяч, хотя бампер и дверь под замену. Ребята сделали свою экспертизу, дошли до суда и взыскали 340 тысяч. Я даже не ожидал такой суммы, честно. Спасибо!",
    stars: 5,
  },
  {
    name: "Елена Р.",
    city: "Елизово",
    date: "февраль 2025",
    text: "Оформляла ОСАГО, в банке навязывали кучу допов и выходило дорого. Тут всё по-человечески объяснили, подобрали страховую, вышло заметно дешевле. Заняло минут 20, всё онлайн.",
    stars: 5,
  },
  {
    name: "Ольга С.",
    city: "Вилючинск",
    date: "ноябрь 2024",
    text: "Долго сомневалась, обращаться или нет — боялась, что придётся платить вперёд. По факту не отдала ни рубля до результата, гонорар взяли процентом с выигранного. Всё честно, рекомендую.",
    stars: 5,
  },
  {
    name: "Сергей П.",
    city: "Петропавловск-Камчатский",
    date: "октябрь 2024",
    text: "Страховая занизила выплату почти в три раза. Сам бы я с ними точно не справился. Юристы спокойно довели дело до конца, добились доплаты плюс неустойку. Единственное — суд немного затянулся, но это уже не к ним вопрос.",
    stars: 4,
  },
  {
    name: "Марина В.",
    city: "Елизово",
    date: "сентябрь 2024",
    text: "Попала в ДТП впервые, вообще не понимала, что делать. Позвонила, проконсультировали бесплатно прямо по телефону, потом помогли собрать все документы. Спокойно, без воды и навязывания. Очень благодарна за поддержку.",
    stars: 5,
  },
];

export default function InfoSections() {
  return (
    <>
      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14">
            <p className="text-red-700 text-sm font-semibold tracking-widest uppercase mb-3">Что мы делаем</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              НАШИ УСЛУГИ
            </h2>
            <div className="w-14 h-1 bg-red-700 rounded" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card
                key={s.title}
                className={`card-hover border-2 rounded-sm cursor-pointer ${s.accent ? "bg-red-700 border-red-700" : "bg-white border-gray-100 hover:border-red-200"}`}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${s.accent ? "bg-red-800" : "bg-red-50"}`}>
                    <Icon name={s.icon as "Car"} size={22} className={s.accent ? "text-white" : "text-red-700"} />
                  </div>
                  <h3
                    className={`text-lg font-bold mb-3 ${s.accent ? "text-white" : "text-[#111]"}`}
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}
                  >
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${s.accent ? "text-white/80" : "text-gray-500"}`}>
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14">
            <p className="text-red-700 text-sm font-semibold tracking-widest uppercase mb-3">Почему мы</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              НАШИ ПРЕИМУЩЕСТВА
            </h2>
            <div className="w-14 h-1 bg-red-700 rounded" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="card-hover flex gap-5 bg-white border-2 border-gray-100 hover:border-red-200 rounded-sm p-7"
              >
                <div className="w-14 h-14 shrink-0 bg-red-50 rounded-sm flex items-center justify-center">
                  <Icon name={a.icon as "Wallet"} size={26} className="text-red-700" />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#111] mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14">
            <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">Просто и понятно</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
              КАК МЫ РАБОТАЕМ
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.num}>
                <div className="text-7xl font-bold text-red-700/25 mb-4 leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14">
            <p className="text-red-700 text-sm font-semibold tracking-widest uppercase mb-3">Наши клиенты</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111]" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ОТЗЫВЫ
            </h2>
            <div className="w-14 h-1 bg-red-700 rounded mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, idx) => (
              <Card key={idx} className="card-hover border-0 shadow-md rounded-sm">
                <CardContent className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < r.stars ? "text-red-600 fill-red-600" : "text-gray-200 fill-gray-200"}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">{r.date}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {r.name[0]}
                    </div>
                    <div>
                      <span className="block font-semibold text-[#111] text-sm leading-tight">{r.name}</span>
                      <span className="block text-gray-400 text-xs">{r.city}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}