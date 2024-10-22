import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState("harry");

  const MovieData = async () => {
    try {
      const reponse = await axios.get(
        `https://www.omdbapi.com/?apikey=8df60ba5&s=${searchTerm}`
      );
      setData(reponse.data.Search);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    MovieData();
  }, []);

  const SearchBtn = () => {
    MovieData();
  };

  return (
    <div className="container">
      <div className="flex justify-center md:w-[500px] w-full mx-auto ">
        <input
          type="text"
          className="border border-gray-800 py-2 px-3 grow rounded-l"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-slate-700 text-white py-2 px-6 rounded-r "
          onClick={() => SearchBtn()}
        >
          Search!
        </button>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-4 mt-10 mx-auto max-md:grid-cols-1">
        {data
          ? data.map((movie, index) => {
              return (
                <div key={index}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-[320px] object-cover object-top rounded"
                  />
                  <h2>{movie.Title}</h2>
                  <div className="flex justify-between">
                    <p className="italic">#{movie.Type}</p>
                    <p className="italic">{movie.Year}</p>
                  </div>
                </div>
              );
            })
          : "Bunday Film Yoq 😄"}
      </div>
    </div>
  );
};

export default Movie;
