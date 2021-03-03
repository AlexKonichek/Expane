import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
  <nav className="bg-gray-600">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">User list</Link>
            <Link to="/add" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Add new user</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
    )
}

export default Navbar
