import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = '£';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);

    const value = {
        products , currency,
        search, setSearch,
        showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;