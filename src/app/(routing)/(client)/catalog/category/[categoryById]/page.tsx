"use client"

import { CATEGORY_API } from "@/shared/components/lib/api";
import { TypographyH1 } from "@/shared/components/typografy/typographyH1";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion";
import { IProducts } from "@/shared/types/interfaceGlobal";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function CategoryById() {

    const [products, setProducts] = useState<IProducts[]>([])

    async function getProducts() {
        try {
            const { data } = await axios.get(`${CATEGORY_API}/category`)
            setProducts(data)
        } catch (error) {
            console.error(error);

        }

    }
    useEffect(() => {
        getProducts()

    }, []);

    const { categoryById } = useParams()

    // console.log(products.find((el) => el.id.toString() === (categoryById)));
    const foundProduct = products.find((el) => el.id.toString() === (categoryById))
    console.log(foundProduct);

    return <>
        <div className="flex flex-col items-start gap-0.5 sm:gap-4 sm:flex-row   bg-red-400 w-[99%] m-auto">

            <div className=" w-[99.9%]  sm:w-[50%] sm:m-auto   bg-gray-200 p-0.5">

                <Accordion type="single" collapsible className="w-[100%]">
                    <AccordionItem value={`item_1 ${foundProduct?.id}`} className="">

                        <AccordionTrigger className="flex  items-center  p-2 font-bold bg-gray-200/50">
                            <div className=" flex gap-4 items-center h-[40px]">
                                <TypographyH1 className="font-bold text-xl">
                                    {foundProduct ? foundProduct.categoryName : "Продукт не найдено"}
                                </TypographyH1>

                                {foundProduct ? <img src={foundProduct.img} alt={foundProduct.categoryName} className="w-10" /> : "Фото не найдено"}
                            </div>
                        </AccordionTrigger>


                        <AccordionContent>
                            {foundProduct?.subCategory.map((el, index) => (
                                <TypographyH1 key={index} className="font-medium text-base border-t-1">
                                    {el.subName}
                                </TypographyH1>

                            ))}
                        </AccordionContent>

                    </AccordionItem>

                </Accordion>

            </div>
            <div className="bg-red-500 sm:flex-col">
                <div className="w-fit">
                    {foundProduct ? <img src={foundProduct.img} alt={foundProduct.categoryName} className="w-[99%] m-auto " /> : "Фото не найдено"}

                </div>
                <h1>Page Category By Id:{foundProduct ? foundProduct.categoryName : "Продукт не найдено"}</h1>

            </div>
        </div>


    </>
}


