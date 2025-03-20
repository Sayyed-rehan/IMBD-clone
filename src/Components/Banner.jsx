import React, { useState } from "react";



const Banner = (props) => {

  // console.log(props);

  const [banner_page, setbanner_page] = useState(0)

  const handleBannerPage = (direction)=>{
    let down;
    if(direction == 'left'){
      if(banner_page>0){
        down = (banner_page-1)%5
      }else{
        down = (4)%5
      }
    }else{
      down = (banner_page+1)%5
    }
    console.log(down);
    setbanner_page(down)
  }

  let path;

  if(props.data[banner_page]?.backdrop_path){
    path = `https://image.tmdb.org/t/p/original${props.data[banner_page]?.backdrop_path}`
  }else if(props.data[banner_page]?.poster_path){
    path = `https://image.tmdb.org/t/p/original${props.data[banner_page]?.poster_path}`
  }else{
    path = '../../dummy_movie.jpg'
  }

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end rounded-xl"
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
        <div className="text-[white] w-full text-center text-[20px]">
        <i
          class="fa-solid fa-arrow-left hover:scale-150 duration-300 cursor-pointer hover:text-[white] pr-[20px]"
          onClick={()=>handleBannerPage('left')}
        ></i>
            {props.data[banner_page]?.title} 
        <i
          class="fa-solid fa-arrow-right hover:scale-150 duration-300 cursor-pointer hover:text-[white] pl-[15px]"
          onClick={()=>handleBannerPage('right')}
        ></i>
        </div>

    </div>
  );
};

export default Banner;


