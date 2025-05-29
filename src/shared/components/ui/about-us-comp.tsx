'use client'
import { Flame } from "lucide-react";
import CompanyName from "./company-name";

export default function AboutComponent() {
  return <>
    <div className="w-[95%] m-auto grid grid-cols-1 sm:grid-cols-2 items-center h-92  relative mb-20  mt-4     p-4  bg-muted/10  ">

      <div className="flex flex-col space-y-2 md:text-2xl">
        <div className="flex items-center gap-2">
           <CompanyName/>

          <Flame color="orange" />
        </div>
        
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-50/80"> — ведущий поставщик пожарного оборудования и средств противопожарной защиты в Таджикистане.</p>

      </div>

      <div className=" ">
        <img src="/Final_appartment_2.webp" alt="" className="" />
      </div>

    </div>
    <div className="bg-muted/80 dark:bg-muted/20 mt-[160px]">
      <div className="w-[95%] m-auto   p-4 grid grid-cols-1 sm:grid-cols-2 sm:place-items-center ">
        <img src="/shitPoj-+inventar.png" alt="" className="w-[40%] m-auto" />
        <div className="text-slate-700 dark:text-gray-100">

          <h1 className="text-3xl font-bold mt-12  mb-6">О нас</h1>
          <div className="mb-2 flex items-center gap-2">
            Компания
            <CompanyName/>
          </div>
            
          <p className="mb-4">
            Наша цель — обеспечить безопасность ваших объектов: от жилых домов до крупных производственных предприятий. В нашем ассортименте — огнетушители, пожарные шкафы, гидранты, сигнализации, инвентарь и другие противопожарные товары.
          </p>
          <p className="mb-4">
            Мы сотрудничаем с проверенными производителями и гарантируем быструю доставку, профессиональную консультацию и индивидуальный подход к каждому клиенту.
          </p>

        </div>
      </div>
    </div>
  </>
}