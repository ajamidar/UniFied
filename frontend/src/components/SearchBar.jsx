import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);


    return showSearch ? (
        <>
            <div className='searchbar w-3/8 flex flex-row items-center justify-between  rounded-lg 
                            max-sm:w-full  max-sm:order-2'>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full h-1/4 pl-3 py-3 rounded-tl-lg rounded-bl-lg bg-[#f0f0f0] border border-[#ccc] max-sm:text-[0.7rem]' type='text' placeholder='Search for products...' />
                <button type='button' className='px-4 py-2.5 rounded-tr-lg cursor-pointer rounded-br-lg bg-[#ffaa01] text-white hover:bg-[#ed9a26] transition '>
                  <img width={30} height={30} src='/search.svg' alt='' className='max-sm:size-[17.5px] md:size-[24px]'/>
                </button>    
            </div>
        </>
    ) : null;
}

export default SearchBar