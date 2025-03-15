import React from "react";

const Card = (props) => {

  // console.log('props', props);
  let path = 'https://image.tmdb.org/t/p/original'
  return (
    <div
      className="w-[210px] h-[40vh] bg-cover bg-center m-[10px] rounded-xl hover:scale-110 duration-300 hover:cursor-pointer  justify-start"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.img})`,
      }}
    >
        <div className="text-[white] w-full  text-center text-x p-2 bg-gray-400/70 rounded-lg">
            <h1>{props.title}</h1>
        </div>
    </div>
  );
};

export default Card;
