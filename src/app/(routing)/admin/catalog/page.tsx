'use client'
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