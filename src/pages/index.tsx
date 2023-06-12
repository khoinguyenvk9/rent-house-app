import Image from "next/image";
import { Roboto } from "next/font/google";
import { houseData } from "@/data/houses";
import HouseItem from "@/components/HouseItem";
import { IHouse } from "@/types/house";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <div className={`wrapper-body ${roboto.className}`}>
      <div className="top-content p-3 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">Explore Property</h3>
          <Image
            className="w-10 h-10 rounded-full object-cover"
            src="/images/avatar.jpeg"
            width={64}
            height={64}
            alt="avatar"
          />
        </div>
      </div>
      <div className="main-content p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {houseData.map((house: IHouse, index) => (
            <HouseItem key={index} house={house} />
          ))}
        </div>
      </div>
    </div>
  );
}

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxm32kMNxCRdwAt01G-BYmvnu2wQbs4GPjjA&usqp=CAU
