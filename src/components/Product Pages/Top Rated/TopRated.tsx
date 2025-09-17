import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

const TopRated = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/json/products.json").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="w-full mt-6 flex flex-col items-center justify-center gap-4">
      {/* Section Header */}
      <div>
        <p className="font-fancy text-2xl text-center uppercase">
          Top Rated Products
        </p>
        <p className="text-center text-sm">
          Discover our most popular products, as rated by our customers.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-3/4 mx-auto flex items-center justify-center mt-4">
        <Carousel className="w-full flex-1">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className={`basis-full sm:basis-1/2 lg:basis-1/3 flex items-center justify-center ${
                  product.rating < 4 ? "hidden" : "block"
                }`}
              >
                <Card className="h-80 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-sm line-clamp-1">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {product.brand}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-center justify-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-28 object-contain"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">
                      ${product.discountPrice}
                    </p>
                    <p className="text-xs line-through text-gray-400">
                      ${product.price}
                    </p>
                    <p className="text-xs text-yellow-500">
                      ⭐ {product.rating}
                    </p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TopRated;