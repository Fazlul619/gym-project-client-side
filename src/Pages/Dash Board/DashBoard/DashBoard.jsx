import { Link, Outlet } from "react-router-dom";
import {
  OnlyForAdmin,
  OnlyForAdminAndTrainer,
  OnlyForMember,
  OnlyForTrainer,
} from "./HideLinks";

const DashBoard = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex justify-between mb-12">
          <div className="flex gap-3 items-center">
            <img
              className="w-8"
              src="https://i.ibb.co/M63Ls0L/dashboard.png"
              alt="dashboard icon"
            />

            <h1 className="font-bold text-3xl font-serif">Dashboard</h1>
          </div>

          <div>
            <p className="text-3xl font-bold underline underline-offset-4 decoration-cyan-400 font-serif">
              Welcome To Dashboard
            </p>
          </div>
        </div>

        <OnlyForAdmin>
          <div className="flex">
            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/tHk0f5Q/subscriber.png"
                alt="subscribers icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="allNewsletterSubscribers"
              >
                All Newsletter Subscribers
              </Link>
            </div>

            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />

            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/HHHnz6D/class.png"
                alt="trainers icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="allTrainers"
              >
                All Trainers
              </Link>
            </div>

            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />

            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/nfZt3B9/application.png"
                alt="applied trainer icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="appliedTrainer"
              >
                Applied Trainers
              </Link>
            </div>

            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />

            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/9t5F8pW/balance-sheet.png"
                alt="balance icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="balance"
              >
                Balance
              </Link>
            </div>

            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />

            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/YkmNzjX/file.png"
                alt="balance icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="addNewClass"
              >
                Add new Class
              </Link>
            </div>
          </div>
        </OnlyForAdmin>

        <OnlyForAdminAndTrainer>
          <div className="flex gap-3 items-center">
            <img
              className="w-12"
              src="https://i.ibb.co/YkmNzjX/file.png"
              alt="balance icon"
            />

            <Link
              className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
              to="addNewForum"
            >
              Add new Forum
            </Link>
          </div>
        </OnlyForAdminAndTrainer>
      </div>

      {/*Options for Trainer */}
      <OnlyForTrainer>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex">
            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/tHk0f5Q/subscriber.png"
                alt="subscribers icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="manageSlots"
              >
                Manage Slots
              </Link>
            </div>
            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />
            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/HHHnz6D/class.png"
                alt="trainers icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="addNewSlot"
              >
                Add New slot
              </Link>
            </div>

            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />

            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/YkmNzjX/file.png"
                alt="balance icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="addNewForum"
              >
                Add new Forum
              </Link>
            </div>
          </div>
        </div>
      </OnlyForTrainer>

      {/* Options for Members */}
      <OnlyForMember>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex">
            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/tHk0f5Q/subscriber.png"
                alt="subscribers icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="activityLogPage"
              >
                Activity Log page
              </Link>
            </div>

            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />

            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/HHHnz6D/class.png"
                alt="trainers icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="profilePage"
              >
                Profile Page
              </Link>
            </div>

            <img
              className="w-12"
              src="https://i.ibb.co/dkXjcJs/pipe.png"
              alt="pipe icon"
            />

            <div className="flex gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/nfZt3B9/application.png"
                alt="applied trainer icon"
              />

              <Link
                className="text-xl bg-orange-200 hover:bg-orange-200/80 duration-100 px-4 py-2 font-semibold rounded-sm text-center"
                to="bookedTrainer"
              >
                Booked Trainer
              </Link>
            </div>
          </div>
        </div>
      </OnlyForMember>

      <Outlet />

      {/* <div className="flex items-center justify-center">
        <img
          className="w-[60vh]"
          src="https://i.ibb.co/bBhCrT3/Welcome-cuate.png"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default DashBoard;
