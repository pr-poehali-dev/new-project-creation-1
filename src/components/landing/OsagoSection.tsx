import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { PRIMARY_PHONE } from "@/lib/contacts";
import { sendLead } from "@/lib/sendLead";
import OsagoCalculator from "@/components/landing/OsagoCalculator";

const facts = [
  {
    icon: "ShieldCheck",
    title: "Зачем нужно ОСАГО",
    desc: "Обязательное страхование автогражданской ответственности. Если вы виновник ДТП — страховая возместит ущерб пострадавшему, а не вы из своего кармана. Без полиса — штраф и личная ответственность за весь ущерб.",
  },
  {
    icon: "Car",
    title: "Мини-каско от бесполисных",
    desc: "Защита на случай ДТП с водителем без ОСАГО или со скрывшимся виновником. Обычное ОСАГО в таких ситуациях не платит — а мини-каско покрывает ремонт вашего авто, когда взыскать не с кого.",
  },
  {
    icon: "Wallet",
    title: "Без переплат",
    desc: "Подберём полис среди ведущих страховых компаний по выгодной цене. Поможем с расчётом КБМ, исправим ошибки в коэффициентах и оформим всё за один визит.",
  },
];

export default function OsagoSection() {
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
        "Заявка на оформление ОСАГО",
        `Новая заявка на оформление ОСАГО!\nТелефон: ${phone}`
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
    <section id="osago" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <p className="text-red-700 text-sm font-semibold tracking-widest uppercase mb-3">Страхование авто</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ОФОРМЛЕНИЕ ОСАГО
          </h2>
          <div className="w-14 h-1 bg-red-700 rounded" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {facts.map((f) => (
            <Card key={f.title} className="card-hover border-2 border-gray-100 hover:border-red-200 rounded-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-sm bg-red-50 flex items-center justify-center mb-5">
                  <Icon name={f.icon as "ShieldCheck"} size={22} className="text-red-700" />
                </div>
                <h3
                  className="text-lg font-bold text-[#111] mb-3"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <OsagoCalculator />

        <div id="osago-form" className="bg-[#111111] rounded-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                ОФОРМИМ ПОЛИС ЗА 15 МИНУТ
              </h3>
              <p className="text-white/60 leading-relaxed">
                Оставьте номер — рассчитаем стоимость, подберём выгодные условия
                и оформим ОСАГО или мини-каско без лишних поездок.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white/10 border border-white/20 rounded-sm p-6 text-white text-center">
                <Icon name="CheckCircle" size={40} className="mx-auto mb-3 text-red-500" />
                <p className="text-lg font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>ЗАЯВКА ПРИНЯТА!</p>
                <p className="text-white/60 mt-1 text-sm">Перезвоним в течение 5 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={loading}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-sm focus:border-white"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-red-700 hover:bg-red-800 text-white rounded-sm px-8 font-bold tracking-wide shrink-0"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
                  >
                    {loading ? "ОТПРАВКА..." : "ОФОРМИТЬ ОСАГО"}
                  </Button>
                </div>
                <label className="flex items-start gap-2 mt-4 text-left text-white/60 text-xs leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    disabled={loading}
                    className="mt-0.5 shrink-0 accent-red-700"
                  />
                  <span>
                    Я согласен на обработку персональных данных и принимаю условия{" "}
                    <Link to="/privacy" target="_blank" className="underline hover:text-white">
                      политики конфиденциальности
                    </Link>
                  </span>
                </label>
                {error && <p className="text-white/80 text-sm mt-3">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}