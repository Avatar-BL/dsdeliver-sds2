import './styles.css';
import './StepsHeader.tsx';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from './Api';
import OrderLocation from './OrderLocation.tsx';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderlocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch()
    }, []);
    return (
       <div className="orders-container">
           <StepsHeader />
           <ProductsList products={products} />
           <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
       </div>
    )
}

export default Orders;