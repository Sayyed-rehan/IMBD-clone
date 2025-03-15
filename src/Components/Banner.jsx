import React from "react";
import dummy from "../../public/dummy.jpg";


const Banner = (props) => {

  // console.log(props);

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.img})`,
      }}
    >
        <div className="text-[white] w-full text-center text-[20px]">
            {props.title}
        </div>
    </div>
  );
};

export default Banner;
