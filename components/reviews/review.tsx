import Image1 from "../../public/assets/images/mentee-review-screen/Image (1).png";
import Image from "next/image";

export const ItemComponent = ({ item }: any) => {
  return (
    <div
      key={item.id}
      className="flex p-4 md:p-6 flex-col justify-center items-start w-[550px] h-[353px]  gap-8 self-stretch rounded-[8px] border border-Neutra20 bg-white"
    >
      <div className="flex flex-col w-[520px] h-[151px] items-start gap-y-4">
        <p className="text-Neutra40 font-Inter text-[14px] font-medium leading-[145%]">
          {item.date}
        </p>
        <p className="text-Neutra40 font-Hanken text-16 font-normal leading-[120%]">
          {item.comment}
        </p>
      </div>
      <div className="flex flex-wrap items-start gap-y-[16px] gap-x-[24px]">
        <button className="flex w-[210px] h-[40px] font-bold p-[3.625px] justify-center items-center gap-3 flex-shrink-0 rounded-[8px] border border-Neutra20">
          {item.quality1}
        </button>
        <button className="flex w-[210px] h-[40px] font-bold p-[3.625px] justify-center items-center gap-3 flex-shrink-0 rounded-[8px] border border-Neutra20">
          {item.quality2}
        </button>
        <button className="flex w-[210px] h-[40px] font-bold p-[3.625px] justify-center items-center gap-3 flex-shrink-0 rounded-[8px] border border-Neutra20">
          {item.quality3}
        </button>
      </div>
      <div className="flex w-[450px] h-[42px] items-start gap-x-[233px]">
        <div className="flex flex-row justify-center w-[171px] h-[42px] items-center gap-x-[8px]">
          <Image src={Image1} width={300} height={200} alt="avatar" />
          <div className="flex flex-col items-center">
            <p className="text-Neutral60 w-[123px] h-[20px] font-Inter text-[14px] font-semibold leading-[145%]">
              {item.name}
            </p>
            <p className="text-Accent1 w-[123px] h-[20px] font-Hanken text-[14px] font-normal leading-[145%]">
              {item.track}
            </p>
          </div>
        </div>
        <p className="w-[54px] h-[20px] text-Neutral60 justify-center font-Inter text-[14px] font-semibold leading-[145%]">
          {item.role}
        </p>
      </div>
    </div>
  );
};
