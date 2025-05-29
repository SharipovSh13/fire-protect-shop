
"use client";

import { Card, CardContent } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { useEffect, useState } from "react";
import AsideBar from "@/widgets/asideBar";
import axios from "axios";
import { CATEGORY_API } from "@/shared/components/lib/api";
import { IProducts } from "@/shared/types/interfaceGlobal";
import Link from "next/link";


export default function Catalog() {
  const [products, setProducts] = useState<IProducts[]>([])
  const [search, setSearch] = useState("");
  async function getProducts(parametr = ""):Promise<void> {
    try {
      const { data }:{data:IProducts[]} = await axios.get(`${CATEGORY_API}/category`)

      const filterData= data.filter(products => 
        products.categoryName.toLowerCase().includes(parametr.toLowerCase()) ||
        products.subCategory.some(sub=>
          sub.subName.toLowerCase().includes(parametr.toLowerCase())
          
        ) 
      );

      setProducts(filterData)
      console.log(data);


    } catch (error) {
      console.error(error);

    }

  }

  useEffect(() => {
    getProducts(search)

  }, [search]);


  return (<div className="p-4 m-auto max-w-[1280px]">

    <div className="grid sm:grid-cols-2 items-center gap-4 mb-6 dark:text-gray-200 text-slate-700">
      <h1 className="text-3xl font-semibold">Каталог товаров</h1>
      <Input
        placeholder="Поиск по названию..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="dark:bg-slate-600"
      />
    </div>

    <div className="grid sm:grid-cols-[200px_1fr] gap-6  ">
      <AsideBar />

      <div className=" grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (<Link key={product.id} href={`catalog/category/${product.id}`}>
          <Card  className=" h-[280px]   hover:shadow-slate-700 hover:shadow-[0px_0px_3px_0px]  ">
          <CardContent className="grid  grid-rows-[100px_90px_20px] place-items-center   grid-cols-1  ">
            <img src={product.img} alt={product.categoryName} className="w-[50%] m-auto " />
            <h2 className=" font-bold text-xl  bg-gray-200/25 text-center    dark:bg-black/85 dark:text-slate-300">{product.categoryName}</h2>
            <p className="text-sm text-gray-600 text-center">{`в наличие ${product.subCategory.length} видов`}</p>
          </CardContent>
        </Card>
        </Link>

        ))}
      </div>
    </div>
  </div>
  );
} 