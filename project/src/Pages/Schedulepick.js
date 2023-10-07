import Navbar from "../Components/Navbar";

const Schedulepick = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full w-full">
        <div className="flex m-auto max-w-2xl bg-red-400">
          <div className="w-1/2 p-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              temporibus architecto voluptatibus nihil perferendis, quis odit
              et! Quidem, laboriosam quas sed tempora quia temporibus mollitia
              incidunt repudiandae a recusandae exercitationem asperiores
              aliquid consequuntur corrupti nobis illo impedit magnam officiis
              minus?
            </p>
          </div>
          <div>
            <div className="flex justify-between px-4 py-2 border-2 border-red-200 w-full">
                <div>Mobile</div>
                <div>
                <button className="py-1 px-2 bg-slate-400 rounded-l-lg">+</button>
                <span className="py-1 px-2 bg-slate-400 m-[1px]">1</span>
                <button  className="py-1 px-2 bg-slate-400 rounded-r-lg">-</button>
                </div>
              
            </div>
            <button className="btn">Ready to Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Schedulepick;
