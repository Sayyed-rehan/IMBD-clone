import React from "react";
import { useEffect } from "react";



const Card = (props) => {

  // console.log('props', props.id);
  let path;
  if(props.data.poster_path){
    path = `https://image.tmdb.org/t/p/original${props.data.poster_path}`
  }else if(props.data.backdrop_path){
    path = `https://image.tmdb.org/t/p/original${props.data.backdrop_path}`
  }else{
    path = "../../public/dummy_movie.jpg"
  }

  const handleLike = ()=>{
    // console.log('liked', props);
    props.SavedToWatchList(props.data.id)
  }

  const handleDisLike = ()=>{
   console.log('disliked');
    let index = props.saved_to_watchList_arr.indexOf(props.data.id)
    props.RemoveFromWatchList(index)
  }

  const checkIsSaved= ()=>{
    // console.log('ass on',props.saved_to_watchList_arr.includes(props.data.id))
    return props.saved_to_watchList_arr.includes(props.data.id)
  }

  // useEffect(()=>{
  //   checkIsSaved()
  // })
  
  return (
    <div
      className="w-[210px] h-[50vh] bg-cover bg-center m-[10px] rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between"
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
        <div className="text-[white] w-full  text-center text-x p-2 bg-gray-400/70 rounded-lg">
            <h1>{props.data.title}</h1>
        </div>
        <div className="text-[red] text-[25px]   flex justify-end p-[10px]  hover:scale-y-150 hover:scale-x-105 duration-300 hover:cursor-pointer">
        
        {  
        checkIsSaved() == true 
        ? <i class="fa-solid fa-trash" style={{color:'#fdd835'}} onClick={handleDisLike}></i> 
        : <i class="fa-solid fa-heart" onClick={handleLike}></i>
        }
        </div>
    </div>
  );
};

export default Card;
