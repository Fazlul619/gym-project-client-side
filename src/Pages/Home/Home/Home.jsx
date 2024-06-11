import About from "../About/About";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Newsletter from "../Newsletter/Newsletter";
import Featured from "../Featured Section/Featured";
import Testimonial from "../Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fitness Flow | Home</title>
      </Helmet>
      <Banner></Banner>
      <Featured></Featured>
      <About></About>
      <Newsletter></Newsletter>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
