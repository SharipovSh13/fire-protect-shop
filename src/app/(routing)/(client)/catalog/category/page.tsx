'use client'

import { Card, CardContent } from "@/shared/components/ui/card";
import { Flame, ShieldCheck, BriefcaseMedical, ShoppingCart } from "lucide-react";

const categories = [
  {
    title: "Огнетушители",
    description: "Порошковые, углекислотные, воздушно-пенные и другие.",
    icon: <Flame className="text-red-600 w-8 h-8" />,
  },
  {
    title: "Пожарные шкафы",
    description: "Шкафы для хранения рукавов, огнетушителей и инвентаря.",
    icon: <ShieldCheck className="text-red-600 w-8 h-8" />,
  },
  {
    title: "Аптечки и СИЗ",
    description: "Средства индивидуальной защиты, аптечки первой помощи.",
    icon: <BriefcaseMedical className="text-red-600 w-8 h-8" />,
  },
  {
    title: "Оборудование и техника",
    description: "Пожарные колонки, гидранты, сигнализация и автоматика.",
    icon: <ShoppingCart className="text-red-600 w-8 h-8" />,
  },
];


export default function Category(){
    
    return <>
      <div className="container mx-auto px-4 py-8 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Категории товаров</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-start gap-4 p-6">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    
    </>
}
