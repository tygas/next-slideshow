"use client";
import type { NextPage } from "next";
import { useEffect, useReducer, useState } from "react";
import fetchCats from "@/app/use-cats.hook";
import { Slide } from "@/app/components/Slide";
import { Loader } from "@/app/components/Loader";

interface StateType {
  url: number;
}

interface ActionType {
  type: string;
}

const HomePage: NextPage = () => {
  const { cats = [], loading, error } = fetchCats();
  const initialImageState: StateType = { url: 0 };

  const [images, setImages] = useState<any>({});
  const [currentImage, setCurrentImage] = useReducer(reducer, initialImageState);

  useEffect(() => {
    if (Object.keys(cats).length) {
      setImages(Object.values(cats)?.map(({ url }) => url));
    }
  }, [loading]);

  function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case "next":
        return { url: (state.url + 1) % images.length };
      case "prev":
        return { url: (state.url - 1 + images.length) % images.length };
      default:
        return state;
    }
  }

  if (error) {
    return <p className="error">Error: {error.toString()}</p>;
  }

  return (
    <section className=" sm:grid place-items-center h-svh sm:h-screen bg-slate-200">
      <main className="w-full sm:w-[500px] h-60 sm:h-80 bg-white relative shadow-lg shadow-slate-400 overflow-hidden">
        {loading ? (
          <div className="grid h-screen place-items-center">
            <Loader />
          </div>
        ) : (
          <Slide imageUrl={images[currentImage.url]} setCurrentImage={setCurrentImage} />
        )}
      </main>
    </section>
  );
};

export default HomePage;
