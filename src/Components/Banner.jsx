import React from "react";
import dummy from "../../public/dummy.jpg";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[65vh] bg-cover bg-center flex items-end "
      style={{
        backgroundImage: `url(https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)`,
      }}
    >
        <div className="text-[white] w-full text-center text-[20px]">
            PlaceHolder
        </div>
    </div>
  );
};

export default Banner;
