"use client"

import API from "@/shared/components/lib/api";
import { IProducts } from "@/shared/types/interfaceGlobal";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function CategoryById() {

    const [products, setProducts] = useState<IProducts[]>([])

    async function getProducts() {
        try {
            const { data } = await axios.get(`${API}/flame`)
            setProducts(data)
        } catch (error) {
            console.error(error);

        }

    }
    useEffect(() => {
        getProducts()

    }, []);

    const { categoryById } = useParams()

    console.log(products.find((el) => el.id.toString() === (categoryById)));
    const foundProduct = products.find((el) => el.id.toString() ===(categoryById))
    return <>
        <h1>Page Category By Id:
            {foundProduct ? foundProduct.productName : "Продукт не найдено"}

            {/* {dataProduct.find((el)=> el.id==categoryById)?.name} */}
        </h1>
    </>
}