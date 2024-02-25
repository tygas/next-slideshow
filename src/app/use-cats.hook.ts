import { fetchCatsApi } from "@/app/api";
import { useQuery } from "react-query";
import { ICat } from "@/app/Cats/cats.interface";

const useFetchCats = <T>() => {
  const { data: cats, isLoading, error } = useQuery<ICat[]>("cats", fetchCatsApi);

  return { cats, loading: isLoading, error };
};

export default useFetchCats;
