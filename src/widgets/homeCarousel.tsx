"use client"

import API from "@/shared/components/lib/api"
import { Card, CardContent, CardTitle } from "@/shared/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/components/ui/carousel"
import { IProducts } from "@/shared/types/interfaceGlobal"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"


  

  
  export function CarouselSize() {

    const [products, setProducts]= useState<IProducts[]>([])
    async function getProducts() {
        try {
            const {data}= await axios.get(`${API}/flame`)
            
            setProducts(data)
        } catch (error) {
            console.error(error);
            
        }
        
       }
       useEffect(() => {
        getProducts()
        
       }, []);
    
    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className=" max-w-xl absolute top-[25%] left-[25%]  w-1/2    "
        >
            <CardTitle className="text-center mb-4 text-2xl text-white">
                <Link href={"catalog"}>Product Menu</Link>
            </CardTitle>
            <CarouselContent className="">
                {products?.map((el) => (
                    <CarouselItem key={el.id} className="  w-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3  ">
                        <div className="p-2 ">
                            <Card className="dark:bg-white border-none  relative   ">
                                <Link href={`catalog/category/` + el.id}>
                                    <p className=" font-bold z-1 w-[80%] ml-[10%] top-[15%]  absolute  bg-card-foreground/45 dark:text-white  dark:bg-slate-800/40  text-white text-center text-base p-[2px]" >{el.productName}</p>
                                    <CardContent className="relative h-full p-0  flex flex-col gap-6 aspect-square   ">
                                        {/* <img className="relative object-cover "
                                         src={el.imageUrl} alt={el.name} /> */}
                                    </CardContent>
                                </Link>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent >
            <CarouselPrevious variant={'default'} />
            <CarouselNext variant={"default"} />
        </Carousel>
    )
}