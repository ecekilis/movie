import Movies from "@/components/Movies";

const page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=0201de6449ad2382bd23f008a3950ef6&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  console.log(data, "data");

  return (
    <div className="flex  justify-center items-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default page;

//https://api.themoviedb.org/3/movie/11?api_key=0201de6449ad2382bd23f008a3950ef6
