'use client'
import API from "@/shared/components/lib/api"
import { Button } from "@/shared/components/ui/button"
import { Card, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import axios from "axios"
import { useState } from "react"

export default function Catalog() {
   
   
    
    
    // product Add
    const [nameProdAdd, setNameProdAdd] = useState<string>("")
    const [priceProdAdd, setPriceProdAdd] = useState<number | null>(null)
    


    async function add(){
     let newUser = {
       name: nameProdAdd,
       price:priceProdAdd,
      
     }
     try {
        await axios.post(`${API}/products`, newUser)
     } catch (error) {
        console.log(error);
        
     }
    }

    // product add
    

    return <>
        <div className="w-[20%] m-auto ">
            {/* <input type="text" placeholder="Введите название товара"
                onChange={(e) => setNameProdAdd(e.target.value)}
            />
            <input type="text" placeholder="Введите cтоимость товара"
                onChange={(e) => setPriceProdAdd(e.target.value)}
            /> */}
            <Card className="mt-12 mb-12 p-4">
                <CardHeader>
                    Добавьте  Продукты
                </CardHeader>
                <Input placeholder="Название продукта"
                    onChange={(e) => setNameProdAdd(e.target.value)}
                    value={nameProdAdd} // Убедитесь, что значение контролируется
                />
                <Input placeholder=" Cтоимости товара"
                    onChange={(e) => setPriceProdAdd(Number(e.target.value))}
                    value={priceProdAdd ?? ""} // Убедитесь, что значение контролируется
                />
                <Button type="submit" onClick={()=>add()}>
                    Добавьте
                </Button>
            </Card>
        </div>

        <h1>page Catalog Admin</h1>
    </>
}