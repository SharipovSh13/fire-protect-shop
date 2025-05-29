// 'use client'

// import API from "@/shared/components/lib/api"
// import { Button } from "@/shared/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
// import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/shared/components/ui/drawer"
// import { Input } from "@/shared/components/ui/input"
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
// import axios from "axios"
// import { CirclePlus, Plus } from "lucide-react"
// import { useState } from "react"

// export default function Catalog() {




//   // product Add
//   const [nameProdAdd, setNameProdAdd] = useState<string>("")
//   const [priceProdAdd, setPriceProdAdd] = useState<number | null>(null)

//   // const today = new Date()


//   async function addProducts() {
//     const newUser = {
//       productName: nameProdAdd,
//       price: priceProdAdd,

//     }
//     try {
//       await axios.post(`${API}/flame`, newUser)
//     } catch (error) {
//       console.log(error);

//     }
//   }

//   // product add


//   return <>
//     <header className="mb-20">
//       <Drawer>
//         <DrawerTrigger><CirclePlus/></DrawerTrigger>
//         <DrawerContent>
//           <DrawerHeader>
//             <DrawerTitle>Добавьте  Продукты</DrawerTitle>
//             <DrawerDescription>This action cannot be undone.</DrawerDescription>
//           </DrawerHeader>
//           <DrawerFooter>
//             <Button>Submit</Button>
//             <DrawerClose >
//               <Button variant="outline">Cancel</Button>
//             </DrawerClose>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//       <div className="w-[90%] m-auto p-2">

//         <HoverCard>
//           <HoverCardTrigger asChild>
//             <Button variant="default"><CirclePlus /></Button>
//           </HoverCardTrigger>
//           <HoverCardContent className="w-70 p-4 bg-muted/90 dark:bg-[#141a2a] border-1 border-gray-300">
            
//           </HoverCardContent>
//         </HoverCard>
//       </div>
//     </header>
//     <div className="w-[90%] m-auto ">

//       <Card className="mt-12 mb-12 p-2 dark:bg-slate-800/40 ">
//         <CardHeader className="font-bold">
//           <CardTitle className="flex  items-center justify-between">
//             Добавьте  Продукты
//             <Plus strokeWidth={"1px"} />
//           </CardTitle>

//           <CardDescription className="w-[100%] font-light">
//             Добавьте новый товар в каталог.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="w-[100%]">
//           <label htmlFor="products Name" className="font-medium">Название продукта:</label>
//           <Input className="dark:bg-slate-900/80 dark:border-1 placeholder:font-light dark:border-white" placeholder="Огнетушитель ОП-1"
//             onChange={(e) => setNameProdAdd(e.target.value)}
//             value={nameProdAdd}
//           />
//           <label htmlFor="products Name" className="font-medium">Цена:</label>
//           <Input className="dark:bg-slate-900/80 dark:border-1 placeholder:font-light dark:border-white" placeholder="100 cомони"
//             onChange={(e) => setPriceProdAdd(Number(e.target.value))}
//             value={priceProdAdd ?? ""} // Убедитесь, что значение контролируется
//           />
//         </CardContent>
//         <CardFooter className="w-[90%] ml-[5%] flex justify-between">
//           <Button type="submit" onClick={() => addProducts()}>
//             Добавьте
//           </Button>
//           <Button type="button">
//             Отмена
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>

//     <h1>page Catalog Admin</h1>
//   </>
// }



import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/shared/components/ui/card";
import {
  LayoutDashboard,
  Flame,
  AlertTriangle,
  FileText,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  HardHat,
  FireExtinguisher
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/shared/components/ui/table";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";

export default function Catalog() {
  // Моковые данные статей
  const articles = [
    {
      id: 1,
      title: "Основы пожарной безопасности на производстве",
      category: "Производство",
      status: "published",
      views: 1245,
      date: "15.05.2023"
    },
    {
      id: 2,
      title: "Новые технологии пожаротушения",
      category: "Технологии",
      status: "draft",
      views: 0,
      date: "22.06.2023"
    },
    {
      id: 3,
      title: "Анализ крупных пожаров 2023 года",
      category: "Аналитика",
      status: "published",
      views: 3567,
      date: "10.01.2024"
    },
    {
      id: 4,
      title: "Первая помощь при ожогах",
      category: "Медицина",
      status: "archived",
      views: 2891,
      date: "03.03.2023"
    }
  ];

  // Категории статей
  const categories = [
    { name: "Все", count: 24, icon: Flame },
    { name: "Производство", count: 8, icon: HardHat },
    { name: "Технологии", count: 5, icon: FireExtinguisher },
    { name: "Аналитика", count: 6, icon: FileText },
    { name: "Медицина", count: 5, icon: AlertTriangle }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Админ-панель | Каталог статей</h1>
          <nav>
            <Button variant="ghost" size="sm">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <nav className="p-4 space-y-4">
            <div className="space-y-1">
              <h2 className="font-semibold text-lg px-4">Категории</h2>
              <ul className="space-y-1">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <li key={index}>
                      <Button variant="ghost" className="w-full justify-start">
                        <Icon className="mr-2 h-4 w-4" />
                        {category.name}
                        <Badge variant="secondary" className="ml-auto">
                          {category.count}
                        </Badge>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Separator />

            <div className="space-y-1">
              <h2 className="font-semibold text-lg px-4">Статусы</h2>
              <ul className="space-y-1">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Badge className="mr-2 h-2 w-2 bg-green-500" />
                    Опубликовано
                    <Badge variant="secondary" className="ml-auto">
                      15
                    </Badge>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Badge className="mr-2 h-2 w-2 bg-yellow-500" />
                    Черновики
                    <Badge variant="secondary" className="ml-auto">
                      5
                    </Badge>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Badge className="mr-2 h-2 w-2 bg-gray-500" />
                    Архив
                    <Badge variant="secondary" className="ml-auto">
                      4
                    </Badge>
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <section className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Управление статьями</h2>
              <p className="text-muted-foreground">
                Всего статей: 24 | Опубликовано: 15 | Черновиков: 5
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Добавить статью
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Список статей</CardTitle>
                  <CardDescription>
                    Поиск и фильтрация статей пожарной тематики
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Поиск статей..."
                      className="pl-10 w-[200px] lg:w-[300px]"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Фильтры
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Название</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Просмотры</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>{article.id}</TableCell>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>{article.category}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            article.status === "published"
                              ? "default"
                              : article.status === "draft"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {article.status === "published"
                            ? "Опубликовано"
                            : article.status === "draft"
                            ? "Черновик"
                            : "Архив"}
                        </Badge>
                      </TableCell>
                      <TableCell>{article.views}</TableCell>
                      <TableCell>{article.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Показано 1-{articles.length} из {articles.length} статей
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  );
}