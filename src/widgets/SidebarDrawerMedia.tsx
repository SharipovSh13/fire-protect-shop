'use client'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/shared/components/ui/drawer";
import { Button } from "@/shared/components/ui/button";
import { FileUser, FireExtinguisher, Menu, Phone, ShieldUserIcon, Truck } from "lucide-react";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function SidebarDrawerMedia() {
    return (
        <Drawer >
            <DrawerTrigger asChild className="hover:bg-red-500">
                <Button variant="ghost" className="hover:text-white" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="fixed  h-full w-64 border-r bg-white shadow-lg dark:bg-[#B41414] dark:text-gray-300">
                <div className="p-4">
                    <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                    <h2 className="text-lg font-bold">MENU</h2>
                    <ul className="mt-4 space-y-2 font-bold">

                        <li className="flex items-center gap-2">

                            <DrawerClose asChild>
                                <Link href={"catalog"} className="block p-2 rounded hover:bg-gray-100">
                                    PRODUCT
                                </Link>
                            </DrawerClose>
                            <FireExtinguisher size={"18px"} />
                        </li>
                        <li className="flex items-center gap-2">
                            <DrawerClose asChild>
                                <Link href="about-us" className="block p-2 rounded hover:bg-gray-100">ABOUT</Link>

                            </DrawerClose>
                            <FileUser size={"18px"} />
                        </li>
                        <li className="flex items-center gap-2">
                            <DrawerClose asChild>
                                <Link href="contact" className="block p-2 rounded hover:bg-gray-100">CONTACT</Link>

                            </DrawerClose>
                            <Phone size={"18px"} />
                        </li>
                        <li className="flex items-center gap-2">
                            <DrawerClose asChild>
                                <Link href="deliver" className="block p-2 rounded hover:bg-gray-100">DELIVER</Link>
                            </DrawerClose>
                            <Truck size={"18px"} />
                        </li>
                        <li className="flex items-center gap-2">
                            <DrawerClose asChild>
                                <Link href={"login"} className=" p-2 rounded hover:bg-gray-100 hover:underline flex items-center gap-2">LOGIN
                                </Link>
                            </DrawerClose>
                            <ShieldUserIcon size={"18px"} />
                        </li>
                    </ul>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
