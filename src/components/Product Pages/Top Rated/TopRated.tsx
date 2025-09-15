import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TopRated = () => {
  return (
    <div className="w-full mt-6 flex flex-col items-center justify-center gap-4">
      <div>
        <p className="font-fancy text-2xl text-center uppercase">
          Top Rated Products
        </p>
        <p className="text-center text-sm">
          Discover our most popular products, as rated by our customers.
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <Carousel>
          <CarouselContent></CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
export default TopRated;
