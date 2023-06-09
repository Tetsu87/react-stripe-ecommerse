import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../context/product-context';
import Layout from '../shared/layout';
import './single-product.styles.scss';

function SingleProduct() {
    const { products } = useContext(ProductsContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(()=> {
        const product = products.find(item => Number(item.id) === Number(id))

        // if product does not exist, redirect to shop page
        if (!product) {
            return navigate('/shop');
        }

        setProduct(product);
    },[id, product, products]);

    if (!product){
        return null;
    }

    const {imageUrl, title, price, description} = product;

    return (
        <Layout>
            <div className='single-product-container'>
            <div className='product-image'>
                <img src={imageUrl} alt='product'/>
            </div>
            </div>
            <div className='product-details'>
                <div className='name-price'>
                    <h3>{title}</h3>
                    <p> {price}</p>
                </div>
                <div className='add-to-cart-btns'>
                    <button className='button is-white nomad-btn' id='btn-white-outline'>
                        ADD TO CART
                    </button>
                    <button className='button is-black nomad-btn' id='btn-white-outline'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className='product-description'>
                    <p>
                        {
                            description
                        }
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default SingleProduct; 