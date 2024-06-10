const Featured = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white p-4">
          Featured section
        </h1>

        <div className="products-container ">
          <div className="product-items grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 ">
            {/* product-item-start */}
            <div className="item flex flex-col m-auto  justify-items-center text-center border border-spacing-3  relative">
              <div className="item-image h-full w-1/2 flex flex-col m-auto justify-items-center pt-5 pb-5">
                <img
                  className="h-56 w-full rounded "
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/222/655/small_2x/bodybuilding-logo-free-vector.jpg"
                  alt=""
                />
              </div>
              <div className="item-text  pb-10">
                <h1 className="text-3xl font-bold text-black">
                  Online Class Booking
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Allow members to easily book classes online through an
                  intuitive calendar interface. Members can view available
                  classes, choose their preferred time slots, and receive email
                  confirmations of their bookings.
                </p>
              </div>
            </div>
            {/* products-item-end */}
            {/* product-item-start */}
            <div className="item flex flex-col m-auto  justify-items-center text-center border border-spacing-3 relative">
              <div className="item-image h-full w-1/2 flex flex-col m-auto justify-items-center pt-5 pb-5">
                <img
                  className="h-56 w-full rounded "
                  src="https://i.pinimg.com/474x/0b/67/f9/0b67f9427129ae7888be659bcf1ce520.jpg"
                  alt=""
                />
              </div>
              <div className="item-text  pb-10">
                <h1 className="text-3xl font-bold text-black">
                  Virtual Training Sessions
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Offer virtual training sessions that members can join from the
                  comfort of their homes. These sessions can be live-streamed or
                  pre-recorded, allowing flexibility for members to train at
                  their convenience.
                </p>
              </div>
            </div>
            {/* products-item-end */}
            {/* product-item-start */}
            <div className="item flex flex-col m-auto  justify-items-center text-center border border-spacing-3 relative">
              <div className="item-image h-full w-1/2 flex flex-col m-auto justify-items-center pt-5 pb-5">
                <img
                  className="h-56 w-full rounded "
                  src="https://i.pinimg.com/736x/d5/f3/c9/d5f3c96df5ede2e0f3c9037a717fdc89.jpg"
                  alt=""
                />
              </div>
              <div className="item-text  pb-10">
                <h1 className="text-3xl font-bold text-black">
                  Personalized Workout Plans
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Provide personalized workout plans based on individual fitness
                  goals and levels. Users can input their goals, and the system
                  will generate tailored workout routines, including video
                  demonstrations and progress tracking.
                </p>
              </div>
            </div>
            {/* products-item-end */}
            {/* product-item-start */}
            <div className="item flex flex-col m-auto  justify-items-center text-center border border-spacing-3 relative">
              <div className="item-image h-full w-1/2 flex flex-col m-auto justify-items-center pt-5 pb-5">
                <img
                  className="h-56 w-full rounded "
                  src="https://i.pinimg.com/736x/b8/a7/59/b8a75968b12a0635aa070d216f98ac37.jpg"
                  alt=""
                />
              </div>
              <div className="item-text  pb-10">
                <h1 className="text-3xl font-bold text-black">
                  Nutrition Guidance
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Include a section dedicated to nutrition guidance where
                  members can access meal plans, healthy recipes, and tips from
                  professional nutritionists. This feature supports members in
                  achieving their fitness goals holistically.Nutrition
                </p>
              </div>
            </div>
            {/* products-item-end */}
            {/* product-item-start */}
            <div className="item flex flex-col m-auto  justify-items-center text-center border border-spacing-3 relative">
              <div className="item-image h-full w-1/2 flex flex-col m-auto justify-items-center pt-5 pb-5">
                <img
                  className="h-56 w-full rounded "
                  src="https://t4.ftcdn.net/jpg/05/91/49/85/360_F_591498506_Pzjy36GHuST0M6ONZq0MHV10KxZXlaUV.jpg"
                  alt=""
                />
              </div>
              <div className="item-text  pb-10">
                <h1 className="text-3xl font-bold text-black">
                  Membership Management
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Simplify membership management with an online portal where
                  members can sign up, renew, or upgrade their memberships.
                  Members can also update their personal information, view
                  billing history, and manage their subscriptions.
                </p>
              </div>
              {/* see-more-option-start */}
            </div>
            {/* products-item-end */}
            {/* product-item-start */}
            <div className="item flex flex-col m-auto  justify-items-center text-center border border-spacing-3 relative">
              <div className="item-image h-full w-1/2 flex flex-col m-auto justify-items-center pt-5 pb-5">
                <img
                  className="h-56 w-full rounded "
                  src="https://st2.depositphotos.com/3834629/5956/v/950/depositphotos_59569025-stock-illustration-body-builder.jpg"
                  alt=""
                />
              </div>
              <div className="item-text  pb-10">
                <h1 className="text-3xl font-bold text-black">
                  Community Forum
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Foster a sense of community with a forum where members can
                  share experiences, ask questions, and offer support. This
                  feature encourages engagement and helps members stay motivated
                  by connecting with others who have similar fitness goals.
                </p>
              </div>
            </div>
            {/* products-item-end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
