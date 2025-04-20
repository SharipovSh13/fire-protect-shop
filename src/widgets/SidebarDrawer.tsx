import { Drawer, DrawerClose , DrawerContent, DrawerTrigger } from "@/shared/components/ui/drawer";
import { Button } from "@/shared/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function SidebarDrawer() {
    return (
        <Drawer >
            <DrawerTrigger asChild className="hover:bg-red-600">
                <Button variant="ghost" className="hover:text-white" size="sm">
                    <Menu className="h-6 w-6" />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="fixed left-0 top-0 h-full w-64 border-r bg-white shadow-lg dark:text-black dark:bg-slate-500">
                <div className="p-4">
                    <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                    <h2 className="text-lg font-bold">Menu</h2>
                    <ul className="mt-4 space-y-2 font-bold">
                        <li>
                            <DrawerClose asChild>
                            <Link href="/" className="block p-2 rounded hover:bg-gray-100">Главная</Link>
                            </DrawerClose >
                        </li>
                        <li>
                            <DrawerClose asChild>
                            <Link href="about-us" className="block p-2 rounded hover:bg-gray-100">О нас</Link>
                            </DrawerClose >
                        </li>
                        <li>
                            <DrawerClose asChild>
                            <Link href="contact" className="block p-2 rounded hover:bg-gray-100">Контакты</Link>
                            </DrawerClose >
                        </li>
                        <li>
                            <DrawerClose asChild>
                            <Link href="deliver" className="block p-2 rounded hover:bg-gray-100"> Доставка</Link>
                            </DrawerClose >
                        </li>
                    </ul>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
