'use client'

import API from "@/shared/components/lib/api"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/shared/components/ui/drawer"
import { Input } from "@/shared/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import axios from "axios"
import { CalendarDays, CirclePlus, Plus } from "lucide-react"
import { useState } from "react"

export default function Catalog() {




  // product Add
  const [nameProdAdd, setNameProdAdd] = useState<string>("")
  const [priceProdAdd, setPriceProdAdd] = useState<number | null>(null)

  const today = new Date()
  const formated = today.toLocaleDateString("tj-TJ")


  async function addProducts() {
    const newUser = {
      productName: nameProdAdd,
      price: priceProdAdd,

    }
    try {
      await axios.post(`${API}/flame`, newUser)
    } catch (error) {
      console.log(error);

    }
  }

  // product add


  return <>
    <header className="mb-20">
      <Drawer>
        <DrawerTrigger><CirclePlus/></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Добавьте  Продукты</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose >
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="w-[90%] m-auto p-2">

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="default"><CirclePlus /></Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-70 p-4 bg-muted/90 dark:bg-[#141a2a] border-1 border-gray-300">
            {/* <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage className="" src="https://cdn.baltica01.ru/sites/default/files/styles/170x170/public/tovar/shchit-pozharnyi-metallicheskii-otkrytyi-7185.jpg" />
            <AvatarFallback>shp</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">добавлять элементы</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {formated}
              </span>
              </div>
          </div>
        </div> */}
          </HoverCardContent>
        </HoverCard>
      </div>
    </header>
    <div className="w-[90%] m-auto ">

      <Card className="mt-12 mb-12 p-2 dark:bg-slate-800/40 ">
        <CardHeader className="font-bold">
          <CardTitle className="flex  items-center justify-between">
            Добавьте  Продукты
            <Plus strokeWidth={"1px"} />
          </CardTitle>

          <CardDescription className="w-[100%] font-light">
            Добавьте новый товар в каталог.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          <label htmlFor="products Name" className="font-medium">Название продукта:</label>
          <Input className="dark:bg-slate-900/80 dark:border-1 placeholder:font-light dark:border-white" placeholder="Огнетушитель ОП-1"
            onChange={(e) => setNameProdAdd(e.target.value)}
            value={nameProdAdd}
          />
          <label htmlFor="products Name" className="font-medium">Цена:</label>
          <Input className="dark:bg-slate-900/80 dark:border-1 placeholder:font-light dark:border-white" placeholder="100 cомони"
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