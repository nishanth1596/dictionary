import axios from "axios";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export async function fetchData() {
  try {
    const res = axios.get(`${BASE_URL}/keyboard`);
    const data = (await res).data;

    return data;
  } catch (error) {
    console.error("Unable to fetch data: ", error);
    throw error;
  }
}
