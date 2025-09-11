import SplitText from "../Shared/SplitText";
import heroBg from "/public/assets/Photos/Hero-bg.jpg";
const Hero = () => {
  return (
    <div
      className="min-h-[94vh] w-full border-2 rounded-2xl bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full flex items-center justify-between px-15">
        <div className="flex flex-col items-start justify-start">
          <SplitText
            text="Welcome to Classy Q"
            className="text-4xl font-fancy text-white font-semibold text-center"
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
          <p className="text-white text-sm mt-4 max-w-md">
            Discover the epitome of elegance and style with Classy Q - Your
            ultimate destination for premium fashion and accessories.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
