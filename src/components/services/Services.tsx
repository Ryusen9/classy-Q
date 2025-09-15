import { div } from "motion/react-client";
import TargetCursor from "../Shared/TargetCursor";
import serviceBg from "/public/assets/Photos/Services-bg.jpg";
import {
  HandHelping,
  HeartHandshake,
  ShieldCheck,
  TruckElectric,
} from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days. No questions asked!",
      icon: <HandHelping size={40} />,
    },
    {
      title: "Fast Shipping",
      description:
        "Get your orders delivered in record time with our expedited shipping options. No delays!",
      icon: <TruckElectric size={40} />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We're here for you around the clock. Reach out anytime! No waiting! No hassles!",
      icon: <HeartHandshake size={40} />,
    },
    {
      title: "Quality Assurance",
      description:
        "We guarantee top-notch quality on all our products. No compromises! No exceptions! No disappointments!",
      icon: <ShieldCheck size={40} />,
    },
  ];
  return (
    <div className="mt-6">
      <div>
        <p className="font-fancy text-2xl text-center uppercase">
          Services We Offer!
        </p>
        <p className="text-center text-sm">
          We offer a variety of services to meet your needs.
        </p>
      </div>
      <div
        className="mt-2 w-full relative grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 bg-center bg-cover bg-no-repeat bg-fixed text-white rounded-lg"
        style={{ backgroundImage: `url(${serviceBg})` }}
      >
        {/* overlay */}
        <TargetCursor spinDuration={1} hideDefaultCursor={false} />
        {servicesList.map((service, index) => (
          <div
            className="cursor-target border-2 backdrop-blur-xs p-3 rounded-lg flex flex-col justify-center"
            key={index}
          >
            {service.icon && <div>{service.icon}</div>}
            <p className="text-lg">{service.title}</p>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
