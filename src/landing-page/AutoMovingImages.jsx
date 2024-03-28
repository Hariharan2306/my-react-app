import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollAmount = 2;
  const intervalDuration = 20;
  const images = [
    {
      id: 1,
      url: "https://source.unsplash.com/300x300/?perth,australia",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/300x300/?west-australia",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/300x300/?perth",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/300x300/?quokka,perth",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/300x300/?margaretriver,australia",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      id: 8,
      url: "https://source.unsplash.com/300x300/?perth,australia",
    },
    {
      id: 9,
      url: "https://source.unsplash.com/300x300/?west-australia",
    },
    {
      id: 10,
      url: "https://source.unsplash.com/300x300/?perth",
    },
    {
      id: 11,
      url: "https://source.unsplash.com/300x300/?quokka,perth",
    },
    {
      id: 12,
      url: "https://source.unsplash.com/300x300/?margaretriver,australia",
    },
    {
      Id: 13,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      id: 14,
      url: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andrei-tanase-1271619.jpg&fm=jpg",
    },
    {
      id: 15,
      url: "https://cdn.pixabay.com/photo/2020/10/12/19/10/mountaineers-5649828_640.jpg",
    },
    {
      id: 16,
      url: "https://cdn.wallpapersafari.com/66/61/6MVi9X.jpg",
    },
    {
      id: 17,
      url: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andrei-tanase-1271619.jpg&fm=jpg",
    },
  ];

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    let intervalId;

    const scrollSlider = () => {
      sliderContainer.scrollLeft += scrollAmount;
    };

    const checkEndAndResetIndex = () => {
      if (
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth
      ) {
        setCurrentIndex(0);
      }
    };

    intervalId = setInterval(() => {
      scrollSlider();
      checkEndAndResetIndex();
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [scrollAmount, intervalDuration]);

  return (
    <div className="App">
      <div className="images-container" ref={sliderRef}>
        {images.map((image, index) => {
          return (
            <img
              className="image"
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
              style={{
                marginRight: index === images.length - 1 ? "0" : "10px",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
