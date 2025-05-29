import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/card";
import CompanyName from "./company-name";
import { TypographyH1 } from "../typografy/typographyH1";

const advantages = [
  {
    title: "Гарантия качества и сертифицированные товары",
    description:
      "Вся продукция соответствует стандартам безопасности и имеет официальные сертификаты.",
  },
  {
    title: "Широкий ассортимент",
    description:
      "Огнетушители, сигнализации, средства защиты — всё в одном месте для любых задач.",
  },
  {
    title: "Быстрая доставка и консультации",
    description:
      "Оперативная отправка заказов и помощь от специалистов по выбору оборудования.",
  },
];



export default function StoreInfo() {
  return <section className="mt-30 mb-30 text-slate-700 dark:text-gray-100">
    <section className="py-8 px-4 md:px-10 lg:px-20">
      <header className="mb-6 ">
        <div className="flex justify-center gap-4 text-center">
          <TypographyH1 className="text-2xl md:text-3xl font-bold">Почему выбирают</TypographyH1>
          <CompanyName />

        </div>
      </header>
      <div className="grid gap-6 md:grid-cols-1  lg:grid-cols-3 ">
        {advantages.map((adv, index) => (
          <Card key={index} className="flex flex-col  h-full hover:shadow-xl shadow-slate-700/30">
            <CardContent className="flex flex-col gap-3 p-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-gray-100">
                <CheckCircle size={20} />
                <h3 className="text-lg font-semibold">{adv.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{adv.description}</p>
            </CardContent>
          </Card>
        ))}

      </div>

    </section>
  </section>
}