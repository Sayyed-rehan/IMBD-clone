import React, { useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [nowPlayingData, setnowPlayingData] = useState([]);

  const [page, setpage] = useState(1);

  const [TopRated, setTopRated] = useState([])

  const fetchNowPlayingData = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
        console.log(json.results);
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
      top: 510,
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
        console.log('top rated',json.results[0])
        setTopRated(json.results[0])
      })
      .catch((err) => console.error(err));
  };

 

  useEffect(() => {
    fetchNowPlayingData();
  }, [page]);

  useEffect(()=>{
    fetchTopRatedData()
  },[])

  return (
    <div className="ml-[3vw] mr-[2vw]">
      <Banner 
        img={TopRated?.backdrop_path}
        title = {TopRated?.title}
      />

      <div className="flex gap-[5vw] flex-wrap justify-evenly  mt-[50px] ">
        {nowPlayingData.length > 0 ? (
          nowPlayingData.map((item, index) => {
            return (
              <Card
                key={item.id}
                img={
                  item.backdrop_path != null
                    ? item.backdrop_path
                    : item.poster_path
                }
                title={item.title}
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
