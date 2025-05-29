// components/home/Bestsellers.tsx
import { TypographyH1 } from "@/shared/components/typografy/typographyH1";
import ToShop from "@/shared/components/ui/addToShop";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { ShoppingCart } from "lucide-react";

const products = [
    { name: "Огнетушитель ОП-5", price: "200 TJS", imgUrl: '/op5.png' },
    { name: "Шкаф пожарный ШПO-312", price: "450 TJS", imgUrl: '/shpO312.png' },
    { name: "Шкаф пожарный ШПК-315", price: "450 TJS", imgUrl: '/shpk315-shkaf-pojarnoe.png' }
];


export default function Bestsellers() {
    return (
        <section className="bg-white">
            <div className="dark:bg-slate-900     dark:text-gray-200 p-4 dark:rounded-br-4xl ">
                <h2 className="text-2xl font-bold mb-4 text-slate-700 dark:text-gray-200 w-[92%] m-auto">Хиты продаж</h2>
                <div className=" ">
                    <div className="w-[95%] m-auto bg-gray-0 p-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
                            {products.map((p) => (
                                <Card key={p.name} className="text-slate-700 bg-white hover:shadow-xl shadow-slate-700/30 opacity-100 hover:opacity-90 transition-opacity hover:text-black dark:text-gray-200">
                                    <CardContent className=" p-4 space-y-2  flex items-center justify-center space-x-2 flex-row-reverse  m-auto">
                                    <ToShop left={0} top={5}/>
                                        <div className="relative">
                                            <img src={p.imgUrl} alt={p.name} className="w-[100%] h-40 "
                                            />
                                            <h3 className="font-semibold mt-4">{p.name}</h3>
                                            <p>{p.price}</p>

                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}