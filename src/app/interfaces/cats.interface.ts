import { AxiosResponse, HttpStatusCode } from "axios";

export interface ICat {
  breeds: string[];
  id: string;
  url: string;
  width: number;
  height: number;
}
