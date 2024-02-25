import { AxiosResponse } from "axios";

export interface ICat {
  breeds: string[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ICatsResponse {
  data: ICat[];
}
