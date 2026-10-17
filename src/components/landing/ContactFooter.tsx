import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import PhoneInput from "@/components/landing/PhoneInput";
import { PHONES, PRIMARY_PHONE, QUESTIONS_PHONE, COMPANY, WORK_HOURS, ADDRESS, EMAIL, SITE, TELEGRAM, TWOGIS } from "@/lib/contacts";
import { sendLead } from "@/lib/sendLead";

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendLead({ name, phone, subject: "Бесплатная консультация" });
      setSubmitted(true);
      setPhone("");
      setName("");
    } catch {
      setError(`Ошибка отправки. Позвоните нам напрямую: ${PRIMARY_PHONE.display} или ${QUESTIONS_PHONE.display}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#14171c] border-t border-[#d4a537]/20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-[#d4a537] text-sm font-semibold tracking-widest uppercase mb-3">Бесплатно</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ПОЛУЧИТЕ БЕСПЛАТНУЮ<br />КОНСУЛЬТАЦИЮ
          </h2>
          <div className="w-14 h-1 bg-[#d4a537] rounded mx-auto mb-6" />
          <p className="text-white/60 mb-10 text-lg">
            Оставьте номер — перезвоним в течение 5 минут
          </p>

          {submitted ? (
            <div className="bg-[#1a1d23] border border-[#d4a537]/40 rounded-xl p-8 text-white">
              <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-[#d4a537]" />
              <p className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>ЗАЯВКА ПРИНЯТА!</p>
              <p className="text-white/60 mt-2">Перезвоним в течение 5 минут</p>
            </div>
          ) : (
            <div className="bg-[#1a1d23] border border-[#d4a537]/40 rounded-xl p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    className="flex-1 h-11 bg-[#0d0f12] border-white/10 text-white placeholder:text-white/40 rounded-lg focus-visible:ring-[#d4a537] focus:border-[#d4a537]"
                  />
                  <PhoneInput
                    value={phone}
                    onValueChange={setPhone}
                    required
                    disabled={loading}
                    className="flex-1 h-11 bg-[#0d0f12] border-white/10 text-white placeholder:text-white/40 rounded-lg focus-visible:ring-[#d4a537] focus:border-[#d4a537]"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-[#d4a537] hover:bg-[#e6b94a] text-[#111] rounded-lg px-8 font-bold tracking-wide shrink-0"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
                  >
                    {loading ? "ОТПРАВКА..." : "ПЕРЕЗВОНИТЕ МНЕ"}
                  </Button>
                </div>
                <label className="flex items-start gap-2 mt-4 text-left text-white/60 text-xs leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    disabled={loading}
                    className="mt-0.5 shrink-0 accent-[#d4a537]"
                  />
                  <span>
                    Я согласен на обработку персональных данных и принимаю условия{" "}
                    <Link to="/privacy" target="_blank" className="underline hover:text-[#d4a537]">
                      политики конфиденциальности
                    </Link>
                  </span>
                </label>
              </form>
              {error && (
                <p className="text-white/80 text-sm mt-3">{error}</p>
              )}
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-3">Или позвоните нам напрямую:</p>
            <div className="flex flex-col items-center justify-center gap-3">
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-2 text-[#d4a537] font-bold text-2xl hover:text-[#e6b94a] transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  <Icon name="Phone" size={20} />
                  {p.display}
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-sm">
              <Icon name="Clock" size={16} className="text-[#d4a537]" />
              <span>{WORK_HOURS.weekdays} · {WORK_HOURS.weekend}</span>
            </div>
            <p className="mt-2 text-[#dc2626] text-sm font-semibold">Срочно — 24/7 по телефону</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d0f12] border-t border-[#d4a537]/20">
        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
          {/* Logo + name */}
          <div>
            <a href="#" aria-label="Наверх" className="flex items-center gap-3 mb-4 w-fit">
              <img src="/logo-legis.png" alt="ЛЕГИС ПРО" className="h-12 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="text-white font-bold tracking-wider text-xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  ЛЕГИС <span className="text-[#d4a537]">ПРО</span>
                </span>
                <span className="text-white/50 text-[10px] tracking-[0.3em] mt-1">ПОМОЩЬ ПРИ ДТП</span>
              </span>
            </a>
            <p className="text-[#d4a537] text-sm">от первого звонка до выплаты</p>
          </div>

          {/* Контакты */}
          <div className="space-y-2.5 text-sm">
            <p className="text-white font-semibold mb-3" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}>КОНТАКТЫ</p>
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 text-white hover:text-[#d4a537] font-semibold transition-colors">
                <Icon name="Phone" size={15} className="text-[#d4a537]" />
                {p.display}
              </a>
            ))}
            <p className="flex items-center gap-2 text-white/60">
              <Icon name="Clock" size={15} className="text-[#d4a537]" />
              {WORK_HOURS.short}, Сб–Вс выходной
            </p>
            <p className="flex items-center gap-2 text-[#dc2626] font-semibold">
              <Icon name="PhoneCall" size={15} />
              Срочно — 24/7 по телефону
            </p>
            <a href={TELEGRAM.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-[#d4a537] transition-colors">
              <Icon name="Send" size={15} className="text-[#d4a537]" />
              {TELEGRAM.display}
            </a>
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-[#d4a537] transition-colors">
              <Icon name="Globe" size={15} className="text-[#d4a537]" />
              {SITE.display}
            </a>
            <a href={TWOGIS.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-[#d4a537] transition-colors">
              <Icon name="MapPin" size={15} className="text-[#d4a537]" />
              {TWOGIS.display}
            </a>
          </div>

          {/* Реквизиты */}
          <div className="text-white/40 text-xs leading-relaxed space-y-1">
            <p className="text-white font-semibold text-sm mb-3" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}>РЕКВИЗИТЫ</p>
            <p>{COMPANY.legalName}</p>
            <p>ИНН: {COMPANY.inn}</p>
            <p>ОГРНИП: {COMPANY.ogrnip}</p>
            <p>
              Адрес:{" "}
              <a
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(ADDRESS.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4a537] underline-offset-2 hover:underline transition-colors"
              >
                {ADDRESS.full}
              </a>
            </p>
            <p>
              E-mail:{" "}
              <a href={`mailto:${EMAIL}`} className="hover:text-[#d4a537] underline-offset-2 hover:underline transition-colors">
                {EMAIL}
              </a>
            </p>
            <Link to="/privacy" className="block pt-2 text-white/50 hover:text-[#d4a537] transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center">
            <p
              className="text-white text-base md:text-lg font-bold uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
            >
              ДТП не ждёт — не ждите и вы!{" "}
              <span className="text-[#d4a537]">Мы защитим ваши права.</span>
            </p>
            <p className="text-white/30 text-xs mt-3">© 2024 {COMPANY.name}. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING MESSENGERS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        {PHONES.slice(0, 1).map((p) => (
          <a
            key={`wa-${p.digits}`}
            href={`https://wa.me/${p.digits}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${p.display}`}
            className="w-12 h-12 rounded-full bg-[#25D366] hover:scale-110 transition-transform shadow-lg flex items-center justify-center text-white"
          >
            <Icon name="MessageCircle" size={24} />
          </a>
        ))}
        <a
          href={TELEGRAM.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Telegram ${TELEGRAM.display}`}
          className="w-12 h-12 rounded-full bg-[#229ED9] hover:scale-110 transition-transform shadow-lg flex items-center justify-center text-white"
        >
          <Icon name="Send" size={22} />
        </a>
      </div>
    </>
  );
}