'use client'
import API from "@/shared/components/lib/api"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import axios from "axios"
import {  Plus } from "lucide-react"
import { useState } from "react"

export default function Catalog() {




    // product Add
    const [nameProdAdd, setNameProdAdd] = useState<string>("")
    const [priceProdAdd, setPriceProdAdd] = useState<number | null>(null)



    async function addProducts() {
        const newUser = {
            name: nameProdAdd,
            price: priceProdAdd,

        }
        try {
            await axios.post(`${API}/products`, newUser)
        } catch (error) {
            console.log(error);

        }
    }

    // product add


    return <>
        <div className="w-[90%] m-auto ">
           
            <Card className="mt-12 mb-12 p-2 dark:bg-slate-800/40 ">
                <CardHeader className="font-bold">
                    <CardTitle className="flex  items-center justify-between">
                        Добавьте  Продукты 
                        <Plus strokeWidth={"1px"}/>
                    </CardTitle>
                        
                    <CardDescription   className="w-[100%] font-light">
                    Добавьте новый товар в каталог.
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-[100%]">
                    <label htmlFor="products Name" className="font-medium">Название продукта:</label>
                    <Input className="dark:bg-slate-900/80 dark:border-1 placeholder:font-light dark:border-white" placeholder="Огнетушитель ОП-1"
                        onChange={(e) => setNameProdAdd(e.target.value)}
                        value={nameProdAdd} // Убедитесь, что значение контролируется
                    />
                    <label htmlFor="products Name" className="font-medium">Цена:</label>
                    <Input   className="dark:bg-slate-900/80 dark:border-1 placeholder:font-light dark:border-white" placeholder="100 cомони"
                        onChange={(e) => setPriceProdAdd(Number(e.target.value))}
                        value={priceProdAdd ?? ""} // Убедитесь, что значение контролируется
                    />
                </CardContent>
                <CardFooter className="w-[90%] ml-[5%] flex justify-between">
                    <Button type="submit" onClick={() => addProducts()}>
                        Добавьте
                    </Button>
                    <Button type="button">
                        Отмена
                    </Button>
                </CardFooter>
            </Card>
        </div>

        <h1>page Catalog Admin</h1>
    </>
}