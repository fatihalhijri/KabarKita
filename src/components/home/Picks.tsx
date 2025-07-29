import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PicksComponent from "./PicksComponent";

const Picks = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className="w-full h-full py-5 px-6 md:px-12 lg:px-16 xl:px-36">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          autoPlay={true} // Menambahkan autoPlay
          autoPlaySpeed={2000} // Mengatur kecepatan menjadi 2 detik (2000 ms)
          centerMode={false}
          infinite
          itemClass="item"
          swipeable={false}
          draggable={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          
          <PicksComponent
            img="/sabun-batang.jpg"
            user="Serological surveys are being conducted to test for coronavirus"
            role="Serological surveys are being conducted to test for coronavirus"
          />
          <PicksComponent
            img="/mask-group-1.jpg"
            user="test test antibodies. How useful are they?"
            role="test test antibodies. How useful are they?"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Picks;
