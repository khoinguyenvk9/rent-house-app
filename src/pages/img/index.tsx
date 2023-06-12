import { Image } from "@/components/Image";

const Img = () => {
  return (
    <div className="p-3">
      <div>
        <p>images</p>
        <Image width="auto" height="300px" src="/images/house/1.jpeg" />
        <p>images</p>
        <Image width="auto" height="300px" src="/images/house/2.jpeg" />
      </div>
    </div>
  );
};

export default Img;
