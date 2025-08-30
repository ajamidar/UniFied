import React, { useContext, useMemo, useState, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GradientText from '../components/GradientText'
import { ShopContext } from '../context/ShopContextContext'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const UniHome = () => {
  const { selectedUni } = useParams()
  const { products, search, searchHit } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevance')
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  const toggleCategory = useCallback((e) => {
    const { value } = e.target
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }, [])

  const toggleSubCategory = useCallback((e) => {
    const { value } = e.target
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }, [])

  const refreshPage = () => {
     navigate(0); // This refreshes the current route
  };

  const filteredProducts = useMemo(() => {
    if (!products) return []

    let result = products.slice()

    if (searchHit) {
      result = result.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      result = result.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      result = result.filter(item => subCategory.includes(item.subCategory))
    }

    switch (sortType) {
      case 'low-high':
        return [...result].sort((a, b) => a.price - b.price)
      case 'high-low':
        return [...result].sort((a, b) => b.price - a.price)
      default:
        return result
    }
  }, [products, search, searchHit, category, subCategory, sortType])

  useEffect(() => {
    // Short delay to ensure DOM is ready
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-250 ease-in ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div onClick={refreshPage} className='flex justify-center items-center mt-5 max-sm:mt-2.5'>
          <GradientText
            colors={["#333333", "#4079ff", "#000000", "#4079ff", "#333333"]}
            animationSpeed={5}
            showBorder={false}
            className="custom-class max-sm:text-3xl max-sm:pl-5 px-4 text-4xl md:text-4xl font-bold!"
          >
            {selectedUni}'s Collection
          </GradientText>
        </div>

        {/* Divider */}
        <div className='flex justify-center items-center mt-7 max-sm:mt-3.5 sm:mt-3.5'>
          <hr className='bg-[#333333] h-0.5 w-6/7' />
        </div>

        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 sm:pt-2.5 max-sm:pt-2.5'>

          {/* Filter Section */}
          <div className='min-w-50'>
            <p
              onClick={() => setShowFilter(!showFilter)}
              className='my-2 text-xl flex items-center cursor-pointer gap-2 pl-2 max-sm:text-[1.1rem] max-sm:pl-0'
            >
              FILTERS
              <img
                src={assets.dropdown_icon}
                alt='dropdown icon'
                className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
              />
            </p>

            {/* Category Filters */}
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

            {/* Subcategory Filters */}
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

          {/* Products Section */}
          <div className='flex-1 mt-2 max-sm:mt-0'>
            <div className='flex justify-between max-sm:gap-4 text-2xl max-sm:text-sm mb-2'>
              <Title text1={'ALL'} text2={'PRODUCTS'} />
              <select
                onChange={(e) => setSortType(e.target.value)}
                className='border-2 border-gray-300 max-sm:text-xs text-base max-sm:px-0 px-2 max-sm:h-10'
              >
                <option value="relevance" className=''>Sort by: Relevance</option>
                <option value="low-high" className=''>Sort by: Price - Low to High</option>
                <option value="high-low" className=''>Sort by: Price - High to Low</option>
              </select>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {filteredProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UniHome
