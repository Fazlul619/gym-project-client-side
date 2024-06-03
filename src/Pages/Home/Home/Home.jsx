import About from "../About/About";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Newsletter from "../Newsletter/Newsletter";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fitness Flow | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
