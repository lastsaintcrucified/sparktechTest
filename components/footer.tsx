"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-sm transform rotate-45"></div>
              </div>
              <div className="text-lg font-bold">
                DAYF
                <div className="text-xs text-blue-200 -mt-1">BOOKING</div>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Easy travel makes booking your next stay simple, affordable, and stress-free. From thousands of hotels to
              unique vacation rentals, we ensure every adventure is as easy to book as you find the perfect place to
              stay every time.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <Button variant="ghost" size="sm" className="p-2 text-blue-200 hover:text-white hover:bg-blue-800">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-blue-200 hover:text-white hover:bg-blue-800">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-blue-200 hover:text-white hover:bg-blue-800">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-blue-200 hover:text-white hover:bg-blue-800">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <div className="space-y-3">
              <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                Hotels
              </a>
              <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                House
              </a>
              <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-blue-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@yourcompany.com</span>
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-white">Download Our App</h4>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-blue-900 bg-white hover:bg-gray-100 border-white"
              >
                <div className="w-5 h-5 mr-2 bg-gray-800 rounded"></div>
                App Store
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-blue-900 bg-white hover:bg-gray-100 border-white"
              >
                <div className="w-5 h-5 mr-2 bg-gray-800 rounded"></div>
                Google Play
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-200 mb-4 md:mb-0">📍 123 Travel St, Suite 100, City, Country</div>
            <div className="text-sm text-blue-200">© 2024. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
