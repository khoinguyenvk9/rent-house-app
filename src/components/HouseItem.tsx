import { IHouse } from "@/types/house";
import { FC } from "react";
import { Image } from "./Image";

const HouseItem: FC<{ house: IHouse }> = ({ house }) => {
  return (
    <div className={`relative rounded-xl`}>
      <Image
        src={house.image}
        className="aspect-[16/9] object-cover rounded-xl"
        width="100%"
        height="auto"
      />
      <div className="absolute top-0 bg-black z-40 text-white">
        adasdasd asasd
      </div>
    </div>
  );
};

export default HouseItem;
