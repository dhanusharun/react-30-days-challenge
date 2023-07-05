import React from 'react'
import CardComponent from './CardComponent'

const ResultWrapper = () => {
  return (
    <div className="result-wrapper">
      <div className="result-trending">
        <div className='row mb-2'>
          <h2>Trending</h2>
        </div>
        <div className="row mb-2">
          <div className="col">
            <CardComponent image="https://assetsio.reedpopcdn.com/naruto-watch-order.jpg" />
          </div>
          <div className="col">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Itachi-Uchiha.jpg" />
          </div>
          <div className="col">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Kakashi-Hatake.jpg" />
          </div>
          <div className="col">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Might-Guy.jpg" />
          </div>
        </div>
      </div>

      <div className="result-content">
        <div className='row mb-2'>
        <h2>Results</h2>
        </div>
        <div className="row">
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3">
            <CardComponent image="https://blacknerdproblems.com/wp-content/uploads/2015/08/Sakura-1.jpg" />
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Asuma-Sarutobi.jpg"/>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Iruka-Umino.jpg"/>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Hinata-Hyuga.jpg" />
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Tobirama-Senju.jpg"/>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3">
            <CardComponent image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Zabuza-Momochi.jpg"/>
          </div>

          

        </div>
      </div>

    </div>
  );
}

export default ResultWrapper
