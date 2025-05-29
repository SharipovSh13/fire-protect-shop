"use client"
import { CATEGORY_API } from "@/shared/components/lib/api"
import { motion, useAnimation } from "framer-motion";


import axios from "axios"

import Link from "next/link"
import { useEffect, useState } from "react"
import { TypographyH1 } from "@/shared/components/typografy/typographyH1";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion";


interface SubCategory {
    subId: string;
    subName: string;
}

interface IProducts {
    categoryName: string;
    img: string;
    subCategory: SubCategory[];
    id: number;
}


export function CarouselSize() {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                await controls.start({
                    x: "-190%",
                    transition: {
                        duration: 20,
                        ease: "linear",
                    },
                });
                controls.set({ x: 0 });
            }
        };
        sequence();
    }, [controls]);



    const [products, setProducts] = useState<IProducts[]>([])
    async function getProducts() {
        try {
            const { data } = await axios.get(`${CATEGORY_API}/category`)
            console.log(data);

            setProducts(data)


        } catch (error) {
            console.error(error);

        }

    }
    useEffect(() => {
        getProducts()

    }, []);

    return (
        <div className="bg-gray-100/80  dark:bg-slate-700/20 w-[100%] p-4  mb-6 h-fit mt-10  " >
            <div className={`overflow-hidden w-full bg-muted py-4 `}>
                <motion.div className="hidden sm:flex  gap-8 min-w-full items-center"
                    animate={controls} >

                    {products.map((el, index) => {
                        return (<Link className="p-2" href={`catalog/category/` + el.id} key={index}>
                            <div className="min-w-[200px]  p-4 relative ">
                                <img
                                    title={el.categoryName}
                                    src={`${el.img}`}
                                    alt={`Product ${index}`}
                                    className="rounded-xl w-[100px]   " 
                                />
                                

                            </div>
                        </Link>
                        )
                    })}


                </motion.div>
            </div>
            <div className="w-[99%] m-auto md:hidden mt-2 mb-2">
                {
                    <Accordion type="single" collapsible className="text-slate-700 dark:text-gray-200  sm:hidden ">
                        <AccordionItem value="item_1">
                            <AccordionTrigger className="">
                                <TypographyH1 className="font-bold text-slate-700 dark:text-gray-200">
                                    Продукти
                                </TypographyH1>
                            </AccordionTrigger>
                            <AccordionContent>
                                {
                                    products.map((product, index) => {
                                        return <Link key={index} href={`catalog/category/${product.id}`}>
                                            <div className="flex items-center border-t-1 justify-between  p-2">

                                                <TypographyH1 className="" key={index}>

                                                    {
                                                        product.categoryName
                                                    }
                                                </TypographyH1>
                                                <img src={product.img} alt={product.categoryName} className="w-[50px]" />
                                            </div>
                                        </Link>
                                    })



                                }
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                }
            </div>

        </div>
    )
}