import PhoneNumberCompany from "@/shared/components/ui/phoneNumber";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    const currentYear = new Date().getFullYear()
    return <footer className=" dark:bg-[#141a2a] bg-muted/90 text-slate-700 dark:text-gray-100 ">
    <div className="container px-4 py-8 md:py-12">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 ">
        <div>
          <h3 className="text-lg font-semibold mb-4">О компании</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="text-sm text-muted-foreground hover:text-foreground">
                О нас
              </Link>
            </li>
            <li>
              <Link href="/certificates" className="text-sm text-muted-foreground hover:text-foreground">
                Сертификаты
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Блог
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="text-sm text-muted-foreground hover:text-foreground">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Каталог</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/products?category=extinguishers"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Огнетушители
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=equipment"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Пожарное оборудование
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=protection"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Средства защиты
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=signs"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Знаки безопасности
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Покупателям</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/deliver" className="text-sm text-muted-foreground hover:text-foreground">
                Доставка и оплата
              </Link>
            </li>
            <li>
              <Link href="/guarantee" className="text-sm text-muted-foreground hover:text-foreground">
                Гарантия
              </Link>
            </li>
            <li>
              <Link href="/return" className="text-sm text-muted-foreground hover:text-foreground">
                Возврат товара
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                Вопросы и ответы
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Контакты</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-red-600" />
               {<PhoneNumberCompany  companyNumber={909121211} />}
              
            </li>
            <li className="text-sm text-muted-foreground">г. Москва, ул. Пожарная, д. 112</li>
            <li className="text-sm text-muted-foreground">Пн-Пт: 9:00-18:00</li>
            <li className="text-sm text-muted-foreground">Email: info@pozhtekhnika.ru</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>© {currentYear} ПожТехника. Все права защищены.</p>
      </div>
    </div>
  </footer>
}