import Icon from "@/components/ui/icon";
import { ADDRESS, WORK_HOURS, PHONES, EMAIL, TELEGRAM } from "@/lib/contacts";

export default function ContactsMap() {
  const mapSrc = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(ADDRESS.mapQuery)}&z=16`;

  return (
    <section id="contacts" className="py-20 bg-[#0d0f12]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <p className="text-[#d4a537] text-sm font-semibold tracking-widest uppercase mb-3">Где нас найти</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            НАШ ОФИС
          </h2>
          <div className="w-14 h-1 bg-[#d4a537] rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 border-2 border-[#d4a537] rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={22} className="text-[#d4a537]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Адрес</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{ADDRESS.full}</p>
                <a
                  href={`https://yandex.ru/maps/?rtext=~${encodeURIComponent(ADDRESS.mapQuery)}&rtt=auto`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                >
                  <Icon name="Navigation" size={16} />
                  ПОСТРОИТЬ МАРШРУТ
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 border-2 border-[#d4a537] rounded-full flex items-center justify-center">
                <Icon name="Clock" size={22} className="text-[#d4a537]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Режим работы</h3>
                <p className="text-white/60 text-sm leading-relaxed">{WORK_HOURS.weekdays}</p>
                <p className="text-white/60 text-sm leading-relaxed">{WORK_HOURS.weekend}</p>
                <p className="text-[#dc2626] text-sm font-semibold mt-1">Срочно — 24/7 по телефону</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 border-2 border-[#d4a537] rounded-full flex items-center justify-center">
                <Icon name="Phone" size={22} className="text-[#d4a537]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Телефоны</h3>
                <div className="space-y-2 mt-2">
                  {PHONES.map((p) => (
                    <div key={p.tel} className="flex flex-wrap items-center gap-2">
                      <a href={`tel:${p.tel}`} className="text-white/80 hover:text-[#d4a537] text-sm font-medium transition-colors min-w-[150px]">
                        {p.display}
                      </a>
                      <a
                        href={`https://wa.me/${p.digits}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Написать в WhatsApp ${p.display}`}
                        className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
                      >
                        <Icon name="MessageCircle" size={14} />
                        WhatsApp
                      </a>
                      <a
                        href={`https://t.me/+${p.digits}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Написать в Telegram ${p.display}`}
                        className="inline-flex items-center gap-1.5 bg-[#229ED9] hover:bg-[#1c8cc2] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
                      >
                        <Icon name="Send" size={14} />
                        Telegram
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 border-2 border-[#d4a537] rounded-full flex items-center justify-center">
                <Icon name="Mail" size={22} className="text-[#d4a537]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>E-mail</h3>
                <a href={`mailto:${EMAIL}`} className="text-white/60 hover:text-[#d4a537] text-sm transition-colors">{EMAIL}</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 border-2 border-[#d4a537] rounded-full flex items-center justify-center">
                <Icon name="Send" size={22} className="text-[#d4a537]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Telegram</h3>
                <a href={TELEGRAM.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#d4a537] text-sm transition-colors">{TELEGRAM.display}</a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#d4a537]/40 min-h-[320px] md:min-h-full">
            <iframe
              title="Карта офиса ЛЕГИС ПРО"
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