import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { COMPANY, EMAIL, PHONES } from "@/lib/contacts";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-[#111111] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ЛЕГИС<span className="text-red-500">ПРО</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#111] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </h1>
        <div className="w-14 h-1 bg-red-700 rounded mb-8" />

        <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
              пользователей сайта {COMPANY.legalName} (далее — «Оператор»). Используя сайт и оставляя свои данные,
              пользователь подтверждает согласие с условиями настоящей Политики.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>2. Какие данные мы собираем</h2>
            <p>
              Оператор обрабатывает персональные данные, которые пользователь предоставляет добровольно при заполнении
              форм на сайте: номер телефона, а также иные данные, переданные при обращении.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>3. Цели обработки данных</h2>
            <p>
              Персональные данные используются для обратной связи с пользователем, предоставления консультаций,
              оказания юридических услуг и информирования о статусе обращения.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>4. Защита данных</h2>
            <p>
              Оператор принимает необходимые организационные и технические меры для защиты персональных данных от
              неправомерного доступа, уничтожения, изменения, блокирования и иных неправомерных действий. Данные не
              передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>5. Права пользователя</h2>
            <p>
              Пользователь вправе в любой момент отозвать согласие на обработку персональных данных, направив
              соответствующий запрос на контактные данные Оператора, указанные ниже.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>6. Контакты Оператора</h2>
            <p>{COMPANY.legalName}</p>
            <p>ИНН: {COMPANY.inn}</p>
            <p>ОГРН: {COMPANY.ogrn}</p>
            <p>E-mail: <a href={`mailto:${EMAIL}`} className="text-red-700 hover:underline">{EMAIL}</a></p>
            <p>Телефон: {PHONES.map((p) => p.display).join(", ")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
