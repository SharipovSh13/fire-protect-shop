
import { TypographyH1 } from "@/shared/components/typografy/typographyH1";
import { TypographyH2 } from "@/shared/components/typografy/typographyH2";
import { TypographyH3 } from "@/shared/components/typografy/typographyH3";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Card } from "@/shared/components/ui/card";
import GeolocationMag from "@/shared/components/ui/geolocatinMag";
import { BanknoteIcon, CreditCard, House, Loader, PackageCheck, ScanLine, Truck } from "lucide-react";

export default function Deliver() {
  return (
    <div className=" min-h-screen ">


      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <TypographyH1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Условия доставки
          </TypographyH1>


          <div className="p-6 mb-8">
            <TypographyH2 className="text-xl font-semibold mb-4 text-red-600">
              Способы доставки
            </TypographyH2>
            <Card className="space-y-6 p-2 ">

              <div className="flex items-start">
                <div className="bg-gray-400 p-3 rounded-full mr-4">
                  <Truck className="dark:text-black" />
                </div>
                <div>
                  <TypographyH3 className="font-medium text-lg">Курьерская доставка</TypographyH3>
                  <p className="text-gray-600 mt-1 dark:text-gray-300/70">
                    Доставка по Москве и области в течение 1-2 дней. Стоимость — от 300 ₽.
                  </p>
                </div>
              </div>


              <div className="flex items-start">
                <div className="bg-gray-400 p-3 rounded-full mr-4">
                  <PackageCheck className="dark:text-black" />

                </div>
                <div>
                  <h3 className="font-medium text-lg">Почта России</h3>
                  <p className="text-gray-600 mt-1 dark:text-gray-300/70">
                    Доставка по всей России. Срок — от 3 до 14 дней. Стоимость рассчитывается при оформлении.
                  </p>
                </div>
              </div>


              <div className="flex items-start">
                <div className="bg-gray-400 p-3 rounded-full mr-4">
                  <House className="dark:text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Самовывоз</h3>
                  <GeolocationMag />
                </div>
              </div>
            </Card>
          </div>


          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Способы оплаты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 border rounded-lg">
                <CreditCard className="mr-2  text-red-600" />
                <span>Онлайн-оплата (картой)</span>
              </div>
              <div className="flex items-center p-3 border rounded-lg">
                <Loader className="mr-2  text-red-600" />
                <span>Наличными при получении</span>
              </div>
              <div className="flex items-center p-3 border rounded-lg">
                <BanknoteIcon className="mr-2  text-red-600" />
                <span>Банковский перевод</span>
              </div>
              <div className="flex items-center p-3 border rounded-lg">
               <ScanLine className="mr-2  text-red-600"/>
                <span>PayPal</span>
              </div>
            </div>
          </Card>


          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Частые вопросы
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как отследить заказ?</AccordionTrigger>
                <AccordionContent>
                  После отправки вам придет трек-номер на почту или SMS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Можно ли оформить срочную доставку?</AccordionTrigger>
                <AccordionContent>
                  Да, доступна экспресс-доставка за дополнительную плату.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Есть ли доставка в регионы?</AccordionTrigger>
                <AccordionContent>
                  Да, мы отправляем заказы по всеё городу Душанбе.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </main>
    </div>
  );
}