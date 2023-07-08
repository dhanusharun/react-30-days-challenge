import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

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
          {props.animeData.map((item, index) => (
            <div
              key={index}
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 mb-3"
            >
              {props.pageName === "result" ? (
                <Card sx={{ height: 185, width: 185 }}>
                  <CardCover>
                    <img
                      src={item.images.jpg.image_url}
                      srcSet={item.images.jpg.image_url}
                      loading="lazy"
                      alt=""
                    />
                  </CardCover>
                  <CardCover
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    }}
                  />
                 
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                    <Link to={`/character/${item.mal_id}`}>
                      <Typography level="h4" fontSize="md" textColor="#fff">
                        {item.title}
                      </Typography>
                      <Typography level="span" textColor="neutral.300">
                        {item.year !== null && item.type !== null && (
                          <>
                            {item.year} . {item.type}
                          </>
                        )}
                      </Typography>
                      </Link>
                    </CardContent>
                  
                </Card>
              ) : (
                // <CardComponent
                //   id={item.character.mal_id}
                //   width="185"
                //   height="185"
                //   image={item.character.images.jpg.image_url}
                // />
                <Card sx={{ height: 185, width: 185 }}>
                  <CardCover>
                    <img
                      src={item.character.images.jpg.image_url}
                      srcSet={item.character.images.jpg.image_url}
                      loading="lazy"
                      alt=""
                    />
                  </CardCover>
                  <CardCover
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    }}
                  />
                  <CardContent sx={{ justifyContent: "flex-end" }}>
                    <Typography level="h4" fontSize="md" textColor="#fff">
                      {item.character.name}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultWrapper;
