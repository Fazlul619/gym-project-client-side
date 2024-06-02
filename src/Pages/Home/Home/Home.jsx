import About from "../About/About";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fitness Flow | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
