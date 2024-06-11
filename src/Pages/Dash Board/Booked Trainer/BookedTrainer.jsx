import { Button, Label } from "flowbite-react";
import usePaymentInfo from "../../../hooks/usePaymentInfo";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const BookedTrainer = () => {
  const [allPaymentInfo] = usePaymentInfo();
  const axiosPublic = useAxiosPublic();

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const trainerInfo = form.trainerInfo.value;
    const classInfo = form.classInfo.value;
    const slotInfo = form.slotInfo.value;
    const details = form.details.value;
    const rating = form.rating.value;

    const reviewPost = {
      trainerInfo,
      classInfo,
      slotInfo,
      details,
      rating,
    };

    form.trainerInfo.value = "";
    form.classInfo.value = "";
    form.slotInfo.value = "";
    form.details.value = "";
    form.rating.value = "";

    console.log(reviewPost);
    axiosPublic
      .post("/review", reviewPost)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("user add");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Post submit Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  console.log(allPaymentInfo);
  return (
    <div className="my-10">
      {/* Section SING IN */}
      <section>
        {/* Container */}
        <div className="grid md:grid-cols-2">
          {/* Component */}
          <div className="flex flex-col items-center justify-center bg-white">
            {/* Wrapper */}
            <div className="max-w-lg px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
              {/* Title */}
              <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
                Add Your Post
              </h2>
              {/* Form */}
              <form
                onSubmit={handleReviewSubmit}
                className="mx-auto mb-4 max-w-sm pb-4"
                name="wf-form-password"
                method="get"
              >
                <div className="text-left">
                  <Label value="Trainer Info" />
                  <input
                    type="text"
                    name="trainerInfo"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Trainer Info"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Class Info" />
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6  text-sm text-[#333333]"
                    maxLength="256"
                    name="classInfo"
                    placeholder="Your Post Title"
                  />
                </div>

                <div className="text-left">
                  <Label value="Slot Info" />
                  <input
                    type="text"
                    name="slotInfo"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Your Details"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Rating" />
                  <input
                    type="number"
                    min={1}
                    max={5}
                    name="rating"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Rating"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Details" />
                  <input
                    type="text"
                    name="details"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Your Details"
                    required=""
                  />
                </div>

                <Button
                  type="submit"
                  className=" mt-4 flex w-full items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                >
                  <p className="mr-6 font-bold">Add Post</p>
                  <svg
                    className="h-4 w-4 flex-none"
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </Button>
              </form>
            </div>
          </div>
          {/* Component */}
          <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
            {/* Wrapper */}
            <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <div className="mb-6 ml-2 flex h-14 w-14 items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px]">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              <p className="mb-8 text-[#647084] md:mb-12 lg:mb-16">
                Staying committed to your fitness goals is not always easy, but
                with the right community and support, anything is possible.
                Whether you are lifting weights, running, or practicing yoga,
                share your journey, motivate others, and get inspired right
                here. Let us push each other to be the best versions of
                ourselves!
              </p>
              <p className="font-bold">Fazlul Alam</p>
              <p className="text-sm">Senior Trainer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookedTrainer;
