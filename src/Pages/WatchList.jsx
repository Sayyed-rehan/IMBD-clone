import React from 'react'

const WatchList = () => {
  let watchlist_data = JSON.parse(localStorage.getItem('watchlist'))
  console.log(watchlist_data);
  return (
    <div>
      {watchlist_data.map((x,i)=>{
        return <>
          <p>{x.title}</p>
          <p>{x.id}</p>
          <br />
        </>
      })}
    </div>
  )
}

export default WatchList