import HeroImage from "../assets/images/hero-img.webp"

const HeroImageComp = () => {
  return (
    <>
      <img
        src={HeroImage}
        alt="A trading chart"
        className="object-cover w-full h-full absolute top-0 left-0 -z-10"
      />
    </>
  );
};
export default HeroImageComp;
