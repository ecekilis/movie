import Image from "next/image";
import React from "react";
Image;

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=0201de6449ad2382bd23f008a3950ef6`
  );
  return await res.json();
};

const page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(movieDetail);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2 text-xl">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date}-{movieDetail?.vote_average}
        </div>
        <div className="border w-32 p-3 rounded-md text-center text-lg cursor-pointer bg-orange-500">
          Trail
        </div>
      </div>
    </div>
  );
};

export default page;
