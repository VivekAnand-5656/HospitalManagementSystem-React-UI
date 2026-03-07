import React from 'react'

const Footer = () => {
  return <>
  {/* ================= Footer ================= */}

<footer className="w-full bg-[#111] text-white pt-10 pb-5">

  <div className="flex flex-wrap justify-around gap-10 px-10">

    {/* Quick Links */}
    <div>
      <h2 className="text-xl font-bold mb-3">Quick Links</h2>
      <ul className="space-y-2 text-gray-300">
        <li className="cursor-pointer hover:text-white">Home</li>
        <li className="cursor-pointer hover:text-white">About</li>
        <li className="cursor-pointer hover:text-white">Features</li>
        <li className="cursor-pointer hover:text-white">Contact</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h2 className="text-xl font-bold mb-3">Services</h2>
      <ul className="space-y-2 text-gray-300">
        <li className="cursor-pointer hover:text-white">Patient Management</li>
        <li className="cursor-pointer hover:text-white">Doctor Management</li>
        <li className="cursor-pointer hover:text-white">Appointment System</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-xl font-bold mb-3">Contact</h2>
      <ul className="space-y-2 text-gray-300">
        <li>Email: hospital@gmail.com</li>
        <li>Phone: +91 9876543210</li>
        <li>Address: Delhi, India</li>
      </ul>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400">
    © 2026 Hospital Management System. All Rights Reserved.
  </div>

</footer>
  </>
}

export default Footer