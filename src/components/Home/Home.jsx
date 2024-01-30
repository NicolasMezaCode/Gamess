import React, { useState, useEffect } from 'react'
import Slider from './Slider'
import MostRated from './MostRated'
import Popular from './Recent'
import { useAuth } from '../../context/AuthContext' // Import your Auth context

export default function Home() {
  const { currentUser } = useAuth() // Get the current user from your Auth context
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (!currentUser) {
      setShowPopup(true)
    }
  }, [currentUser])
  const handleClose = () => {
    setShowPopup(false)
  }
  return (
    <>
      {showPopup && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col items-center justify-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Log in to get the full experience
              </h3>
              <button onClick={handleClose} className="mt-3 text-white bg-red-500 hover:bg-red-700 text-sm font-semibold py-2 px-4 rounded">Close</button>
            </div>
          </div>
        </div>
      </div>
        )}
      <Slider/>
      <MostRated/>
      <Popular/>
    </>
  )
}
