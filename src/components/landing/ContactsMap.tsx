import Icon from "@/components/ui/icon";
import { ADDRESS, WORK_HOURS, PHONES, EMAIL } from "@/lib/contacts";

export default function ContactsMap() {
  const mapSrc = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(ADDRESS.mapQuery)}&z=16`;

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <p className="text-red-700 text-sm font-semibold tracking-widest uppercase mb-3">Где нас найти</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            НАШ ОФИС
          </h2>
          <div className="w-14 h-1 bg-red-700 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-red-50 rounded-sm flex items-center justify-center">
                <Icon name="MapPin" size={22} className="text-red-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111] mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Адрес</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ADDRESS.full}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-red-50 rounded-sm flex items-center justify-center">
                <Icon name="Clock" size={22} className="text-red-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111] mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Режим работы</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{WORK_HOURS.weekdays}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{WORK_HOURS.weekend}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-red-50 rounded-sm flex items-center justify-center">
                <Icon name="Phone" size={22} className="text-red-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111] mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Телефоны</h3>
                {PHONES.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="block text-gray-500 hover:text-red-700 text-sm transition-colors">
                    {p.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-red-50 rounded-sm flex items-center justify-center">
                <Icon name="Mail" size={22} className="text-red-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111] mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>E-mail</h3>
                <a href={`mailto:${EMAIL}`} className="text-gray-500 hover:text-red-700 text-sm transition-colors">{EMAIL}</a>
              </div>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden border-2 border-gray-100 min-h-[320px] md:min-h-full">
            <iframe
              title="Карта офиса ЛегисПро"
              src={mapSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full min-h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
