import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className=" max-container flex justify-between items-center  w-full flex-col gap-10">
      <h3 className=" text-4xl  leading-[68px]  font-palanquin w-[] font-bold px-4  ">
        Sign Up from <span className="  text-coral-red">Updates</span>&
        Newsletter
      </h3>
      <div className="  lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className=" px-4 mx-4 py-3 border rounded-3xl text-xl outline-none"
        />
        <div className=" flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
