'use client'

import { TypographyH1 } from "@/shared/components/typografy/typographyH1"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion"
import axios from "axios"
import API from "@/shared/components/lib/api"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IProducts } from "@/shared/types/interfaceGlobal"



export default function AsideBar() {

    const [products, setProducts] = useState<IProducts[]>([])

    async function getProducts() {
        try {
            const { data } = await axios.get(`${API}/flame`)
            console.log(data);

            setProducts(data)
        } catch (error) {
            console.error(error);

        }

    }
    useEffect(() => {
        getProducts()

    }, []);


    console.log("API         " + API);




    return <>
        <div className="w-64  h-fill dark:text-gray-200   dark:bg-[#141a2a] bg-muted/40 hidden sm:block md:block dark:border-r-1 dark:border-gray-500  ">
            <aside className="p-4">
                <nav>
                    <Link href={"catalog"}>
                        <TypographyH1 className="font-bold p-2 w-[95%] m-auto rounded-sm dark:bg-gray-200 mt-2 dark:text-black bg-[#B41414] text-white ">Продукты</TypographyH1>
                    </Link>
                    <Accordion type="single" collapsible className="w-[100%]">
                        {products?.slice(0, 8).map((el ) => (

                            <AccordionItem value={`item_1${el.id}`} key={el.id}>

                                <AccordionTrigger>{el.productName}</AccordionTrigger>
                                <AccordionContent>
                                    <Link href={`/catalog/category/${el.id}`}>
                                        <p>{el.category.map((categEl) => {
                                            return <span className="font-bold" key={categEl.subCatId}>{categEl.subName } <br/> </span>
                                        })}</p>

                                    </Link>
                                </AccordionContent>
                            </AccordionItem>

                        ))}
                    </Accordion>

                </nav>
            </aside>

        </div>

    </>
}