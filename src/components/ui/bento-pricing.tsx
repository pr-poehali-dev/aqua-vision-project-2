import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Check, SparklesIcon } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type SpecCardProps = {
  titleBadge: string
  valueLabel: string
  valueSuffix?: string
  specs: string[]
  className?: string
}

function SpecCard({
  titleBadge,
  valueLabel,
  valueSuffix = "",
  specs,
  className,
}: SpecCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
        "backdrop-blur-sm",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="flex items-center gap-3 p-3">
        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
          {titleBadge}
        </Badge>
      </div>

      <div className="flex items-end gap-2 px-3 py-1">
        <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
          {valueLabel}
        </span>
        {valueSuffix && (
          <span className="text-gray-300 text-xs font-open-sans-custom pb-1">{valueSuffix}</span>
        )}
      </div>

      <ul className="text-gray-300 grid gap-2 p-3 text-xs font-open-sans-custom">
        {specs.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      <div
        className={cn(
          "bg-white/5 border-white/10 relative w-full overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          "lg:col-span-5",
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full mix-blend-overlay",
                "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                "bg-[size:24px]",
              )}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
            ГЛАВНОЕ ЗЕРКАЛО
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex bg-white/5 text-white border-white/20 font-open-sans-custom text-xs"
          >
            <SparklesIcon className="me-1 size-3" /> Ключевой элемент
          </Badge>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[30%]">
            <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              2,4 м
            </span>
            <span className="text-gray-300 text-xs font-open-sans-custom"> диаметр</span>
          </div>
          <ul className="text-gray-300 grid gap-2 text-xs lg:w-[70%] font-open-sans-custom">
            {[
              "Примарное зеркало из ситалла покрытое алюминием и MgF₂",
              "Разрешение 0,05 угловой секунды — острее человеческого глаза в 10 раз",
              "Работает в диапазоне от ультрафиолета до ближнего инфракрасного",
              "В 1993 году установлена корректирующая оптика COSTAR после дефекта сферической аберрации",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SpecCard
        titleBadge="ОРБИТА"
        valueLabel="559"
        valueSuffix="км"
        specs={[
          "Наклон орбиты: 28,5°",
          "Период обращения: 95 минут",
          "Скорость: 7,5 км/с",
          "Запущен шаттлом Discovery",
        ]}
        className="lg:col-span-3"
      />

      <SpecCard
        titleBadge="МАССА И РАЗМЕРЫ"
        valueLabel="11 т"
        valueSuffix="масса"
        specs={[
          "Длина: 13,2 м",
          "Диаметр: 4,2 м",
          "Солнечные панели: 7,6 × 2,6 м",
        ]}
        className="lg:col-span-4"
      />

      <SpecCard
        titleBadge="НАБЛЮДЕНИЯ"
        valueLabel="1,5 млн"
        valueSuffix="снимков"
        specs={["Более 10 000 научных статей", "Открыто 10 000+ объектов"]}
        className="lg:col-span-4"
      />

      <SpecCard
        titleBadge="ИНСТРУМЕНТЫ"
        valueLabel="5"
        valueSuffix="активных"
        specs={[
          "WFC3 — камера широкого поля (3-е поколение)",
          "ACS — расширенная обзорная камера",
          "COS — спектрограф космического происхождения",
          "STIS — спектрограф и тепловизор",
        ]}
        className="lg:col-span-8"
      />
    </div>
  )
}
