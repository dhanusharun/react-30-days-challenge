import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const Home = () => {
  const [dogImage, setDogImage] = useState();

  const randomDogImage = () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    axios.get(url)
    .then((data) => {
        if(data !== undefined && data.data !== undefined){
            setDogImage(data.data.message);
        }
    })
    .catch((error) => {
        console.log(error);
    })
  }

  useEffect(() => {
    randomDogImage();
  }, [])

  return (
    <div className="main-wrapper">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Img
            src={dogImage}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </Card.Body>
        <Card.Body>
          <Card.Title>Random Dog Image</Card.Title>
          <Card.Text>using 'dog.ceo' API </Card.Text>
          <Button onClick={randomDogImage}>Next</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
