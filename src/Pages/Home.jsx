import React, { useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
// import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [nowPlayingData, setnowPlayingData] = useState([]);

  const [page, setpage] = useState(1);

  const [TopRated, setTopRated] = useState([]);

  const [saved_to_watchList, setsaved_to_watchList] = useState([]);

  let controller = new AbortController();

  const fetchNowPlayingData = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjM2NWQ2YWIyNzkyMmQ0ZjQ3NjM5YTBhNzk2ZTIxNiIsIm5iZiI6MTc0MjAyMjUzOS44MTksInN1YiI6IjY3ZDUyNzhiMTNkMGU5NmI0MjdiOWYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aS2kr9yxWJoc6JOF5hb44uG6mJS0slmSoMHjz6RPJp0",
      },
      signal: controller.signal,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        setnowPlayingData(json.results);
      })
      .catch((err) => console.error(err));
  };

  const handlePage = (direction) => {
    if (direction == "left") {
      if (page > 1) {
        setpage(page - 1);
      } else {
        return;
      }
    } else {
      setpage(page + 1);
    }

    window.scrollTo({
      top: 660,
      behavior: "smooth",
      duration: 300,
    });
  };

  const fetchTopRatedData = () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjM2NWQ2YWIyNzkyMmQ0ZjQ3NjM5YTBhNzk2ZTIxNiIsIm5iZiI6MTc0MjAyMjUzOS44MTksInN1YiI6IjY3ZDUyNzhiMTNkMGU5NmI0MjdiOWYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aS2kr9yxWJoc6JOF5hb44uG6mJS0slmSoMHjz6RPJp0",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        // console.log("top rated", json.results[0]);
        setTopRated(json.results[0]);
      })
      .catch((err) => console.error(err));
  };

  // save to watch list
  const SavedToWatchList = (data) => {
    localStorage.setItem("watchlist", JSON.stringify([...saved_to_watchList, data]));
    setsaved_to_watchList([...saved_to_watchList, data]);
    
  };

  const RemoveFromWatchList = (data) => {
    // saved_to_watchList.splice(index, 1)
    localStorage.setItem("watchlist", JSON.stringify([...data]));
    setsaved_to_watchList([...data]);
  };

  console.log("ass", saved_to_watchList);

  // update on every pagination
  useEffect(() => {
    console.log("APi caliing");

    try {
      fetchNowPlayingData();
    } catch (error) {
      console.log(error);
    }

    return () => {
      console.log("cleaning up brefore next call");
    };
  }, [page]);

  //to see Banner
  useEffect(() => {
    fetchTopRatedData();
  }, []);

  // store  watchlist to  localStorage
  // useEffect(() => {

  //   let watchlist_data = JSON.parse(localStorage.getItem("watchlist"));
  //   if(saved_to_watchList.length == watchlist_data.length ){
  //     localStorage.setItem("watchlist", JSON.stringify([...saved_to_watchList]));
  //   }else{
  //     console.log('im called');
  //     localStorage.setItem("watchlist", JSON.stringify([...watchlist_data]));

  //   }
  // }, [saved_to_watchList]);

  return (
    <div className="ml-[3vw] mr-[2vw]">
      <Banner img={TopRated?.backdrop_path} title={TopRated?.title} />

      <div className="flex gap-[2vw] flex-wrap justify-evenly  mt-[50px] ">
        {nowPlayingData.length > 0 ? (
          nowPlayingData.map((item, index) => {
            return (
              <Card
                key={item.id}
                data={item}
                SavedToWatchList={SavedToWatchList}
                saved_to_watchList_arr={saved_to_watchList}
                RemoveFromWatchList={RemoveFromWatchList}
              />
            );
          })
        ) : (
          <h1>Loading....</h1>
        )}
      </div>

      <div className="bg-gray-400 h-[6vh] w-[full] mt-[25px] mb-[10px] flex justify-center items-center gap-[30px] text-[black] rounded-[10px] text-[25px] ">
        <i
          class="fa-solid fa-arrow-left hover:scale-150 duration-300 cursor-pointer hover:text-[white]"
          onClick={() => handlePage("left")}
        ></i>
        <p className="font-semibold">{page}</p>
        <i
          class="fa-solid fa-arrow-right hover:scale-150 duration-300 cursor-pointer hover:text-[white]"
          onClick={() => handlePage("right")}
        ></i>
      </div>
    </div>
  );
};

export default Home;
