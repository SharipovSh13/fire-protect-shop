'use client'
import { useEffect, useState } from "react";
import { IMycommand} from "@/shared/types/interfaceGlobal";
import {  MYCOMMAND_API } from "../lib/api";
import axios from "axios";
import { TypographyH1 } from "../typografy/typographyH1";

export default function Mycommand() {

  const [myCommand, setMyCommands] = useState<IMycommand[]>([])
  async function getProducts() {
    try {
      const { data } = await axios.get(`${MYCOMMAND_API}/myCommand`)
      console.log(data);

      setMyCommands(data)


    } catch (error) {
      console.error(error);

    }

  }
  useEffect(() => {
    getProducts()

  }, []);

  return <>
    <section className="  mb-10 p-4  ">
      <div className="w-[90%] m-auto h-fit ">
        

        <h2 className="text-2xl font-bold mb-6 text-slate-700 dark:text-gray-100   ">Наша команда</h2>
        <div className=" max-w-[100%]    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 ">
          {myCommand.slice(0, 4).map((user, index) => {
            return <div key={index} className=" text-center text-slate-700 dark:text-gray-200 space-y-1 hover:shadow-xl    rounded-md   p-6 mb-10  ">
              <div>
                <img
                  src={user.userAvatar}
                  alt={user.userName}

                  className="p-2 mx-auto    h-[150px] mb-2"
                />
              </div>
              <TypographyH1 className="font-semibold">{user.userName}</TypographyH1>
              <p>{user.rolUsers}</p>
            </div>

          })}


        </div>




      </div>
    </section>
  </>
}