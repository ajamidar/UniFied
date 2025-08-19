import React, { use, useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import GradientText from '../components/GradientText';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const UniHome = () => {
    const {selectedUni} = useParams();
    const { products, search, searchHit, setSearchHit } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavence');
    const navigate = useNavigate();

    // Toggles category selection in filter
    // If category exists, removes it; if not, adds it to selection
    const toggleCategory = (e) => {
      if (category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value));
      } else {
      setCategory(prev => [...prev, e.target.value]);
    }
    } 

    // Toggles subcategory selection in filter
    // If subcategory exists, removes it; if not, adds it to selection
    const toggleSubCategory = (e) => {
      if (subCategory.includes(e.target.value)) {
        setSubCategory(prev => prev.filter(item => item !== e.target.value));
      } else {
        setSubCategory(prev => [...prev, e.target.value]);
      }
    }
 
    // Modify the applyFilters function to use products as default parameter
    const applyFilters = (baseProducts = products) => {
        if (!baseProducts) return;
        let productsCopy = baseProducts.slice();

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory)); 
        }

        setFilteredProducts(productsCopy);
    }

    // Modify the sortProducts function
    const sortProducts = () => {
        if (!filteredProducts) return;
        let fpCopy = filteredProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilteredProducts(fpCopy.sort((a, b) => (a.price - b.price)));
                break;
            
            case 'high-low':
                setFilteredProducts(fpCopy.sort((a, b) => (b.price - a.price)));
                break;

            default:
                applyFilters();
                break;
        }
      }

    const showSearchProducts = () => {
      const searchFiltered = products.filter(item => 
          item.name.toLowerCase().includes(search.toLowerCase())
      );
      applyFilters(searchFiltered); // Apply category/subcategory filters to search results
    }

    // Effect hook for search and filters
    useEffect(() => {
        if (searchHit) {
            showSearchProducts();
        } else {
            applyFilters(products);
        }
    }, [searchHit, category, subCategory, products]);


    // Effect hook to apply sorting when sort type changes
    useEffect(() => {
      sortProducts();
    }, [sortType]);


    const refreshPage = () => {
        navigate(0); // This refreshes the current route
    };

  return (
    <>
    <div className='flex justify-center items-center mt-10 max-sm:mt-5'>
      <button onClick={refreshPage}>
        <GradientText
          colors={["#333333", "#4079ff", "#000000", "#4079ff", "#333333"]}
          animationSpeed={5}
          showBorder={false}
          className="custom-class max-sm:text-3xl max-sm:pl-5 px-4 text-4xl md:text-4xl font-bold!">
          {selectedUni}'s Collection
        </GradientText>
      </button>
    </div>

    <div className='flex justify-center items-center mt-7'>
      <hr className='bg-[#333333] h-0.5 w-6/7' />
    </div>
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>

      {/*Filter Section*/}
      <div className='min-w-50'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 pl-2'>FILTERS
          <img src={assets.dropdown_icon} alt='dropdown icon' className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        <div className={`border border-gray-300 pl-5 py-3 bg-white mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Unisex'} onChange={toggleCategory}/>Unisex
            </p>
          </div>
        </div>
        {/*Subcategory Section*/}
        <div className={`border border-gray-300 pl-5 py-3 bg-white mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Tops'} onChange={toggleSubCategory}/>Tops
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Bottoms'} onChange={toggleSubCategory}/>Bottoms
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Sets'} onChange={toggleSubCategory}/>Sets
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Shoes'} onChange={toggleSubCategory}/>Shoes
            </p>
          </div>
        </div>
      </div>
      {/*Right Section*/}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PRODUCTS'} />
          {/*Product Sorting*/}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavence">Sort by: Relavence</option>
            <option value="low-high">Sort by: Price - Low to High</option>
            <option value="high-low">Sort by: Price - High to Low</option>
          </select>
        </div>

        {/*Map Products*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          }
        </div>

      

      </div>

    </div>
    </>
  )
}

export default UniHome