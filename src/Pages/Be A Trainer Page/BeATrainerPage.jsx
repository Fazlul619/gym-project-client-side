import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Label } from "flowbite-react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAllClasses from "../../hooks/useAllClasses";

const BeATrainerPage = () => {
  const animatedComponents = makeAnimated();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const status = "pending";
  const [checkboxAll, setCheckboxAll] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);

  const [allClasses] = useAllClasses();

  const axiosSecure = useAxiosSecure();
  const handleTrainerSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const profileImage = form.profileImage.value;
    const experience = form.experience.value;
    const classes = form.classes.value;
    const details = form.details.value;
    const time = form.time.value;
    const socialIconImage = form.socialIconImage.value;
    const trainerInfo = {
      name,
      email,
      age,
      profileImage,
      experience,
      classes,
      details,
      time,
      selectedOptions,
      checkboxAll,
      status,
      selectedExpertise,
      socialIconImage,
    };

    form.name.value = "";
    form.age.value = "";
    form.profileImage.value = "";
    form.experience.value = "";
    form.classes.value = "";
    form.details.value = "";
    form.time.value = "";
    form.socialIconImage.value = "";
    // console.log(trainerInfo);
    axiosSecure
      .post("/trainerInfo", trainerInfo)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("user add");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Trainer request submit Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  const handleSelectChangeExpertise = (selectedExpertise) => {
    setSelectedExpertise(selectedExpertise);
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setCheckboxAll([...checkboxAll, e.target.value]);
    } else {
      setCheckboxAll(checkboxAll.filter((item) => item != e.target.value));
    }
  };

  const options = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];

  const expertise = allClasses.map((cls) => ({
    value: cls.className.toLowerCase(),
    label: cls.className,
  }));

  console.log(expertise);

  // const finalExpertise = expertiseLabels.forEach((expertise) => {
  //   expertiseLabels.push({ value: expertise, expertise });
  // });

  // console.log(finalExpertise);

  // const expertise = [
  //   { value: "Yoga", label: "Yoga" },
  //   { value: "Pilates", label: "Pilates" },
  //   { value: "Strength Training", label: "Strength Training" },
  //   { value: "HIIT", label: "HIIT" },
  //   { value: "Cardio", label: "Cardio" },
  //   { value: "Kickboxing", label: "Kickboxing" },
  //   { value: "Nutrition", label: "Nutrition" },
  //   { value: "Personal Training", label: "Personal Training" },
  //   { value: "Zumba", label: "Zumba" },
  //   { value: "Aerobics", label: "Aerobics" },
  //   { value: "Meditation", label: "Meditation" },
  //   { value: "Mindfulness", label: "Mindfulness" },
  //   { value: "Stress Relief", label: "Stress Relief" },
  // ];
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
                onSubmit={handleTrainerSubmit}
                className="mx-auto mb-4 max-w-sm pb-4"
                name="wf-form-password"
                method="get"
              >
                <div className="text-left">
                  <Label value="Your Name" />
                  <input
                    type="text"
                    name="name"
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
                    name="email"
                    readOnly
                    placeholder={email}
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Age" />
                  <input
                    type="number"
                    name="age"
                    max={100}
                    min={18}
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Age"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Experience" />
                  <input
                    type="number"
                    name="experience"
                    max={40}
                    min={0}
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Years of experience"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Photo Url" />
                  <input
                    type="text"
                    name="profileImage"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Profile Image"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Your Social Icon Url" />
                  <input
                    type="text"
                    name="socialIconImage"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Social Icon Image"
                    required=""
                  />
                </div>
                <div className="text-left">
                  <Label value="Class" />
                  <input
                    type="text"
                    name="classes"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Example:Morning Yoga"
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
                <div className="text-left">
                  <Label value="Available time in a day" />
                  <input
                    type="time"
                    name="time"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder="Available time in a day"
                    required=""
                  />
                </div>
                {/* Available Week */}
                <div className="text-left">
                  <Label value="Day" />
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}
                    onChange={handleSelectChange}
                  />
                </div>

                {/* Expertise */}
                <div className="text-left">
                  <Label value="Expertise" />
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={expertise}
                    onChange={handleSelectChangeExpertise}
                  />
                </div>

                {/* Check Box */}
                <div
                  className="flex max-w-md flex-col gap-4 mb-4"
                  id="checkbox"
                >
                  <Label className="text-left" value="Skills" />

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-1"
                      value="Anatomy and physiology knowledge"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-1" className="flex">
                      Anatomy and physiology knowledge
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-2"
                      value="Personalized workout plans"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-2">Personalized workout plans</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-3"
                      value="Communication and motivation skills"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-3">
                      Communication and motivation skills
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-4"
                      value="Strength training experience"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-4">
                      Strength training experience
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-5"
                      value="Proper exercise techniques"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-5"> Proper exercise techniques</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-6"
                      value="Client progress monitoring"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-6">Client progress monitoring</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-7"
                      value=" CPR and first aid certification"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-7">
                      CPR and first aid certification
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-8"
                      value=" Nutrition and diet understanding"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-8">
                      Nutrition and diet understanding
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="skill-9"
                      value=" Adaptability to client needs"
                      onChange={handleCheckbox}
                    />
                    <Label htmlFor="skill-9">
                      Adaptability to client needs
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className=" mt-4 flex w-full items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                >
                  <p className="mr-6 font-bold">Applied</p>
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
