import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full shadow-md rounded-sm cursor-pointer ">
      <img src={imgURL} alt={name} className=" w-[280px] h-[280px] pl-11  " />
      <div className=" mt-8 flex justify-start gap-1 sm:gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">
          (4.7)
        </p>
      </div>
      <h3 className=" mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className=" mb-3 mt-2 font-semibold font-montserrat text-coral-red text text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
