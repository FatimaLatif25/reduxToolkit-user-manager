import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser, removeUser, clearAllUsers } from '../store/slices/UserSlice';
import { useSelector } from 'react-redux';

const UserDetails = () => {
const dispatch = useDispatch()  //To call the reducer action -> takes updated data
const users = useSelector((state)=> {
  return state.users    //Access users state from store using useSelector
})
console.log("userData", users)

  const handleAddUser = (payload) => {
    console.log("user", payload)
    dispatch(addUser(payload))
  }

  const handleDeleteUser = (userId) => {
    dispatch(removeUser(userId))
  }

  const handleDeleteAllUser = () => {
    dispatch(clearAllUsers())
  }



  return (
    <>
    <div className='relative'>
    <div className='flex justify-center item-center mt-6 gap-4'>
       <div className='text-xl font-semibold text-gray-500 text-center my-4 mx-3'>List of User Details</div>
       <div className='my-4 mx-3'>
        <button onClick={()=> handleAddUser(fakeUserData())} className='bg-gray-500 text-md font-md text-white rounded-lg px-3 py-2 text-center'>Add user</button>
      </div>
    </div>

      {/* Display Users */}
      <div className="flex justify-center item-center mt-3">
          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Users name
                      </th>
                      <th scope="col" className="px-6 py-3 text-red-500">
                          Remove
                      </th>
                  </tr>
              </thead>
              <tbody>
                {users.map((user, id) => {
                  return (
                     <tr key={id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {user}
                      </th>
                  
                      <td className="px-6 py-4">
                          <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>handleDeleteUser(id)}><FaTrash /></button>
                      </td>
                  </tr>
                  )
                })}
              </tbody>
          </table>
      </div>
       <div className='absolute right-10 bottom-0 my-4 mx-3'>
        <button onClick={handleDeleteAllUser} className='bg-gray-500 text-md font-md text-white rounded-lg px-3 py-2 text-center'>Clear All Users</button>
      </div>
      </div>
    </>

  )
}

export default UserDetails