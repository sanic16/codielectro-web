import Image from "next/image";
import bannerImg1 from "@/../public/images/banner/bannerImg2.jpg";

const ImageBanner = () => {
  return (
    <div className="h-full w-full">
      <Image
        src={bannerImg1}
        alt="banner"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default ImageBanner;
