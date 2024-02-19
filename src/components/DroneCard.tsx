import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ImageSlider from "./ImageSlider";
import { IDroneCard } from "@/DroneCards";

interface DroneCardProps {
  card: IDroneCard
}

const DroneCard: React.FC<DroneCardProps> = ({ card }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny text-red-800 uppercase font-bold">{card.title}</p>
        <small className="text-default-500">{card.oneliner}</small>
        <h4 className="font-bold text-large text-red-800">{card.price}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ImageSlider urls={card.images} />
      </CardBody>
    </Card>
  );
};

export default DroneCard