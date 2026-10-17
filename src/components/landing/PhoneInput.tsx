import { Input } from "@/components/ui/input";

function formatPhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (raw.trim().startsWith("+7")) digits = digits.slice(1);
  else if (digits[0] === "7" || digits[0] === "8") digits = digits.slice(1);
  if (digits.length > 10 && (digits[0] === "7" || digits[0] === "8")) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (!digits) return "";

  let result = `+7 (${digits.slice(0, 3)}`;
  if (digits.length > 3) result += `) ${digits.slice(3, 6)}`;
  if (digits.length > 6) result += `-${digits.slice(6, 8)}`;
  if (digits.length > 8) result += `-${digits.slice(8, 10)}`;
  return result;
}

type Props = Omit<React.ComponentProps<typeof Input>, "value" | "onChange" | "type"> & {
  value: string;
  onValueChange: (value: string) => void;
};

export default function PhoneInput({ value, onValueChange, onFocus, onBlur, ...props }: Props) {
  return (
    <Input
      {...props}
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      placeholder="+7 (___) ___-__-__"
      maxLength={18}
      pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
      title="Введите номер полностью: +7 (XXX) XXX-XX-XX"
      value={value}
      onChange={(e) => onValueChange(formatPhone(e.target.value))}
      onFocus={(e) => {
        if (!value) onValueChange("+7 (");
        onFocus?.(e);
      }}
      onBlur={(e) => {
        if (value === "+7 (") onValueChange("");
        onBlur?.(e);
      }}
    />
  );
}