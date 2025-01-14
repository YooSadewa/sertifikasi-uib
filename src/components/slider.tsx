import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const images = [
    {
      src: "/assets/header/slider-7.jpg",
      alt: "slider 1"
    },
    {
      src: "/assets/header/slider-2.jpg",
      alt: "slider 2"
    },
    {
      src: "/assets/header/slider-3.jpg",
      alt: "slider 3"
    },
    {
      src: "/assets/header/slider-4.jpg",
      alt: "slider 4"
    },
    {
      src: "/assets/header/slider-8.jpg",
      alt: "slider 5"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-0">
            <Card>
              <CardContent className="flex items-center justify-center p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1500}
                  height={100}
                  className="w-full rounded-xl"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}