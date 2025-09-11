import CircularText from "../Shared/CircularText";
import SplitText from "../Shared/SplitText";
import heroBg from "/public/assets/Photos/Hero-bg.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-[94vh] relative w-full rounded-2xl bg-center bg-cover bg-no-repeat px-6 md:px-12 lg:px-20 flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
      <div className="w-full self-stretch flex flex-col md:flex-row items-center relative">
        <div className="w-full h-full flex flex-col items-center justify-center md:items-start place-content-center">
          <SplitText
            text="Welcome to Classy Q"
            className="text-3xl sm:text-4xl lg:text-4xl text-center font-fancy text-white font-semibold"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-white text-center md:text-left text-sm sm:text-base mt-4 max-w-md">
            Discover the epitome of elegance and style with Classy Q — your
            ultimate destination for premium fashion and accessories.
          </p>
        </div>
        <div className="md:h-full flex justify-end items-end pb-5">
          <CircularText
            text="CLASSY-Q•CLASSY-Q•CLASSY-Q•"
            onHover="slowDown"
            spinDuration={20}
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
