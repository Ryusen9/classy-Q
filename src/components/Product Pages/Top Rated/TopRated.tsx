import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
interface Product {
  name: string;
  brand: string;
  images: string[];
  price: number;
  discountPrice?: number;
  rating: number;
  availability: string;
  id: number;
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
                <div className="border-2 relative rounded-xl p-3 w-full h-full">
                  <div className="flex flex-col items-center gap-4">
                    {/* Main Image */}
                    <img
                      src={activeImages[index] || product.images[0]}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-md"
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
                      <span className="text-xs border-1 p-2 rounded-md flex items-center gap-3">
                        <div
                          className={`h-2 w-2 animate-ping rounded-full ${
                            product.availability == "In Stock"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        {product.availability == "In Stock" ? (
                          <span>In Stock</span>
                        ) : (
                          <span>Out of Stock</span>
                        )}
                      </span>
                      <div className="flex flex-col">
                        <p className="font-primary tracking-wide text-lg">
                          {product.name}
                        </p>
                        <p className="text-sm font-primary tracking-wider">
                          {product.brand}
                        </p>
                      </div>
                      <div>
                        <p>
                          Price:{" "}
                          <span className="line-through">{product.price}</span>{" "}
                          <span className="text-xs">BDT</span>
                          <span> / </span>
                          <span className="text-lg">
                            {product.discountPrice}
                          </span>{" "}
                          <span className="text-xs">BDT</span>
                          <span>🔥</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-[85%] mx-auto">
                        <button className="bg-green-500 cursor-pointer text-white py-1 px-3 rounded-md">
                          Buy Now
                        </button>
                        <Link
                          to={`/product/${product.id}`}
                          className="bg-blue-500 text-white py-1 px-3 rounded-md"
                        >
                          Details
                        </Link>
                        <button className="bg-gray-500 cursor-pointer text-white py-1 px-3 rounded-md">
                          Add to Cart
                        </button>
                      </div>
                      <button className="absolute top-5 right-5 p-2 rounded-full backdrop-blur border hover:bg-red-500 hover:text-white transition duration-300">
                        <Heart />
                      </button>
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
