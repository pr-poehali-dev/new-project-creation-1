import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { COMPANY, EMAIL, PHONES, ADDRESS } from "@/lib/contacts";

const OSWALD = { fontFamily: "'Oswald', sans-serif" };

const sections = [
  {
    title: "Общие положения",
    text: `Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта ${COMPANY.legalName} (далее — «Оператор»). Используя сайт и оставляя свои данные, пользователь подтверждает согласие с условиями настоящей Политики.`,
  },
  {
    title: "Какие данные мы собираем",
    text: "Оператор обрабатывает персональные данные, которые пользователь предоставляет добровольно при заполнении форм на сайте: имя, номер телефона, а также иные данные, переданные при обращении.",
  },
  {
    title: "Цели обработки данных",
    text: "Персональные данные используются для обратной связи с пользователем, предоставления консультаций, оказания юридических услуг и информирования о статусе обращения.",
  },
  {
    title: "Защита данных",
    text: "Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования и иных неправомерных действий. Данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ.",
  },
  {
    title: "Права пользователя",
    text: "Пользователь вправе в любой момент отозвать согласие на обработку персональных данных, направив соответствующий запрос на контактные данные Оператора, указанные ниже.",
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      <nav className="sticky top-0 z-40 bg-[#0d0f12]/95 backdrop-blur border-b border-[#d4a537]/20">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-legis.png" alt="ЛЕГИС ПРО" className="h-10 w-auto" />
            <span className="text-white text-xl font-bold tracking-wider" style={OSWALD}>
              ЛЕГИС <span className="text-[#d4a537]">ПРО</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-white/70 hover:text-[#d4a537] text-sm transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <p className="text-[#d4a537] text-sm font-semibold tracking-widest uppercase mb-3">Документы</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white uppercase mb-4" style={OSWALD}>
          Политика конфиденциальности
        </h1>
        <div className="w-14 h-1 bg-[#d4a537] rounded mb-12" />

        <div className="space-y-5">
          {sections.map((s, i) => (
            <section
              key={s.title}
              className="bg-[#1a1d23] border border-[#d4a537]/30 rounded-xl p-6 md:p-8 flex gap-5"
            >
              <div
                className="w-11 h-11 shrink-0 rounded-full border-2 border-[#d4a537] flex items-center justify-center text-[#d4a537] font-bold"
                style={OSWALD}
              >
                {i + 1}
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white uppercase mb-2" style={OSWALD}>
                  {s.title}
                </h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">{s.text}</p>
              </div>
            </section>
          ))}

          <section className="bg-[#1a1d23] border border-[#d4a537] rounded-xl p-6 md:p-8 flex gap-5">
            <div
              className="w-11 h-11 shrink-0 rounded-full bg-[#d4a537] text-[#111] flex items-center justify-center font-bold"
              style={OSWALD}
            >
              {sections.length + 1}
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold text-white uppercase mb-4" style={OSWALD}>
                Контакты Оператора
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base">
                <div className="sm:col-span-2 text-white font-semibold">{COMPANY.legalName}</div>
                <div className="text-white/60">
                  <span className="text-white/40">ИНН:</span> {COMPANY.inn}
                </div>
                <div className="text-white/60">
                  <span className="text-white/40">ОГРНИП:</span> {COMPANY.ogrnip}
                </div>
                <a
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(ADDRESS.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 flex gap-2 text-white/60 hover:text-[#d4a537] transition-colors"
                >
                  <Icon name="MapPin" size={18} className="text-[#d4a537] shrink-0 mt-0.5" />
                  {ADDRESS.full}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-white/60 hover:text-[#d4a537] transition-colors"
                >
                  <Icon name="Mail" size={18} className="text-[#d4a537] shrink-0" />
                  {EMAIL}
                </a>
                <div className="flex flex-col gap-1">
                  {PHONES.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="flex items-center gap-2 text-white/60 hover:text-[#d4a537] transition-colors"
                    >
                      <Icon name="Phone" size={18} className="text-[#d4a537] shrink-0" />
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] font-bold px-8 h-12 rounded-lg transition-colors"
            style={{ ...OSWALD, letterSpacing: "0.08em" }}
          >
            <Icon name="ArrowLeft" size={18} />
            ВЕРНУТЬСЯ НА САЙТ
          </Link>
        </div>
      </div>

      <footer className="border-t border-white/10 py-6 text-center text-white/40 text-sm">
        ДТП не ждёт — не ждите и вы! <span className="text-[#d4a537]">Мы защитим ваши права.</span>
      </footer>
    </div>
  );
}