import { useState } from "react";
import { ShopContext } from "./ShopContextContext";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const ShopContextProvider = ({ children }) => {

    const currency = '£';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [searchHit, setSearchHit] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    //Add to cart functionality
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

    const getCartCount = () => {
        // Initialize total count of items in cart
        let totalCount = 0;
        // Iterate over each item in the cart
        Object.entries(cartItems).forEach(([itemId, sizes]) => {
            // Iterate over each size for the current item
            Object.values(sizes).forEach(qty => {
                // If quantity is greater than 0, add to total count
                if (qty > 0) totalCount += qty;
            });
        });
        // Return the total count of items in the cart
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item]>0){
                        let itemPrice = itemInfo.price * cartItems[items][item];
                        totalAmount += itemPrice;
                    }
                }catch(error){
                    console.log(error);
                }
            }
        }
        return totalAmount
    }

    //Get the values in other files
    const value = {
        products , currency,
        search, setSearch,
        showSearch, setShowSearch,
        searchHit, setSearchHit,
        cartItems, setCartItems,
        addToCart, getCartCount,
        updateQuantity, getCartAmount,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;