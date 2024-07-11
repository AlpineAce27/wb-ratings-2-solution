import { useLoaderData } from "react-router-dom";

export default function MovieDetailPage() {
  const {movie} = useLoaderData()

  console.log(movie)

  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.posterPath} alt={movie.title} style = {{width: "200px"}} />
      <p>{movie.overview}</p>
    </>
  );
}
