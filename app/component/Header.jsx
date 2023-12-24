"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const Navlink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/about/contact",
    },
    {
      name: "List Catatan",
      link: "/transaction",
    },
    {
      name: "Kelola Catatan",
      link: "/admin-crud",
    },
  ];
  return (
    <div>
      <ul className="flex gap-5 py-10">
        {Navlink.map((link, i) => {
          return (
            <li key={i}>
              <Link
                href={link.link}
                className={
                  pathname === `${link.link}` ? "text-blue-500 font-bold" : ""
                }
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
