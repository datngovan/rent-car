import { StarIcon } from "@heroicons/react/24/solid"
import Button from "./Button"
function Card({data}) {
  const {name,image, review:{star, count}, capacity, type, airCondition, numOfDoors, price} = data;
    return (
        <div className="flex flex-col items-between border-transparent rounded-2xl shadow-2xl">
          <div className="p-6 mt-2 h-[150px]">
            <img src={image}/>
          </div>
          <div className="p-6">
            <p className="text-base font-medium text-secondary-color-100 pb-2">{name}</p>
            <p className="flex items-center text-xs font-thin">
              <StarIcon className="size-4 text-[#ffe234]" />{star} ({count} reviews)
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 px-6 text-text-secondary-100 gap-1">
              <p className="col-span-2 flex items-center gap-1"><img src="./user.png" className="size-4"/> {capacity} Passengers</p>
              <p className="flex items-center gap-1"><img src="./type.png" className="size-4"/> Auto</p>
              <p className="col-span-2 flex items-center gap-1"><img src="./air-condition.png" className="size-4"/> {airCondition && "Air Conditioning"}</p>
              <p className="flex items-center gap-1"><img src="./door.png" className="size-4"/> {numOfDoors} Doors</p>
          </div>
          <div className="grid grid-rows-2 m-3 pt-7 border-t-2 border-[#E0E0E0]">
            <div className="flex justify-between">
              <p className="text-sm text-text-secondary-100">Price</p>
              <div className="font-semibold flex">${price}<p className="font-normal text-sm text-text-secondary-100"> /day </p></div>
            </div>
            <Button primary={true} content="RENT NOW"/>
          </div>
        </div>
    )
}

export default Card
