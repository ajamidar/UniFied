import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const location = useLocation();

    const askUniSelection = () => {
        if (!location.pathname.includes('University')){
            setError('Please select a university first');
            setShowModal(true);
            // Auto-hide the modal after 3 seconds
            setTimeout(() => setShowModal(false), 3000);
        } else if (search == "") {
            setError('Please specify your search requirements');
            setShowModal(true);
            // Auto-hide the modal after 3 seconds
            setTimeout(() => setShowModal(false), 3000);
        }
    }
    


    return showSearch ? (
        <>
            <div className='searchbar w-3/8 flex flex-row items-center justify-between  rounded-lg 
                            max-sm:w-full  max-sm:order-2'>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full h-1/4 pl-3 py-3 rounded-tl-lg rounded-bl-lg bg-[#f0f0f0] border border-[#ccc] max-sm:text-[0.7rem]' type='text' placeholder='Search for products...' />
                <button onClick={askUniSelection} type='button' className='px-4 py-2.5 rounded-tr-lg cursor-pointer rounded-br-lg bg-[#ffaa01] text-white hover:bg-[#ed9a26] transition '>
                  <img width={30} height={30} src='/search.svg' alt='' className='max-sm:size-[17.5px] md:size-[24px]'/>
                </button>    
            </div>
            {/* Error Modal */}
            {showModal && (
                <div className="fixed top-2/16 right-5/13 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg transition-opacity duration-300 z-50">
                    <div className="flex items-center">
                        <span className="font-medium">{error}</span>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="ml-4 text-red-700 hover:text-red-900"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    ) : null;
}

export default SearchBar