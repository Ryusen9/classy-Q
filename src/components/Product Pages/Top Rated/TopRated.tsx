import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  name: string;
  brand: string;
  images: string[];
  price: number;
  discountPrice?: number;
  rating: number;
}

const TopRated = () => {
  // keep active images per card
  const [activeImages, setActiveImages] = useState<Record<number, string>>({});
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>("/json/products.json").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleImageClick = (index: number, img: string) => {
    setActiveImages((prev) => ({
      ...prev,
      [index]: img,
    }));
  };

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
                {/* Product Card */}
                <div className="border-2 rounded-xl p-3 w-full h-full">
                  <div className="flex flex-col items-center gap-4">
                    {/* Main Image */}
                    <img
                      src={activeImages[index] || product.images[0]}
                      alt={product.name}
                      className="w-full border-2 h-64 object-cover rounded-md"
                    />

                    {/* Thumbnails */}
                    <div className="flex items-center justify-center gap-3">
                      {product.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          onClick={() => handleImageClick(index, img)}
                          alt={`${product.name} thumbnail`}
                          className={`w-12 h-12 object-cover cursor-pointer rounded-md border ${
                            activeImages[index] === img
                              ? "border-blue-500"
                              : "border-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                      <span className="font-primary justify-start text-xs tracking-wider border-2 p-1 rounded-lg backdrop-blur-lg dark:bg-white/10 bg-black/10">
                        BEST SELLER 🔥
                      </span>
                    </div>
                  </div>
                </div>
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
