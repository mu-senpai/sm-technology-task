import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-3 lg:px-5 xl:px-16 space-y-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and App Links */}
        <div className="md:col-span-3 col-span-1 lg:col-span-1 flex flex-col justify-between">
          <div className="flex items-center mb-4">
            <Image src="/Logo.png" alt="Fresh Harvests Logo" width={40} height={40} />
            <span className="text-lg font-bold ml-2">Fresh Harvests</span>
          </div>
          <div className="hidden lg:block">
            <p className="mb-4 font-semibold">Download App:</p>
            <div className="flex gap-2">
              <Image src="/images/banner/appstore.png" alt="App Store" width={120} height={40} />
              <Image src="/images/banner/googleplay.png" alt="Google Play" width={120} height={40} />
            </div>
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links 1</h4>
          <ul className="space-y-2 text-[#4A4A52]">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links 2</h4>
          <ul className="space-y-2 text-[#4A4A52]">
            <li><Link href="/favorite" className="hover:underline">Favorites</Link></li>
            <li><Link href="/cart" className="hover:underline">Cart</Link></li>
            <li><button className="hover:underline">Sign In</button></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full flex flex-col justify-between">
          <ul className="space-y-3">
            <h4 className="font-semibold ">Contact Us</h4>
            <li className="flex items-center gap-2">
              <Phone className="text-[#749B3F]" />
              <span>123-456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-[#749B3F]" />
              <span>FreshHarvests@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-[#749B3F]" />
              <span>Young Sari Street, Pontianak, Indonesia</span>
            </li>
          </ul>
          <div className="hidden lg:block">
            <p className="mt-4 font-semibold">Accepted Payment Methods:</p>
            <div className="flex gap-2">
              <Image src="/images/footer/Visa.png" alt="Visa" width={40} height={24} />
              <Image src="/images/footer/Paypal.png" alt="PayPal" width={40} height={24} />
              <Image src="/images/footer/ApplePay.png" alt="Apple Pay" width={40} height={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific sections */}
      <div className="block lg:hidden">
        <p className="mt-4 font-semibold">Accepted Payment Methods:</p>
        <div className="flex gap-2">
          <Image src="/images/footer/Visa.png" alt="Visa" width={40} height={24} />
          <Image src="/images/footer/Paypal.png" alt="PayPal" width={40} height={24} />
          <Image src="/images/footer/ApplePay.png" alt="Apple Pay" width={40} height={24} />
        </div>
      </div>
      <div className="lg:hidden">
        <p className="mb-4 font-semibold">Download App:</p>
        <div className="flex gap-2">
          <Image src="/images/banner/appstore.png" alt="App Store" width={120} height={40} />
          <Image src="/images/banner/googleplay.png" alt="Google Play" width={120} height={40} />
        </div>
      </div>

      <hr className="text-gray-400 my-5" />

      <div className="container mx-auto text-center text-sm text-black font-semibold">
        © Copyright 2024, All Rights Reserved by Banana Studio
      </div>
    </footer>
  )
}

export default Footer