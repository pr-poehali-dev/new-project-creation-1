import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { PRIMARY_PHONE, QUESTIONS_PHONE } from "@/lib/contacts";

const OSWALD = { fontFamily: "'Oswald', sans-serif" };

const faq = [
  {
    icon: "Clock",
    q: "Сколько времени занимает получение выплаты?",
    a: [
      "Страховая обязана рассмотреть заявление о выплате в течение 20 дней (не считая праздничных).",
      "Если сумма занижена — направляем досудебную претензию, на этот этап закладываем до 30 дней. Часто страховая доплачивает уже здесь.",
      "Если без суда договориться не удалось — судебное разбирательство обычно занимает 1–3 месяца.",
    ],
  },
  {
    icon: "Wallet",
    q: "Сколько стоят ваши услуги?",
    a: [
      "Консультация и оценка перспектив — бесплатно.",
      "Предоплаты нет: наш гонорар — процент с фактически взысканной суммы. Нет выплаты — нет оплаты.",
      "Точные условия фиксируем в договоре после изучения вашей ситуации.",
    ],
  },
  {
    icon: "Receipt",
    q: "Кто оплачивает экспертизу и судебные расходы?",
    a: [
      "При выигрыше дела расходы на независимую экспертизу, юридические услуги и госпошлину взыскиваются со страховой компании или виновника ДТП.",
      "Дополнительно взыскиваем неустойку за просрочку выплаты и штраф за отказ выполнить требования добровольно.",
    ],
  },
  {
    icon: "FileText",
    q: "Какие документы нужны после ДТП?",
    a: [
      "Паспорт и водительское удостоверение.",
      "Свидетельство о регистрации ТС (СТС) или ПТС.",
      "Полис ОСАГО.",
      "Европротокол или документы из ГИБДД (определение, постановление, приложение со сведениями о ДТП).",
      "Фото и видео с места аварии, контакты свидетелей — если есть.",
      "Реквизиты банковского счёта для получения выплаты.",
    ],
    note: "Нет части документов? Не страшно — поможем восстановить и собрать недостающее.",
  },
  {
    icon: "AlertTriangle",
    q: "Что делать сразу после аварии?",
    a: [
      "Остановитесь, включите аварийку и выставите знак аварийной остановки.",
      "Сфотографируйте место ДТП, положение машин, повреждения и номера.",
      "Оформите европротокол или вызовите ГИБДД.",
      "Ничего не подписывайте в спешке — позвоните нам, подскажем бесплатно, даже в выходные.",
    ],
  },
  {
    icon: "ShieldAlert",
    q: "Страховая уже выплатила, но мало. Можно ли получить доплату?",
    a: [
      "Да. Если выплаченной суммы не хватает на ремонт, проводим независимую экспертизу и добиваемся доплаты до реальной стоимости ущерба.",
      "Обращайтесь как можно скорее — так проще собрать доказательства.",
    ],
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-[#14171c]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-14">
          <p className="text-[#d4a537] text-sm font-semibold tracking-widest uppercase mb-3">Отвечаем честно</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4" style={OSWALD}>
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div className="w-14 h-1 bg-[#d4a537] rounded" />
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="bg-[#1a1d23] border border-[#d4a537]/30 data-[state=open]:border-[#d4a537] rounded-xl px-5 md:px-6 transition-colors"
            >
              <AccordionTrigger className="py-5 text-left text-white hover:no-underline hover:text-[#d4a537] [&>svg]:text-[#d4a537] [&>svg]:h-5 [&>svg]:w-5 gap-4">
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 shrink-0 rounded-full border-2 border-[#d4a537] flex items-center justify-center">
                    <Icon name={item.icon} size={18} className="text-[#d4a537]" />
                  </span>
                  <span className="text-base md:text-lg font-semibold uppercase" style={{ ...OSWALD, letterSpacing: "0.03em" }}>
                    {item.q}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 md:pl-14">
                <ul className="space-y-2.5">
                  {item.a.map((line) => (
                    <li key={line} className="flex gap-3 text-white/70 text-sm md:text-base leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d4a537] shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-4 text-[#d4a537] text-sm font-medium">{item.note}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-[#1a1d23] border border-[#d4a537]/40 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <p className="text-xl font-bold text-white uppercase" style={OSWALD}>Не нашли ответ на свой вопрос?</p>
            <p className="text-white/60 text-sm mt-1">Позвоните — бесплатно разберём вашу ситуацию</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            {[PRIMARY_PHONE, QUESTIONS_PHONE].map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="inline-flex items-center justify-center gap-2 bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] font-bold px-6 h-12 rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto"
                style={{ ...OSWALD, letterSpacing: "0.06em" }}
              >
                <Icon name="Phone" size={18} />
                {p.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}