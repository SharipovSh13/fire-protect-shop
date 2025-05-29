// import { TypographyH2 } from "@/shared/components/typografy/typographyH2";

// export default function Login(){
//     return <>
//     <TypographyH2 className="">
//         Page Login 
//     </TypographyH2>
//     </>
// }
"use client"

import { Button } from "@/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Flame, Lock, Mail } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 m-auto">
      <Card className="w-full   sm:w-85 max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Flame className="w-10 h-10 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold">
            FLAME.TJ
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Введите ваши данные для входа в аккаунт
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="ваш@email.com"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-0">
              <Input type="checkbox" className="w-[20px] h-[20px]"/>
              <Label htmlFor="remember">Запомнить меня</Label>
            </div>
            <Link href="/forgot-password" className="text-sm text-orange-600 hover:underline">
              Забыли пароль?
            </Link>
          </div>

          <Button className="w-full bg-orange-600 hover:bg-orange-700">
            Войти
          </Button>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Нет аккаунта?{" "}
            <Link href="/register" className="text-orange-600 hover:underline">
              Зарегистрируйтесь
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}