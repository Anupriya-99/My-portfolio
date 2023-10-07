const Pickup = () => {
  return (
      <div>
        <div className="md:flex container mx-auto mt-5 p-5 md:max-w-screen-md">
          {/* <div className="grid grid-cols-2 gap-8"> */}
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-2xl font-bold mb-5 text-center  md:text-start">Schedule a Pickup</h2>
            <p className="text-base mb-5 text-center  md:text-start">
              We're here to help you to dispose your e-waste correctly. Schedule
              a pick-up slot convenient for you.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <button className="py-2 px-4 bg-green-500 text-black hover:bg-green-700">
              Schedule a Pickup
            </button>
          </div>
        </div>
      </div>
  );
};
export default Pickup;
