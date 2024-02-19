import droneCards from "@/DroneCards";
import { features } from "@/Features";
import ContactForm from "@/components/ContactForm";
import DroneCard from "@/components/DroneCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header
        id="home"
        className="flex flex-col-reverse md:flex-row w-full h-screen items-center justify-center p-8 relative overflow-x-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/dronesImages/header-image.jpg)' }}
      >
        <div className="w-full h-2/4 md:h-full flex flex-col justify-center items-center md:items-center gap-8">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-4xl font-black text-red-800 md:text-8xl">
              FPV Diller
            </h1>
            <h2 className="text-md md:text-2xl text-red-800 sm:text-center">
              Твій постачальник FPV дронів
            </h2>
          </div>
          <Button className="w-full md:max-w-xs h-12 text-sm sm:max-w-xs sm:text-base rounded bg-red-800 text-black hover:bg-red-700 hover:text-white transition-colors mx-auto">
            Залишити заявку
          </Button>
        </div>
      </header>

      <section id="#features">
        <MaxWidthWrapper className='py-20'>
          <h4 className="mb-10 text-4xl md:text-5xl font-bold">Наші переваги</h4>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-red-800 text-white-800'>
                    {<feature.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-white-900'>
                    {feature.name}
                  </h3>
                  <p className='mt-3 text-sm text-red-800'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <Divider className="mb-16" />

      <section id="drones" className="mb-12">
        <MaxWidthWrapper>
          <h4 className="mb-10 text-4xl md:text-5xl font-bold">Дрони</h4>
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-20">
            {droneCards.map((card) => (
              <DroneCard key={card.id} card={card} />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <Divider className="mb-16" />

      <section id="contacts" className="mb-12">
        <MaxWidthWrapper>
          <h4 className="mb-10 text-4xl md:text-5xl font-bold">Контакти</h4>
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-20">
            <ContactForm />
            <div className="bg-cover bg-right bg-no-repeat h-full w-full">
              Подзвони нам, або залиш заявку і ми відповімо на всі твої питання!
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <Divider />
    </main>
  );
}
