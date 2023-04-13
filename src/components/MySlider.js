// import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import img from "../assets/better-home-insurance.jpeg";
import "../styles/MySlider.css";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const MultiImageCarousel = () => {

//   return (
//     <div className="image-slider">
//       <Carousel
//         showArrows={true}
//         showThumbs={false}
//         centerMode={true}
//         centerSlidePercentage={20} // Set the percentage for the number of visible slides
//       >
//         {numbers.map((num) => (
//           <div className="carousel-image-container" key={num}>
//             <img src={img} alt="" />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default MultiImageCarousel;

export default function MySlider() {
  const settings = {
    dots: false, // Show dots navigation
    infinite: true, // Loop through the slides infinitely
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [numbers, setNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ]);

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {/* Add your slides here */}

        {numbers.map((num) => (
          <div className="carousel-image-container" key={num}>
            <img src={img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
