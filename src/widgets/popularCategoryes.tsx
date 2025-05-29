'use client'
import ToShop from "@/shared/components/ui/addToShop";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Flame, Shield, Box } from "lucide-react";

const categories = [
    { title: "Огнетушители", icon:"/ognotushiteli-op1doop10.png" },
    { title: "Пожарные шкафы", icon:"/shpO312.png" },
    { title: "Средства спасения", icon:"/logo-sredstva-spaseniya.png" },
];

export default function PopularCategories() {
    return (
        <section className="" >
            <div className="bg-white">
                
            <div className="bg-slate-300/15 dark:bg-slate-900 p-4  mt-10 mb-20 h-fit  ">

                <h2 className="text-2xl font-bold mb-4 relative left-[2.5%] text-slate-700 mt-4 dark:text-gray-200">Популярные категории</h2>
                <div className="w-[95%] m-auto p-2  grid grid-cols-1  sm:grid-cols-3 gap-4 mb-20">
                    {categories.map((cat) => (
                        <Card key={cat.title} className="bg-white hover:shadow-xl shadow-slate-700/30 relative">
                            <CardContent className="flex flex-col  items-center  m-auto  text-slate-700 font-medium  p-4  dark:text-gray-200 ">
                                <img src={cat.icon} alt={cat.title} className="w-[100px] h-[100px] m-auto" />
                                
                                {cat.title}
                              
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}