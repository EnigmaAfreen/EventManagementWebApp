import axios from "axios";
import { CONSTANTS } from "../Constants";

export const axiosEventInstance = axios.create({
  baseURL: CONSTANTS.EVENT_BASE_URL,
});
