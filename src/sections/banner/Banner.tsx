import ImageBanner from "./ImageBanner";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full pb-4">
      <div className="h-full w-full relative">
        <ImageBanner />
      </div>
    </div>
  );
};

export default Banner;
