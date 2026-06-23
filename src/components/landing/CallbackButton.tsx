import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { PRIMARY_PHONE } from "@/lib/contacts";
import { sendLead } from "@/lib/sendLead";

export default function CallbackButton() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setError("");
      setPhone("");
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendLead(
        phone,
        "Заказ обратного звонка",
        `Новый заказ обратного звонка!\nТелефон: ${phone}`
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
      <button
        onClick={() => setOpen(true)}
        aria-label="Заказать обратный звонок"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white rounded-full pl-3 pr-5 h-12 shadow-lg hover:scale-105 transition-transform"
      >
        <span className="relative flex items-center justify-center w-7 h-7">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white/40 animate-ping" />
          <Icon name="Phone" size={18} className="relative" />
        </span>
        <span className="text-sm font-semibold" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}>
          ОБРАТНЫЙ ЗВОНОК
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-md bg-[#111111] rounded-sm p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Закрыть"
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <Icon name="X" size={22} />
            </button>

            {submitted ? (
              <div className="text-center text-white py-4">
                <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-red-500" />
                <p className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>ЗАЯВКА ПРИНЯТА!</p>
                <p className="text-white/60 mt-2">Перезвоним в течение 5 минут</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  ЗАКАЗАТЬ ЗВОНОК
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Оставьте номер — перезвоним в течение 5 минут и бесплатно проконсультируем.
                </p>
                <form onSubmit={handleSubmit}>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={loading}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-sm focus:border-white mb-4"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-red-700 hover:bg-red-800 text-white rounded-sm font-bold tracking-wide"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
                  >
                    {loading ? "ОТПРАВКА..." : "ЖДУ ЗВОНКА"}
                  </Button>
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
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
