import React from "react";



const Card = (props) => {

  // console.log('props', props);
  let path;
  if(props.img != null){
    path = `https://image.tmdb.org/t/p/original${props.img}`
  }else{
    path = "../../public/dummy_movie.jpg"
  }
  // console.log(path);
  
  return (
    <div
      className="w-[210px] h-[40vh] bg-cover bg-center m-[10px] rounded-xl hover:scale-110 duration-300 hover:cursor-pointer  justify-start"
      style={{
        backgroundImage: `url(${path})`,
      }}
    >

    {/* <img src={dummy_movie} alt="dummy_movie" /> */}
        <div className="text-[white] w-full  text-center text-x p-2 bg-gray-400/70 rounded-lg">
            <h1>{props.title}</h1>
        </div>
    </div>
  );
};

export default Card;
