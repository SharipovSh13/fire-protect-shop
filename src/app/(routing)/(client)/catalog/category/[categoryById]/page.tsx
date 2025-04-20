"use client"

import API from "@/shared/components/lib/api";
import { IProduct } from "@/shared/types/interfaceGlobal";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function CategoryById() {

    const [products, setProducts] = useState<IProduct[]>([])

    async function getProducts() {
        try {
            const { data } = await axios.get(`${API}/products`)
            setProducts(data)
        } catch (error) {
            console.error(error);

        }

    }
    useEffect(() => {
        getProducts()

    }, []);

    const { categoryById } = useParams()

    console.log(products.find((el) => el.id === Number(categoryById)));
    const foundProduct = products.find((el) => el.id === Number(categoryById))
    return <>
        <h1>Page Category By Id:
            {foundProduct ? foundProduct.name : "Продукт не найдено"}

            {/* {dataProduct.find((el)=> el.id==categoryById)?.name} */}
        </h1>
    </>
}