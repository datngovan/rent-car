import Title from "../ui/Title";
import { StarIcon,UserIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";
import Card from "../ui/Card";
function Retails() {
  const carData = [
    {
      name: "Jaguar XE L P250",
      review: {
        star: "4.8",
        count: "2436",
      },
      capacity: 4,
      type: "Auto",
      airCondition: true,
      numOfDoors: 4,
      price: 1800,
    },
    {
      name: "Audi R8",
      review: {
        star: "4.6",
        count: "1936",
      },
      capacity: 4,
      type: "Auto",
      airCondition: true,
      numOfDoors: 4,
      price: 2100,
    },
    {
      name: "BMW M3",
      review: {
        star: "4.5",
        count: "2036",
      },
      capacity: 4,
      type: "Auto",
      airCondition: true,
      numOfDoors: 4,
      price: 1800,
    },
    {
      name: "Lamborghini Huracan",
      review: {
        star: "4.3",
        count: "2236",
      },
      capacity: 4,
      type: "Auto",
      airCondition: true,
      numOfDoors: 2,
      price: 2300,
    },
  ];
  return (
    <div className="flex flex-col gap-20 pt-20">
      <div className="flex flex-col items-center">
        <Title content="POPULAR RETAIL DEALS" />
        <p className="text-3xl font-medium pt-6">
          Most popular cars rental deals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 px-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Retails;
