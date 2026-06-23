import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const EMAILJS_SERVICE_ID = "service_ngubj7j";
const EMAILJS_TEMPLATE_ID = "__ejs-test-mail-service_";
const EMAILJS_PUBLIC_KEY = "6XBgBCrsMs5LWl-Kg4o4Y";

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

const stats = [
  { value: "1 200+", label: "дел выиграно" },
  { value: "98%", label: "успешных исходов" },
  { value: "14 лет", label: "на рынке" },
  { value: "0 ₽", label: "предоплата" },
];

const steps = [
  { num: "01", title: "Звонок", desc: "Бесплатная консультация по вашей ситуации. Оцениваем перспективы." },
  { num: "02", title: "Документы", desc: "Собираем все необходимые документы. Проводим независимую экспертизу." },
  { num: "03", title: "Результат", desc: "Получаете максимальную выплату. Гонорар — только с выигранной суммы." },
];

const reviews = [
  {
    name: "Андрей М.",
    text: "После ДТП страховая предлагала 80 тыс., ЛегисПро взыскали 340 тыс. Работают чётко и профессионально.",
    stars: 5,
  },
  {
    name: "Елена Р.",
    text: "Очень быстро оформили ОСАГО, объяснили все нюансы. Цена оказалась ниже, чем в банке.",
    stars: 5,
  },
  {
    name: "Дмитрий К.",
    text: "Помогли с виновником ДТП, который скрылся. Думал, что денег не получу — взыскали всё через суд.",
    stars: 5,
  },
];

export default function Index() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: "Заявка с сайта ЛегисПро",
          message: `Новая заявка на консультацию!\nТелефон: ${phone}`,
          reply_to: "legis-pro@outlook.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setPhone("");
    } catch {
      setError("Ошибка отправки. Позвоните нам напрямую: 8 999 299-74-47");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#111111]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white text-xl font-bold tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ЛЕГИС<span className="text-red-500">ПРО</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#how" className="hover:text-white transition-colors">Как работаем</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
          </div>
          <a href="tel:+79992997447">
            <Button className="bg-red-700 hover:bg-red-800 text-white text-sm px-5 h-9 rounded-sm">
              <Icon name="Phone" size={15} className="mr-2" />
              8 999 299-74-47
            </Button>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative pt-16 min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 55%, #0d0d0d 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 top-1/4 w-96 h-96 border border-red-900/20 rounded-full" />
          <div className="absolute -left-12 top-1/4 w-72 h-72 border border-red-900/30 rounded-full" />
          <div
            className="absolute right-0 bottom-0 w-1/2 h-full opacity-10"
            style={{ background: "radial-gradient(circle at 100% 100%, #DC2626 0%, transparent 60%)" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-red-700/20 text-red-400 border border-red-700/30 text-xs tracking-widest uppercase animate-fade-up">
              Юридическая помощь
            </Badge>
            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up animate-fade-up-delay-1"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              ПОПАЛИ В ДТП?<br />
              <span className="text-red-500">МЫ ВЕРНЁМ</span><br />
              ВАШИ ДЕНЬГИ
            </h1>
            <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed animate-fade-up animate-fade-up-delay-2">
              Взыскиваем максимальные выплаты со страховых компаний.
              Оплата только по результату — вы ничем не рискуете.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-fade-up-delay-3">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-red-700 hover:bg-red-800 text-white px-8 rounded-sm text-base font-semibold tracking-wide"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
                >
                  БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                </Button>
              </a>
              <a href="tel:+79992997447">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 rounded-sm text-base bg-transparent"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  ПОЗВОНИТЬ
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-up animate-fade-up-delay-2">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-white/5 border border-white/10 rounded-sm p-6 text-center hover:bg-white/10 hover:border-red-700/40 transition-all"
              >
                <div className="text-4xl font-bold text-red-500 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {s.value}
                </div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {reviews.map((r) => (
              <Card key={r.name} className="card-hover border-0 shadow-md rounded-sm">
                <CardContent className="p-7">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-red-600 fill-red-600" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {r.name[0]}
                    </div>
                    <span className="font-semibold text-[#111] text-sm">{r.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
              </form>
              {error && (
                <p className="text-white/80 text-sm mt-3">{error}</p>
              )}
            </div>
          )}
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
          <div className="text-white/40 text-xs leading-relaxed space-y-1">
            <p className="text-white/60 font-semibold text-sm mb-2">Реквизиты</p>
            <p>ИП Ледюкова Диана Евгеньевна</p>
            <p>ИНН: 410124236711</p>
            <p>ОГРН: 325410000018892</p>
          </div>

          {/* Контакт + копирайт */}
          <div className="text-right space-y-2">
            <a href="tel:+79992997447" className="block text-white/60 hover:text-white text-sm transition-colors">
              8 999 299-74-47
            </a>
            <a href="tel:+79098904390" className="block text-white/60 hover:text-white text-sm transition-colors">
              8 909 890-43-90
            </a>
            <p className="text-white/30 text-xs">© 2024 ЛегисПро. Все права защищены.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}