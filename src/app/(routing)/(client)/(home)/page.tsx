'use client'
import Mycommand from "@/shared/components/ui/myComand";
import StoreInfo from "@/shared/components/ui/storeInfo";
import { AutoSwiper } from "@/widgets/AutoSwiper";
import Bestsellers from "@/widgets/bestSeller";
import { CarouselSize } from "@/widgets/homeCarousel";
import PopularCategories from "@/widgets/popularCategoryes";

export default function Home() {
  return (
    <section className="home w-[100%]  overflow-hidden m-auto">
      <AutoSwiper />
      <PopularCategories/>
      <Bestsellers/>
      <StoreInfo />
      <CarouselSize />
      <Mycommand/>
    </section>
  );
}
