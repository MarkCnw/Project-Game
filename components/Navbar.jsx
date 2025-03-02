"use client";
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 bg-gray-900 text-white border-b border-gray-700 shadow-lg">
      {/* Logo */}
      <Image
        className="cursor-pointer w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-lg font-medium">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/all-products" className="hover:text-blue-400 transition">Shop</Link>
        <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Icons */}
      <div className="hidden md:flex items-center gap-4">
        {
          user
            ? <>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={()=> router.push('/')} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="Products" labelIcon={<BoxIcon/>} onClick={()=> router.push('/all-products')} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
                </UserButton.MenuItems>
              </UserButton>
            </>
            : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-blue-400 transition">
                <Image src={assets.user_icon} alt="user icon" />
                Account
              </button>
        }
      </div>
      
      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="bg-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-500 transition"
          >
            Seller
          </button>
        )}
        
        <Menu className="w-8 h-8 cursor-pointer hover:text-blue-400 transition" />
      </div>
    </nav>
  );
};

export default Navbar;
