import React, { useEffect, useState } from "react";
import genreids from "../Uitility";

const WatchList = () => {


  const [watchList, setwatchList] = useState([])

  const handleLow = ()=>{
    console.log('low');

    watchList.sort((ob1, ob2)=>{
      return ob1.vote_average - ob2.vote_average
    })
    console.log('from low',watchList);
    setwatchList([...watchList])
  }

  const handleHigh = ()=>{
    console.log('high');
 
    watchList.sort((ob1, ob2)=>{
      return ob2.vote_average - ob1.vote_average
    })
    console.log('from high',watchList);
    setwatchList([...watchList])

  }
  

  const handleNormal = ()=>{
    let watchlist_data = JSON.parse(localStorage.getItem("watchlist")) || []

    setwatchList([...watchlist_data])
  }

  useEffect(()=>{
    let watchlist_data = JSON.parse(localStorage.getItem("watchlist")) || []
    console.log(watchlist_data);
    setwatchList([...watchlist_data])
  },[])

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th className="ml-[20px]">
            <div className="flex items-center gap-[10px]">
            <i class="fa-solid fa-arrow-up" onClick={handleHigh}  style={{'font-size': 'large', 'cursor':"pointer"}}></i>
            <div className="cursor-pointer" onClick={handleNormal}>Ratings</div>
            <i class="fa-solid fa-arrow-down" onClick={handleLow} style={{'font-size': 'large', 'cursor':"pointer"}}></i>
            </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.length > 0 ? (
            watchList.map((item, index) => {
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
                  <td className="pl-2 py-4">
                    {genreids[item.genre_ids[0]] || 'NA'}
                  </td>
                </tr>
              );
            })
          ) : (
            <h1 className="font-medium text-gray-700 text-xl">No Data Available</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
