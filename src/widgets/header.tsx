"use client"
import { ModeToggle } from "@/shared/components/darkMode";
import { Search, ShieldUser, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypographyH1 } from "@/shared/components/typografy/typographyH1";
import SidebarDrawerMedia from "./SidebarDrawerMedia";

export default function Header() {
    return <header className=" flex justify-between items-center p-1 w-[100%]  m-auto  bg-muted/60  dark:bg-[#141a2a] border-b border-gray-200/50 dark:text-white ">
        <div className="flex items-center justify-between w-[100%]">

            <Link href={"/"} className="hover:underline font-bold text-red-700 flex items-center gap-2  dark:text-white ">
                <Image src={"/fLAME.TJnapanavvv.png"}  width={50} height={40} className="rounded-[50%] " alt="лого Flame.tj" />
                {/* <img className="rounded-[50%] w-[50px]" src="/fLAME.TJnapanavvv.png" alt="Описание изображения"   /> */}
                <TypographyH1 className=" text-sm md:text-xl dark:text-orange-500">
                    FLAME.TJ
                </TypographyH1>
            </Link>

            <div className="flex w-[40%]  justify-between items-center       max-sm:hidden  sm:w-[60%] ">

                <nav className="w-[65%]    ">
                    <ul className="flex items-center   justify-between">
                        <li className="font-bold">
                            <Link href={"/"} className="hover:underline">HOME</Link>
                        </li>
                       
                        <li className="font-bold  ">
                            <Link href={"about-us"} className="hover:underline">ABOUT</Link>
                        </li>
                        <li className="font-bold hidden lg:block">
                            <Link href={"catalog"} className="hover:underline">SHOP</Link>
                        </li>
                        <li className="font-bold">
                            <Link href={"contact"} className="hover:underline">CONTACT</Link>
                        </li>

                    </ul>
                </nav>

                <div className="flex items-center justify-between   w-[30%]">
                    <nav className=" w-[45%]  ">
                        <ul className="flex items-center justify-around ">
                            <li>
                                <Link href={"catalog"}>
                                <Search/>
                                </Link>
                            </li>
                            <li className="font-bold flex text-[10px]  border-l-[2px] border-black dark:border-white">
                                <Link href={"cart"} className="flex items-center hover:underline">
                                    <ShoppingCart size={"24px"} className="dark:color-white   " />
                                </Link>
                                <p className="hidden lg:block">
                                Cart
                                </p>

                            </li>
                        </ul>
                    </nav>



                    <nav>
                        <ul className="flex items-center  gap-[12px] font-bold md:ml
                        ">
                            <li className=" p-0.5  rounded-[6px] w-[fit] text-center flex items-center ">
                                <ModeToggle />

                            </li>
                            <li>
                                <Link href={"login"} className="hover:underline">
                                    <ShieldUser size={"24px"} className="hidden md:block"></ShieldUser>
                                </Link>

                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div className=" items-center hidden max-sm:block">
                <SidebarDrawerMedia />
                <ModeToggle />

            </div>
        </div>

    </header>
}