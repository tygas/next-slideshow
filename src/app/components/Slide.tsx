import { AnimatePresence, motion } from "framer-motion";
import { slideTransition } from "@/app/Slides/slides-transision.config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Direction = {
  type: string;
};
interface SlideProps {
  imageUrl: string;
  setCurrentImage: (direction: Direction) => void;
}
export const Slide = ({ imageUrl, setCurrentImage }: SlideProps) => {
  const [direction, setDirection] = useState<number>(1);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          src={imageUrl}
          alt={imageUrl}
          className="absolute w-full h-full"
          variants={slideTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          key={imageUrl}
          transition={{
            type: "spring",
            stiffness: 120,
            mass: 0.2,
            damping: 10,
          }}
          custom={direction}
        />
      </AnimatePresence>
      <button
        className="z-10 absolute top-1/2 left-8 size-8 grid place-items-center rounded-full bg-white/10  text-white/40 border border-white/35 backdrop-blur-lg hover:border-white/60"
        onClick={() => {
          setDirection(-1);
          setCurrentImage({ type: "prev" });
        }}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        className="z-10 absolute top-1/2 right-8 size-8 grid place-items-center rounded-full bg-white/10  text-white/40 border border-white/35 backdrop-blur-lg hover:border-white/60"
        onClick={() => {
          setDirection(1);
          setCurrentImage({ type: "next" });
        }}
      >
        <ChevronRight size={18} />
      </button>
    </>
  );
};
