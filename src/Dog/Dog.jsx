import useSWR from "swr";
import { Card } from "./Card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Dog = () => {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/images/search",
    fetcher
  );

  if (error) return <div>Falló al cargar</div>;
  if (!data) return <div>Cargando...</div>;

  return data.map((e, index) => <Card url={e.url} />);
};
