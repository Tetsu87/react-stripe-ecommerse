import React, { useContext } from 'react';
import Layout from '../../shared/layout';
import FeaturedProduct from '../../shared/featured-product';
import { ProductsContext } from '../../../context/product-context';
import './shop.styles.scss';

function Shop() {
    const { products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
        <FeaturedProduct {...product} key={product.id}></FeaturedProduct>
    ))

    return (
        <Layout>
            <div className='product-list-container'>
                <h2 className='product-list-title'>Shop</h2>
                <div className='product-list'>
                    {
                        allProducts
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Shop;