import { useState } from "react";
import Icon from "@/components/ui/icon";

const carTypes = [
  { id: "B", label: "Легковой", icon: "Car", base: 5500 },
  { id: "C", label: "Грузовой", icon: "Truck", base: 9200 },
  { id: "D", label: "Автобус", icon: "Bus", base: 11000 },
  { id: "A", label: "Мото", icon: "Bike", base: 2400 },
];

const powers = [
  { id: "low", label: "до 70 л.с.", k: 0.8 },
  { id: "mid", label: "70–120 л.с.", k: 1.1 },
  { id: "high", label: "120–150 л.с.", k: 1.4 },
  { id: "top", label: "от 150 л.с.", k: 1.7 },
];

const experiences = [
  { id: "new", label: "до 3 лет", k: 1.5 },
  { id: "exp", label: "от 3 лет", k: 1.0 },
];

const formatPrice = (v: number) =>
  new Intl.NumberFormat("ru-RU").format(Math.round(v / 100) * 100);

export default function OsagoCalculator() {
  const [car, setCar] = useState(carTypes[0]);
  const [power, setPower] = useState(powers[1]);
  const [exp, setExp] = useState(experiences[1]);

  const price = car.base * power.k * exp.k;

  return (
    <div className="bg-gray-50 border-2 border-gray-100 rounded-sm p-6 md:p-8 mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Calculator" size={22} className="text-red-700" />
        <h3 className="text-xl font-bold text-[#111]" style={{ fontFamily: "'Oswald', sans-serif" }}>
          ПРИМЕРНАЯ СТОИМОСТЬ ОСАГО
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-3">Тип авто</p>
          <div className="grid grid-cols-2 gap-2">
            {carTypes.map((c) => (
              <button
                key={c.id}
                onClick={() => setCar(c)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-sm border-2 text-sm transition-colors ${
                  car.id === c.id
                    ? "bg-red-700 border-red-700 text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-red-200"
                }`}
              >
                <Icon name={c.icon as "Car"} size={16} />
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-500 mb-3">Мощность</p>
          <div className="grid grid-cols-2 gap-2">
            {powers.map((p) => (
              <button
                key={p.id}
                onClick={() => setPower(p)}
                className={`px-3 py-2.5 rounded-sm border-2 text-sm transition-colors ${
                  power.id === p.id
                    ? "bg-red-700 border-red-700 text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-red-200"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-500 mb-3">Стаж вождения</p>
          <div className="grid grid-cols-2 gap-2">
            {experiences.map((e) => (
              <button
                key={e.id}
                onClick={() => setExp(e)}
                className={`px-3 py-2.5 rounded-sm border-2 text-sm transition-colors ${
                  exp.id === e.id
                    ? "bg-red-700 border-red-700 text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-red-200"
                }`}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border-2 border-gray-100 rounded-sm p-5">
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-500">Примерная цена полиса</p>
          <p className="text-3xl font-bold text-[#111]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            от {formatPrice(price)} ₽
          </p>
        </div>
        <a href="#osago-form">
          <button className="bg-red-700 hover:bg-red-800 text-white rounded-sm px-7 py-3 font-bold tracking-wide text-sm transition-colors" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}>
            ОФОРМИТЬ ПОЛИС
          </button>
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Расчёт является предварительным и носит ознакомительный характер. Точную стоимость
        с учётом КБМ, региона и всех коэффициентов мы рассчитаем по вашей заявке.
      </p>
    </div>
  );
}
