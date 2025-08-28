import { createContext } from "react";

export const ShopContext = createContext();

//Separate file for context provider to make sure export is compatible; Avoid Fast Refresh errors.