import { createContext, useState } from "react";
import { ShopContext } from "./ShopContextContext";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const ShopContextProvider = ({ children }) => {

    const currency = '£';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [searchHit, setSearchHit] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error("Please select a size");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            // Item already in cart
            if (cartData[itemId][size]) {
                // Size already in cart, increment quantity
                cartData[itemId][size] += 1;
            } else {
                // Size not in cart, add size with quantity 1
                cartData[itemId][size] = 1;
            }
        } else {
            // Item not in cart, add it
            cartData[itemId] = {
                [size]: 1
            };
        }

        setCartItems(cartData);
    }

    const value = {
        products , currency,
        search, setSearch,
        showSearch, setShowSearch,
        searchHit, setSearchHit,
        cartItems, setCartItems,
        addToCart,
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;