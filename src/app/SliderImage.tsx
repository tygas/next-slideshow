"use client";
import Image from "next/image";
import { useRef, type FC } from "react";

const Images: string[] = [
  "https://images.pexels.com/photos/13922583/pexels-photo-13922583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3611396/pexels-photo-3611396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

interface SliderImageProps {
  url: number;
}

const SliderImage: FC<SliderImageProps> = ({ url }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  return <Image src={Images[0]} alt="slider image!" fill ref={imgRef} />;
};

export default SliderImage;
