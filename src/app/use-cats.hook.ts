import { fetchCatsApi } from "@/app/api";
import { useQuery } from "react-query";
import { ICat } from "@/app/interfaces/cats.interface";

const fetchCats = (): { cats: ICat[] | undefined; loading: boolean; error: unknown } => {
  const { data: cats, isLoading, error } = useQuery<ICat[]>("cats", fetchCatsApi);
  return { cats, loading: isLoading, error };
};

export default fetchCats;
