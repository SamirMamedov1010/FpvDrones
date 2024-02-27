"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

import { useState } from "react";
import DroneIcon from "./DroneIcon";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <DroneIcon />
          <p className="font-bold text-inherit">FPV Diller</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#features">
            Переваги
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#drones" aria-current="page">
            Дрони
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contacts">
            Контакти
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="#features">
            Переваги
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive>
          <Link href="#drones" aria-current="page">
            Дрони
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#contacts">
            Контакти
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavMenu