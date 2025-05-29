'use client'

import { TypographyH1 } from "@/shared/components/typografy/typographyH1"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion"
import axios, { Axios } from "axios"
import {CATEGORY_API} from "@/shared/components/lib/api"
import Link from "next/link"
import { useEffect, useState } from "react"


interface SubCategory {
  subId: string;
  subName: string;
}

interface IProducts {
  categoryName: string;
  img: string;
  subCategory: SubCategory[];
  id: string;
}

export default function AsideBar() {

    const [categorys, setCategorys] = useState<IProducts[]>([])

    async function getProducts() {
        try {
            const { data } = await axios.get(`${CATEGORY_API}/category`)
            console.log(data);
            


            setCategorys(data)
        } catch (error) {
            console.error(error);

        }

    }
    useEffect(() => {
        getProducts()

    }, []);



// console.log(categorys +"categoryahoo");






    return <>
        <div className="w-[100%]   h-fit dark:text-gray-100   dark:bg-[#141a2a] bg-muted/40    ">
            <aside className="">
                <nav>
                    <Accordion type="single" collapsible className="w-[100%] ">
                        <AccordionItem value={`item_1`}>
                            <AccordionTrigger className="p-2">{
                                <TypographyH1 className="font-bold   dark:text-gray-100 text-slate-700 ">Продукты</TypographyH1>
                            }</AccordionTrigger>
                            <AccordionContent className="">
                                
                                {categorys?.map((el) => (
                                    <Accordion type="single" collapsible key={el.id} className=" " >
                                        <AccordionItem value={`item_1${el.id}`} className="">

                                            <AccordionTrigger className="">{
                                                <Link href={`catalog/category/${el.id}`}>
                                                <TypographyH1 className="font-bold   dark:text-gray-100 text-slate-700 ">{el.categoryName}</TypographyH1>
                                                </Link>


                                            }</AccordionTrigger>
                                            <AccordionContent className="">
                                                <div>{el.subCategory.map((subCatEl) => {
                                                    return <Accordion type="single" collapsible key={subCatEl.subId}>

                                                        <AccordionItem value={`item_1${subCatEl.subId}`}>
                                                            <AccordionTrigger  value={`item_${subCatEl.subId}`}>

                                                                <Link href={`/catalog/category/${subCatEl.subId}`}>
                                                                    <span className="font-bold   p-2 " key={subCatEl.subId}>{subCatEl.subName} <br /> </span>
                                                                </Link>

                                                            </AccordionTrigger>
                                                        </AccordionItem>
                                                    </Accordion>
                                                })}</div>
                                            </AccordionContent>


                                        </AccordionItem>
                                    </Accordion>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </nav>
            </aside>

        </div>

    </>
}