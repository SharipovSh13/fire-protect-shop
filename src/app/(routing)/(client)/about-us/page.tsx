import CompanyDirector from "@/shared/components/ui/companyDirector";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    const startedWork=2023
    const workingYear= new Date().getFullYear()-startedWork
    return <>
        <div className="max-w-4xl mx-auto px-4 py-8 bg-muted/40 dark:bg-[#141a2a]">
            <Image src={"/fLAME.TJnapanavvv.png"} width={100} height={100} className="rounded-[5%] " alt="лого Flame.tj" />

            <h1 className="text-3xl font-bold mb-6 ">О нас</h1>

            <p className="mb-4">
                Компания  
                <strong className="ml-1">
                    <Link href={"about-us"}>FLAME.TJ</Link>
                </strong> — ведущий поставщик пожарного оборудования и средств противопожарной защиты в Таджикистане. Мы работаем на рынке более {workingYear} лет и предлагаем только сертифицированную продукцию высокого качества.
            </p>

            <p className="mb-4">
                Наша цель — обеспечить безопасность ваших объектов: от жилых домов до крупных производственных предприятий. В нашем ассортименте — огнетушители, пожарные шкафы, гидранты, сигнализации, инвентарь и другие противопожарные товары.
            </p>

            <p className="mb-4">
                Мы сотрудничаем с проверенными производителями и гарантируем быструю доставку, профессиональную консультацию и индивидуальный подход к каждому клиенту.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Почему выбирают нас?</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Официальные поставки сертифицированного оборудования</li>
                <li>Большой складской запас и быстрая отгрузка</li>
                <li>Консультации по подбору оборудования</li>
                <li>Доставка по всей стране</li>
                <li>Гарантии и поддержка</li>
            </ul>
            <section className="mt-4">
        <h2 className="text-2xl font-semibold mb-6">Наша команда</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           <div className="text-center shadow-2xs dark:shadow-gray-200/40 dark:border-2 rounded-md dark:border-gray-200/40  p-6 mb-10 border-black/30 border-1">
             <Image
              src="/fLAME.TJnapanavvv.png"
              alt="Сотрудник 1"
              width={140}
              height={100}
              className="rounded-[50%] mx-auto  mb-2"
            />
            <CompanyDirector directoreName="Шуҳрат Шарипов"/>
            <p className="text-sm text-gray-500">Директор</p>
          </div>
          <div className="text-center shadow-2xs mb-10 dark:shadow-gray-200/40 dark:border-2 rounded-md dark:border-gray-200/40  p-6  border-black/30 border-1">
            <Image
              src="/fLAME.TJnapanavvv.png"
              alt="Сотрудник 2"
              width={140}
              height={100}
              className="rounded-full mx-auto mb-2"
            />
            <p className="font-medium">Мадина Саидова</p>
            <p className="text-sm text-gray-500">Менеджер по продажам</p>
          </div>
          <div className="text-center shadow-2xs mb-10 dark:shadow-gray-200/40 dark:border-2 rounded-md dark:border-gray-200/40  p-6  border-black/30 border-1">
            <Image
              src="/fLAME.TJnapanavvv.png"
              alt="Сотрудник 3"
              width={140}
              height={100}
              className="rounded-full mx-auto mb-2"
            />
            <p className="font-medium">Фаррух Назаров</p>
            <p className="text-sm text-gray-500">Инженер по безопасности</p>
          </div>
        </div>
        
    

        
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Наш офис</h2>
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17559.551443466913!2d68.76005104693603!3d38.64666962169585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d32a735a0107%3A0x2fb2af704224c6fb!2sKushoniyon%20Market!5e0!3m2!1sen!2s!4v1744544799160!5m2!1sen!2s" // вставь сюда свою ссылку с Google Maps
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

           
        </div>
    </>
}
