"use client";
import type { NextPage } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducer, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useFetchCats from "@/app/use-cats.hook";
import { ICat } from "@/app/Cats/cats.interface";

interface StateType {
  url: number;
}

interface ActionType {
  type: string;
}

const HomePage: NextPage = () => {
  const { cats, loading, error } = useFetchCats<ICat[]>();
  const images: string[] = cats ? Object.values(cats)?.map(({ url }) => url) : [];
  console.log(images);

  const [currentImage, setCurrentImage] = useReducer(reducer, images);
  const [direction, setDirection] = useState<number>(1);

  if (loading || !Object.keys(images).length) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
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

  function reducer(state: StateType, action: ActionType): StateType {
    console.log(state, action);
    const length = Object.keys(state).length || 0;
    switch (action.type) {
      case "next": {
        debugger;
        return { url: (state.url + 1) % length || 1 };
      }
      case "prev":
        return { url: (state.url - 1 + length) % length || 1 };
      default:
        return state;
    }
  }

  return (
    <section className=" sm:grid place-items-center h-svh sm:h-screen bg-slate-200">
      <main className="w-full sm:w-[500px] h-60 sm:h-80 bg-white relative shadow-lg shadow-slate-400 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            src={images[currentImage.url]}
            alt={images[currentImage.url]}
            className=" absolute w-full h-full"
            variants={slideTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[currentImage.url]}
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
