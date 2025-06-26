import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-500 p-4'>
      <div className='flex justify-between'>
        <div className='text-white font-bold text-xl'>User Logo</div>
       <div className=''>
        <ul className='flex justify-between space-x-6'>
          <li>
            <a href= "#" className='text-white font-bold text-lg hover:text-gray-400 transition-colors'>Home</a>
          </li>
          <li>
            <a href= "#" className='text-white font-bold text-lg hover:text-gray-400 transition-colors'>About</a>
          </li>
          <li>
            <a href= "#" className='text-white font-bold text-lg hover:text-gray-400 transition-colors'>Services</a>
          </li>
          <li>
            <a href= "#" className='text-white font-bold text-lg hover:text-gray-400 transition-colors'>Contact</a>
          </li>
        </ul>
       </div>
      </div>
    </div>
   
  )
}

export default Navbar