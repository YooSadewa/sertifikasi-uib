import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import styles from './testimoni.module.css';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Testimoni() {
  const testimonials = [
    {
      desc: "Sangat bagus , saya sangat puas dengan hasilnya",
      name: "Pengguna 1",
    },
    {
      desc: "Sangat bagus , saya sangat puas dengan hasilnya",
      name: "Pengguna 2",
    },
    {
      desc: "Sangat bagus , saya sangat puas dengan hasilnya",
      name: "Pengguna 3",
    },
    {
      desc: "Sangat bagus , saya sangat puas dengan hasilnya",
      name: "Pengguna 4",
    },
    {
      desc: "Sangat bagus , saya sangat puas dengan hasilnya",
      name: "Pengguna 5",
    },
  ];

  const plugin = React.useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto py-10"
    >
      <CarouselContent className="-ml-1">
        {testimonials.map((testimony, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className={styles.batik}>
                <CardContent className="flex flex-col aspect-[4/3] items-center justify-center p-6">
                  <p className="text-center text-[14px] mb-4">
                    {testimony.desc}
                  </p>
                  <div className="flex gap-3 items-center">
                    <span className="bg-[#f7b500] w-4 h-[1px]"></span>
                    <h1 className="font-bold">{testimony.name}</h1>
                    <span className="bg-[#f7b500] w-4 h-[1px]"></span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
