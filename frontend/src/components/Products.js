import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/products';

function AllProducts() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const { products } = allProducts;

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
