import Movies from "@/components/Movies";
import React from "react";

const page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0201de6449ad2382bd23f008a3950ef6&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  console.log(data?.results, "data");
  return (
    <div>
      {!data?.results ? (
        <div>Aradığınız şey bulunamadı!</div>
      ) : (
        <div className="flex items-center flex-wrap">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
