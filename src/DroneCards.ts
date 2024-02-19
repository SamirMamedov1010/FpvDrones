export interface IDroneCard {
  id: number;
  title: string;
  price: string;
  oneliner: string;
  description: string;
  images: string[];
}

const droneCards: IDroneCard[] = [
  {
    id: 1,
    title: "FPV Pro",
    price: "20000 uah",
    oneliner: "Some key info about drone",
    description: "Drone description",
    images: ['/dronesImages/fpv-pro1.jpeg', '/dronesImages/fpv-pro2.jpeg', '/dronesImages/fpv-pro3.jpeg'],
  },
  {
    id: 2,
    title: "FPV Light",
    price: "14000 uah",
    oneliner: "Some key info about drone",
    description: "Drone description",
    images: ['/dronesImages/fpv-light1.jpeg', '/dronesImages/fpv-light2.jpeg', '/dronesImages/fpv-light3.jpeg'],
  },
]

export default droneCards