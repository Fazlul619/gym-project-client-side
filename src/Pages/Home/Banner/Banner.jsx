import img1 from "../../../assets/banner/banner-1.jpg";
import img2 from "../../../assets/banner/banner-2.jpg";
import img3 from "../../../assets/banner/banner-3.jpg";
import img4 from "../../../assets/banner/banner-4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
const Banner = () => {
  return (
    <div className=" h-56 sm:h-[520px] xl:h-[520px] 2xl:h-[520px] relative mb-10">
      <Carousel>
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <img src={img1} alt="..." />
      </Carousel>

      <div className="hidden sm:block  text-white p-12 space-y-7 absolute top-5 left-28 lg:w-1/2">
        <h2 className="text-6xl font-bold  ">
          Transform your fitness journey: Track, Improve, Conquer!
        </h2>
        <p>
          Achieve your fitness goals with precision and ease. Track your
          progress, every step of the way!
        </p>
        <div>
          <Button gradientDuoTone="cyanToBlue">Feature</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
