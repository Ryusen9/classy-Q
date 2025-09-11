import CircularText from "../Shared/CircularText";
import SplitText from "../Shared/SplitText";
import heroBg from "/public/assets/Photos/Hero-bg.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-[94vh] relative w-full rounded-2xl bg-center bg-cover bg-no-repeat flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Left content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <SplitText
          text="Welcome to Classy Q"
          className="text-3xl sm:text-4xl lg:text-5xl font-fancy text-white font-semibold"
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
        <p className="text-white text-sm sm:text-base mt-4 max-w-md">
          Discover the epitome of elegance and style with Classy Q — your
          ultimate destination for premium fashion and accessories.
        </p>
      </div>

      {/* Right content (circular text/logo) */}
      <div className="flex items-center justify-center mt-10 md:mt-0">
        <CircularText
          text="CLASSY-Q•CLASSY-Q•CLASSY-Q•"
          onHover="slowDown"
          spinDuration={20}
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]"
        />
      </div>
    </div>
  );
};

export default Hero;
