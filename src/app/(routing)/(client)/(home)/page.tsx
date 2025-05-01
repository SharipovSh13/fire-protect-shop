// 'use client'
// import { CarouselSize } from "@/widgets/homeCarousel";
// import Image from "next/image";

// export default function Home() {
//   return <section className="home w-[100%]  ">

//     <div className=" relative    h-[530px] ">
//       <Image className="object-cover"  fill src={"/firefighters-protective-gear-fight-blazing-inferno-generated-by-ai.jpg"} alt="background" />
//       <CarouselSize />
//     </div>




//   </section>
// }

'use client'
import { CarouselSize } from "@/widgets/homeCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home w-full">
      <div className="relative w-full aspect-[16/9]">
        <Image
          className="object-cover"
          fill
          src="/firefighters-protective-gear-fight-blazing-inferno-generated-by-ai.jpg"
          alt="background"
          priority
        />
        <CarouselSize />
      </div>
    </section>
  );
}
