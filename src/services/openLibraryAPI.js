import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function getBooks(query) {
  const getTerm = query.trim() === "" ? "the" : query;

  try {
    const response = await axios.get(API_URL, {
      params: {
        q: getTerm,
        limit: 25,
        fields: "title,author_name,cover_i,first_publish_year,key",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
}
