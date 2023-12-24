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
    <div className="flex justify-center py-4">
      <ul className="flex gap-8 py-5 bg-white/50 drop-shadow-lg px-4 rounded-2xl">
        {Navlink.map((link, i) => {
          return (
            <li key={i}>
              <Link
                href={link.link}
                className={
                  pathname === `${link.link}`
                    ? "text-blue-500 font-extrabold"
                    : "font-medium"
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
