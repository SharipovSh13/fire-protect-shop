"use client"

import {  ReactElement, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { ArrowRight, ShieldAlert, FireExtinguisher, Flame } from "lucide-react";
import Link from "next/link";

interface IPremiumEquipmentCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  icon: ReactElement;
}


export function AutoSwiper() {
  const [slides, setSlides] = useState<IPremiumEquipmentCard[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch slides data (mock implementation)
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch('/api/slides');
        // const data = await response.json();
        
        // Mock data
        setTimeout(() => {
          setSlides([
            {
                id: 1,
                title: "Премиум оборудование",
                description: "Профессиональные средства пожаротушения с особыми условиями покупки",
                imageUrl: "/Final_industry_3.webp",
                ctaText: "В каталог",
                ctaLink: "/collection",
                icon: <Flame className="h-8 w-8 text-orange-500" />
              },
              {
                id: 2,
                title: "Новые поступления",
                description: "Современные пожарные системы и комплектующие",
                imageUrl: "/Final_appartment_2.webp",
                ctaText: "Смотреть новинки",
                ctaLink: "/new-arrivals",
                icon: <FireExtinguisher className="h-8 w-8 text-red-500" />
              },
              {
                id: 3,
                title: "Специальное предложение",
                description: "Ограниченные акции на средства противопожарной защиты",
                imageUrl: "/Final_ofice_2.webp",
                ctaText: "Получить скидку",
                ctaLink: "/offers",
                icon: <ShieldAlert className="h-8 w-8 text-blue-500" />
              }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching slides:", error);
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64  rounded-lg animate-pulse"></div>
    );
  }

  if (slides.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>No slides available</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please check back later</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-[95%] m-auto relative  mt-14 mb-14   ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className=" bg-contain bg-center h-70 md:h-[500px] w-full m-auto  bg-no-repeat   sm:w-[75%]  flex items-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
                <h2 style={{textShadow:'0px 0px 2px gray '}} className="text-3xl md:text-4xl font-bold mb-2 dark:text-white    text-black absolute top-1 left-1">{slide.title}</h2>
                <p  style={{textShadow:'0px 0px 2px gray '}} className=" bg-gray-100/30 dark:bg-slate-700/40 text-black dark:text-white absolute top-26 left-1 font-bold">{slide.description}</p>
                {slide.ctaText && (
                  <Button  className="group absolute  top-54 left-2 sm:top-60 sm:left-[70%] md:top-94 md:left-[75%]"> 
                    
                    {<Link href={"/catalog"}>
                    {slide.ctaText}
                    
                    </Link> 
                    }
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                )}

          </div>
          </SwiperSlide>
        ))}

    
        
      </Swiper>
    </div>
  );
}