import Image, { StaticImageData } from "next/image";
import Star from "@/public/assets/filled_star.svg";
import Star2 from "@/public/assets/empty_star.svg";
import Link from "next/link";

interface Card {
  id: number;
  src: StaticImageData;
  title: string;
  price: string;
  author: string;
  rate: number;
  reviews: number;
}
const ResourceCard = ({
  id,
  src,
  title,
  price,
  author,
  rate,
  reviews,
}: Card) => {
  return (
    <div className="w-full max-w-[397px] h-[378px] flex flex-col justify-center items-center gap-4 rounded-lg shadow-md flex-shrink-0">
      <Image
        src={src}
        alt={title}
        width={398}
        height={167}
        className="w-full object-contain"
      />
      <div className="w-full px-3 flex flex-col gap-4">
        <div>
          <h1 className="font-Inter text-lg font-medium text-NeutalBase">
            {title}
          </h1>
          <p className="font-Hanken text-sm text-Neutra40">{author}</p>
        </div>
        <h1 className="font-Inter text-2xl font-medium text-NeutalBase">
          N{price}
        </h1>
        <div className="flex font-Hanken text-xs text-NeutalBase">
          <Image src={Star} alt="rate" />
          <Image src={Star} alt="rate" />
          <Image src={Star} alt="rate" />
          <Image src={Star} alt="rate" />
          <Image src={Star2} alt="rate" />
          <span className="mx-1">{rate} | </span>
          <span> {reviews} reviews</span>
        </div>
        <div className="flex gap-4 mb-4">
          <Link href={`/resource/explore/${id}`}>
            <button className="font-Inter w-[112px] text-white rounded-lg bg-NeutalBase h-10 mb-4">
              Buy Now
            </button>
          </Link>
          <button className="font-Hanken w-[112px] text-NeutralBase rounded-lg bg-white h-10 mb-4 border border-[#121212]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
