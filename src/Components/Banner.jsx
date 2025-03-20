import React from "react";



const Banner = (props) => {

  console.log(props);

  let path;

  if(props.data.backdrop_path){
    path = `https://image.tmdb.org/t/p/original${props.data.backdrop_path}`
  }else if(props.data.poster_path){
    path = `https://image.tmdb.org/t/p/original${props.data.poster_path}`
  }else{
    path = '../../dummy.jpg'
  }

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end rounded-xl"
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
        <div className="text-[white] w-full text-center text-[20px]">
            {props.data.title}
        </div>
    </div>
  );
};

export default Banner;
