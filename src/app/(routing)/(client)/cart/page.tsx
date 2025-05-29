

"use client"

import { Button } from "@/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/shared/components/ui/table"
import { Trash2, Plus, Minus, Flame } from "lucide-react"

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Огнетушитель ОП-5",
      price: 2500,
      quantity: 2,
      image: "/op5.png"
    },
    {
      id: 2,
      name: "Пожарный рукав 20м",
      price: 1800,
      quantity: 1,
      image: "/op5.png"
    }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = 500
  const total = subtotal + deliveryFee

  return (
    <div className="container mx-auto py-8 p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Flame className="text-red-600" /> Корзина
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Ваши товары</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Товар</TableHead>
                    <TableHead>Количество</TableHead>
                    <TableHead>Цена</TableHead>
                    <TableHead>Сумма</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        {item.name}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{item.price} ₽</TableCell>
                      <TableCell>{item.price * item.quantity} ₽</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Итого</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Промежуточный итог</span>
                <span>{subtotal} ₽</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка</span>
                <span>{deliveryFee} ₽</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Общая сумма</span>
                <span>{total} ₽</span>
              </div>

              <div className="pt-4 space-y-3">
                <Input placeholder="Промокод" />
                <Button className="w-full" size="lg">
                  Оформить заказ
                </Button>
                <Button variant="outline" className="w-full">
                  Продолжить покупки
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}