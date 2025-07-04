"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }, index) => (
        <Link
          key={index}
          href={href}
          className={cn(pathname === href && "text-primary font-semibold")}
        >
          <p className="cursor-pointer">{label}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
