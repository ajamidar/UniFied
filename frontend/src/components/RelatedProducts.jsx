import React, { useContext, useMemo } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext)
    const { productId } = useParams()
    const { selectedUni } = useParams() 

    // Memoize filtered products
    const related = useMemo(() => {
        if (!products.length) return []
        
        return products
            .filter(item => 
                item.category === category && 
                item.subCategory === subCategory && 
                item._id !== productId
            )
            .slice(0, 5)
    }, [products, category, subCategory, productId])

    const handleProductClick = (id) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        openInNewTab(id);
    };

    if (!related.length) return null

    return (
        <div className='mt-10'>
            <h2 className='text-2xl font-medium'>Related Products</h2>
            <div className='flex flex-row gap-2 mt-2 overflow-x-auto'>
                {related.map((item) => (
                    <div
                        key={item._id}
                        onClick={() => handleProductClick(item._id)}
                        className="related-product min-w-[200px] cursor-pointer"
                    >
                        <ProductItem
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default React.memo(RelatedProducts)