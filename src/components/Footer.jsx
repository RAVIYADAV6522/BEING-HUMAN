import React from 'react'
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Home</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">About</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Services</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Contact</a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} BEING HUMAN. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 
