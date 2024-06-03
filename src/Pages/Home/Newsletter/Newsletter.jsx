import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Newsletter = () => {
  const axiosPublic = useAxiosPublic();
  const handleSubscribe = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(email, name);
    form.name.value = "";
    form.email.value = "";
    const newSubscriber = {
      name,
      email,
    };
    axiosPublic
      .post("/subscriber", newSubscriber)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Subscribe Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section>
        <div className="mx-auto w-full bg-gray-100 my-10 rounded-lg px-5 py-16 md:px-10 md:py-20">
          <div className=" p-8 text-center sm:p-10 md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Join the Fitness Flow Community
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
              Join the Fitness Flow Community and elevate your wellness journey.
              Together, we achieve more!
            </p>
            <div className="mx-auto mb-4 flex max-w-lg justify-center">
              <form
                onSubmit={handleSubscribe}
                name="email-form"
                method="get"
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <input
                  type="text"
                  name="name"
                  className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-gray-500"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  name="email"
                  className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-gray-500"
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Subscribe Now"
                  className="cursor-pointer rounded-md px-6 py-2 bg-cyan-500 font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Newsletter;
