// components/StoreFeatureList.tsx
import { CheckCircle } from "lucide-react";


const features = [
    "Официальные поставки сертифицированного оборудования",
    "Большой складской запас и быстрая отгрузка",
    "Консультации по подбору оборудования",
    "Доставка по всей стране",
    "Гарантии и поддержка",
    "Поддержка после покупки и обучение использованию оборудования",
];

const StoreFeatureList = () => {
    return (
        <section aria-label="Преимущества магазина" className="py-6 mt-10 ">
            <div className="w-[95%] m-auto space-y-10 mb-20">
                <h2 className="text-2xl text-slate-700 font-medium dark:text-gray-100">  Нам доверяют, потому что:</h2>
                <div className="grid  w-[90%] m-auto space-y-2 gap-10 grid-cols-1 sm:grid-cols-2 ">
                    {features.map((el, index) => {
                        return <div key={index} className=" space-y-2 space-x-2 flex flex-nowrap dark:text-gray-200">
                            <CheckCircle  className="text-orange-500 "  />
                                <p className="text-muted-foreground">{el}</p>
                         
                        </div>
                    })}

                </div>
            </div>


            <section className="w-[95%] m-auto mt-10 mb-4 " aria-label="Наш офис">
                <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-gray-100 ">Наш офис</h2>
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17559.551443466913!2d68.76005104693603!3d38.64666962169585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d32a735a0107%3A0x2fb2af704224c6fb!2sKushoniyon%20Market!5e0!3m2!1sen!2s!4v1744544799160!5m2!1sen!2s" // вставь сюда свою ссылку с Google Maps
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </section>
    );
};

export default StoreFeatureList;
