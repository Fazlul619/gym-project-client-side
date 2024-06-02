import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="flex max-w-md flex-col gap-4 mb-10 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photo" value="Photo" />
          </div>
          <TextInput
            id="photo"
            type="text"
            name="photo"
            placeholder="Photo Url"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            name="password"
            type="password"
            required
            shadow
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="agree" className="flex">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Login
            </Link>
          </Label>
        </div>
        <Button outline type="submit" className="font-bold">
          Register
        </Button>
        <div className="flex items-center justify-center">
          <p className="w-full">
            <Button outline className="w-full">
              <FcGoogle className="text-2xl" />
            </Button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
