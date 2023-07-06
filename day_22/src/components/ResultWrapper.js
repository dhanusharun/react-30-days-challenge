import React from 'react'
import CardComponent from './CardComponent'


const ResultWrapper = (props) => {
  return (
    <div className="result-wrapper">
      {/* <div className="result-trending">
        <div className="row mb-2">
          <h2>Trending</h2>
        </div>
        <div className="row mb-2">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
            <CardComponent
              width="275"
              height="275"
              image="https://assetsio.reedpopcdn.com/naruto-watch-order.jpg"
            />
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-4 col-4 mb-4">
            <CardComponent
              width="275"
              height="275"
              image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Itachi-Uchiha.jpg"
            />
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-4 col-4 mb-4">
            <CardComponent
              width="275"
              height="275"
              image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Kakashi-Hatake.jpg"
            />
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-4 col-4 mb-4">
            <CardComponent
              width="275"
              height="275"
              image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Might-Guy.jpg"
            />
          </div>
        </div>
      </div> */}

      <div className="result-content">
        <div className="row mb-2">
          <h2>Results</h2>
        </div>
        <div className="row">
          {props.animeData.map(
            (item, index) => (
              <div key={index} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
                <CardComponent  width="185" height="185" image={item.images.jpg.image_url} />
              </div>
              ))}
          {/* <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
            <CardComponent width="185" height="185" image="https://blacknerdproblems.com/wp-content/uploads/2015/08/Sakura-1.jpg" />
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
            <CardComponent width="185" height="185" image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Asuma-Sarutobi.jpg"/>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
            <CardComponent width="185" height="185" image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Iruka-Umino.jpg"/>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
            <CardComponent width="185" height="185" image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Hinata-Hyuga.jpg" />
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
            <CardComponent width="185" height="185" image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Tobirama-Senju.jpg"/>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
            <CardComponent width="185" height="185" image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/01/Best-Naruto-Characters-Zabuza-Momochi.jpg"/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ResultWrapper
