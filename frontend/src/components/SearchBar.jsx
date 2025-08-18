import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {

    const {searcnh, setSearch, showSearch, setShowSearch} = useContext(ShopContext);


    return showSearch ? (
        <>
        </>
    ) : null;
}

export default SearchBar