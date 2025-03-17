import React from "react";

const WatchList = () => {
  let watchlist_data = JSON.parse(localStorage.getItem("watchlist")) || [];
  console.log(watchlist_data);
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchlist_data.length > 0 ? (
            watchlist_data.map((item, index) => {
              return (
                <tr className="hover:bg-gray-100" key={item.id}>
                  <td className="flex items-center gap-[50px] px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[9rem] w-[15rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt={item.title}
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {item.title}
                    </div>
                  </td>

                  <td className="pl-6 py-4">{item.vote_average}</td>
                  <td className="pl-6 py-4">{item.popularity}</td>
                  <td className="pl-2 py-4">{item.genre_ids[0]}</td>
                </tr>
              );
            })
          ) : (
            <h1>No Data Available</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
