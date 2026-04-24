import DotPattern from "@/components/ui/dot-pattern"

export function AboutQuote() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-center border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5">
        <DotPattern width={5} height={5} />

        {/* Corner decorations */}
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80" />

        <div className="relative z-20 mx-auto max-w-5xl rounded-[40px] py-6 md:p-10 xl:py-20">

          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
              Идея создания космического телескопа впервые была высказана астрофизиком Лайманом Спитцером в 1946 году. Он предвидел, что телескоп над атмосферой Земли сможет видеть Вселенную с беспрецедентной чёткостью. Спустя 44 года, 24 апреля 1990 года, шаттл Discovery вывел Хаббл на орбиту.
            </p>
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
              Несмотря на первоначальный дефект главного зеркала, успешно исправленный в 1993 году, телескоп стал символом человеческого упорства и научного прогресса. Сегодня Хаббл продолжает работу, открывая новые горизонты вселенной и вдохновляя миллионы людей по всему миру мечтать о звёздах.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
