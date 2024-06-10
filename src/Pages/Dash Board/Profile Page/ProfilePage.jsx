import { Button, Label } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ProfilePage = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user.email);
  const lastLogin = user.metadata.lastSignInTime;

  const axiosPublic = useAxiosPublic();

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    updateUserProfile(name, photoURL)
      .then((result) => {
        const userInfo = { name, photoURL, lastLogin };
        form.name.value = "";
        form.photoURL.value = "";
        console.log(result);

        axiosPublic.patch(`/user/${user.email}`, userInfo).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            console.log("user Updated");

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
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
                  Update Your Profile
                </h2>
                {/* Form */}
                <form
                  onSubmit={handleUpdateProfile}
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
                    <Label value="Email" />
                    <input
                      type="email"
                      className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6  text-sm text-[#333333]"
                      maxLength="256"
                      name="title"
                      readOnly
                      placeholder={user.email}
                    />
                  </div>

                  <div className="text-left">
                    <Label value="Profile Photo" />
                    <input
                      type="text"
                      name="photoURL"
                      className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                      placeholder="Your Photo Url"
                      required=""
                    />
                  </div>
                  <div className="text-left">
                    <Label value="Last Login time" />
                    <input
                      type="text"
                      name="time"
                      className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                      readOnly
                      placeholder={user.metadata.lastSignInTime}
                      required=""
                    />
                  </div>

                  <Button
                    type="submit"
                    className=" mt-4 flex w-full items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                  >
                    <p className="mr-6 font-bold">Update</p>
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
                <img className="w-24 h-24" src={user.photoURL} alt="" />
                <p className="font-bold">{user.displayName}</p>
                <p className="text-sm font-bold">
                  Last Login: {user.metadata.lastSignInTime}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
