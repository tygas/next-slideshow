"use client";
import type { NextPage } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducer, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Images: string[] = [
  "https://images.pexels.com/photos/13922583/pexels-photo-13922583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3611396/pexels-photo-3611396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/11032489/pexels-photo-11032489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2260956/pexels-photo-2260956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3793772/pexels-photo-3793772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

interface StateType {
  url: number;
}

interface ActionType {
  type: string;
}

const HomePage: NextPage = () => {
  const initialState: StateType = { url: 0 };
  const [currentImage, setCurrentImage] = useReducer(reducer, initialState);
  const [direction, setDirection] = useState<number>(1);

  function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case "next":
        return { url: (state.url + 1) % Images.length };
      case "prev":
        return { url: (state.url - 1 + Images.length) % Images.length };
      default:
        return state;
    }
  }

  const slideTransition = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -500 : 500,
        opacity: 1,
      };
    },
  };

  return (
    <section className=" sm:grid place-items-center h-svh sm:h-screen bg-slate-200">
      <main className="w-full sm:w-[500px] h-60 sm:h-80 bg-white relative shadow-lg shadow-slate-400 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            src={Images[currentImage.url]}
            alt="slider image!"
            className=" absolute w-full h-full"
            variants={slideTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            key={Images[currentImage.url]}
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
      </main>
    </section>
  );
};

export default HomePage;
