import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../store/features/productsSlice";
import ProductCard from './components/ProductCard/ProductCard';

const Shop = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    console.log(category)
    useEffect(() => {
        dispatch(fetchProducts(category))
    }, [category, dispatch])
    return (
        <div className="shop">
            <div className="page-container">
                <div className="filter py-5">
                    <h4>Filters:</h4>
                    <select onChange={(e) => setCategory(e.target.value)} className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="" selected>All</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                    </select>
                </div>
                <div className="row">
                    {products.products.map((product) => (
                        <ProductCard keey={product.id} image={product.image} title={product.title} category={product.category} price={product.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop;