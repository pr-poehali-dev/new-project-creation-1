import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { PHONES, PRIMARY_PHONE, COMPANY, WORK_HOURS, ADDRESS, EMAIL } from "@/lib/contacts";
import { sendLead } from "@/lib/sendLead";

export default function ContactFooter() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendLead(
        phone,
        "Заявка с сайта ЛегисПро",
        `Новая заявка на консультацию!\nТелефон: ${phone}`
      );
      setSubmitted(true);
      setPhone("");
    } catch {
      setError(`Ошибка отправки. Позвоните нам напрямую: ${PRIMARY_PHONE.display}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CONTACT */}
      <section id="contact" className="py-20 bg-red-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ПОЛУЧИТЕ БЕСПЛАТНУЮ<br />КОНСУЛЬТАЦИЮ
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Оставьте номер — перезвоним в течение 5 минут
          </p>

          {submitted ? (
            <div className="bg-white/15 border border-white/30 rounded-sm p-8 text-white">
              <Icon name="CheckCircle" size={48} className="mx-auto mb-4" />
              <p className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>ЗАЯВКА ПРИНЯТА!</p>
              <p className="text-white/70 mt-2">Перезвоним в течение 5 минут</p>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={loading}
                    className="flex-1 bg-white/15 border-white/30 text-white placeholder:text-white/50 rounded-sm focus:border-white"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-[#111] hover:bg-[#222] text-white rounded-sm px-8 font-bold tracking-wide shrink-0"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
                  >
                    {loading ? "ОТПРАВКА..." : "ПЕРЕЗВОНИТЕ МНЕ"}
                  </Button>
                </div>
                <label className="flex items-start gap-2 mt-4 text-left text-white/70 text-xs leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    disabled={loading}
                    className="mt-0.5 shrink-0 accent-[#111]"
                  />
                  <span>
                    Я согласен на обработку персональных данных и принимаю условия{" "}
                    <Link to="/privacy" target="_blank" className="underline hover:text-white">
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

          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-3">Или позвоните нам напрямую:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-2 text-white font-bold text-lg hover:text-white/80 transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  <Icon name="Phone" size={18} />
                  {p.display}
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-sm">
              <Icon name="Clock" size={16} />
              <span>{WORK_HOURS.weekdays} · {WORK_HOURS.weekend}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d0d0d] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo + name */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-white font-bold tracking-wider text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ЛЕГИС<span className="text-red-500">ПРО</span>
            </span>
          </div>

          {/* Реквизиты */}
          <div className="text-white/40 text-xs leading-relaxed space-y-1 max-w-xs">
            <p className="text-white/60 font-semibold text-sm mb-2">Реквизиты</p>
            <p>{COMPANY.legalName}</p>
            <p>ИНН: {COMPANY.inn}</p>
            <p>ОГРНИП: {COMPANY.ogrnip}</p>
            <p>Адрес: {ADDRESS.full}</p>
            <p>E-mail: {EMAIL}</p>
          </div>

          {/* Контакт + копирайт */}
          <div className="text-right space-y-2">
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="block text-white/60 hover:text-white text-sm transition-colors">
                {p.display}
              </a>
            ))}
            <p className="text-white/40 text-xs">{WORK_HOURS.short}</p>
            <Link to="/privacy" className="block text-white/40 hover:text-white text-xs transition-colors">
              Политика конфиденциальности
            </Link>
            <p className="text-white/30 text-xs">© 2024 {COMPANY.name}. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING MESSENGERS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        {PHONES.map((p) => (
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
        {PHONES.map((p) => (
          <a
            key={`tg-${p.digits}`}
            href={`https://t.me/${p.digits}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Telegram ${p.display}`}
            className="w-12 h-12 rounded-full bg-[#229ED9] hover:scale-110 transition-transform shadow-lg flex items-center justify-center text-white"
          >
            <Icon name="Send" size={22} />
          </a>
        ))}
      </div>
    </>
  );
}