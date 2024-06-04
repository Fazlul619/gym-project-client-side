import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Checkbox, Label } from "flowbite-react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const BeATrainerPage = () => {
  const animatedComponents = makeAnimated();
  const { user } = useContext(AuthContext);

  const options = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];
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
                Want To Be A Trainer!
              </h2>
              {/* Form */}
              <form
                className="mx-auto mb-4 max-w-sm pb-4"
                name="wf-form-password"
                method="get"
              >
                <div className="text-left">
                  <Label value="Your Name" />
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Email" />
                  <input
                    type="email"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6  text-sm text-[#333333]"
                    maxLength="256"
                    name="name"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Age" />
                  <input
                    type="number"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Age"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Experience" />
                  <input
                    type="number"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Years of experience"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Photo Url" />
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Profile Image"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Expertise" />
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Example: Yoga"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Details" />
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Your Details"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Available time in a day" />
                  <input
                    type="time"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Available time in a day"
                    required=""
                  />
                </div>
                {/* Available Week */}
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                />
                {/* Check Box */}
                <div
                  className="flex max-w-md flex-col gap-4 mb-4"
                  id="checkbox"
                >
                  <Label className="text-left" value="Skills" />

                  <div className="flex items-center gap-2">
                    <Checkbox id="accept" defaultChecked />
                    <Label htmlFor="accept" className="flex">
                      Anatomy and physiology knowledge.
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="promotion" />
                    <Label htmlFor="promotion">
                      Personalized workout plans
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="age" />
                    <Label htmlFor="age">
                      Communication and motivation skills
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="age" />
                    <Label htmlFor="age">Strength training experience</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="age" />
                    <Label htmlFor="age"> Proper exercise techniques</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="age" />
                    <Label htmlFor="age">Client progress monitoring</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="age" />
                    <Label htmlFor="age">CPR and first aid certification</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="age" />
                    <Label htmlFor="age">
                      Nutrition and diet understanding
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="age" />
                    <Label htmlFor="age"> Adaptability to client needs.</Label>
                  </div>
                </div>

                <Button className=" mt-4 flex w-full items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                  <p className="mr-6 font-bold">Join Flowspark</p>
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
                Train like a beast, look like a beauty. Embrace the burn and
                watch yourself transform. Your only limit is you. Push yourself
                beyond what you think is possible. Let the gains speak for
                themselves.
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

export default BeATrainerPage;
