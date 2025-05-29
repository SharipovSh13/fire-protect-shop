'use client'
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import PhoneNumberCompany from "@/shared/components/ui/phoneNumber";
import GeolocationMag from "@/shared/components/ui/geolocatinMag";
import CompanyEmail from "@/shared/components/ui/emailInCompany";

export default function ContactPage() {
  return <section className="m-auto w-[100%]">

  

    <div className=" max-w-4xl mx-auto ">
      <div className="max-w-4xl mx-auto py-10 px-4 text-slate-700 dark:text-gray-100/80">
        <h1 className="text-3xl font-semibold mb-8 ">Контакты</h1>
      

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-sm">
            <CardContent className="space-y-4 pt-6">
              <Input placeholder="Имя" />
              <Input placeholder={`Номер телефона   +992`} />
              <Input placeholder="Электронная почта" type="email" />
              <Textarea placeholder="Сообщение" rows={5} />
              <Button className="w-full">Отправить</Button>
            </CardContent>
          </Card>


          <div className="space-y-4 text-gray-800 dark:text-gray-200/70">
            <div>
              <p className="font-medium">Телефон:</p>
              <PhoneNumberCompany companyNumber={"909 12 12 11"} />
            </div>
            <div>
              <p className="font-medium">Электронная почта:</p>
              <CompanyEmail email="info@sukhtor.tj" />
            </div>
            <div>
              <p className="font-medium">Адрес:</p>
              <GeolocationMag />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    ;
}



// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContactPage() {
//   return (
//     <div className="container py-10 space-y-8">
//       <h1 className="text-3xl font-bold text-center">Свяжитесь с нами</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Контактные данные */}
//         <Card>
//           <CardContent className="p-4 space-y-2">
//             <div className="flex items-center gap-2">
//               <MapPin className="text-red-600" />
//               <span>г. Душанбе, ул. Лохути 25</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="text-green-600" />
//               <a href="tel:+992900000000" className="hover:underline">+992 900 000 000</a>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="text-blue-600" />
//               <a href="mailto:info@flame.tj" className="hover:underline">info@flame.tj</a>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Форма обратной связи */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="md:col-span-2"
//         >
//           <Card>
//             <CardContent className="p-6 space-y-4">
//               <Input placeholder="Ваше имя" />
//               <Input placeholder="Телефон" />
//               <Input placeholder="Email" />
//               <Textarea placeholder="Ваше сообщение" rows={5} />
//               <Button className="w-full bg-red-600 hover:bg-red-700">Отправить сообщение</Button>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       {/* Карта */}
//       <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=..."
//           width="100%"
//           height="100%"
//           loading="lazy"
//           allowFullScreen
//           className="w-full h-full"
//         />
//       </div>
//     </div>
//   );
// }
