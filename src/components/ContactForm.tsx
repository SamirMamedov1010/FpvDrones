"use client"

import droneCards from "@/DroneCards"
import { Card, CardHeader, Divider, CardBody, CardFooter, Select, SelectItem, Input, Button } from "@nextui-org/react"
import DroneIcon from "./DroneIcon"

const ContactForm = () => {
  return (
    <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
      <DroneIcon />
      <div className="flex flex-col">
        <p className="text-md">FPV Diller</p>
        <p className="text-small text-default-500">fpvdiller.ua</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
      <p>Залиш заявку і наш менеджер звяжеться з тобою найближчим часом!</p>
    </CardBody>
    <Divider className="mb-2" />
    <CardFooter className="flex flex-col items-center mb-2">
    <Select
      label="Наші дрони"
      placeholder="Обери дрони"
      selectionMode="multiple"
      className="max-w-xs mb-4"
    >
      {droneCards.map((drone) => (
        <SelectItem key={drone.id} value={drone.title}>
          {drone.title}
        </SelectItem>
      ))}
    </Select>

    <Input
      isRequired
      type="tel"
      label="Номер телефону"
      className="max-w-xs mb-4"
    />

    <Button className="w-full rounded bg-red-800 text-black hover:bg-red-800 hover:text-white transition-colors mx-auto">
      Залишити заявку
    </Button>
    </CardFooter>
  </Card>
  )
}

export default ContactForm