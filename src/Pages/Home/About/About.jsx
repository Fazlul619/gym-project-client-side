import img from "../../../assets/banner/about us.jpg";
const About = () => {
  return (
    <div className="max-w-7xl rounded-lg my-10 border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img className="rounded-l-lg h-full" src={img} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white p-4">
            About Us
          </h1>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-4">
            From the moment you walk through the door you know Gymbase is a
            unique place
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
            When we created Gym Base, we knew we wanted to be more than just a
            simple gym. Having worked in traditional gyms in the past, we knew
            we needed to create a concept that would provide our members with
            the most effective tools for success. This meant we needed to offer
            a wide range of classes both for children and adults. <br />
            <br />
            This also meant we needed to provide a learning environment run by
            experienced and successful coaches. However, our most important goal
            was to create a welcoming atmosphere and community in which everyone
            feels a sense of belonging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
