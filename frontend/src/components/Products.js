import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../store/products';

function AllProducts() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const { products } = allProducts;

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  return (
    <div className="row center products">
      {products.map((product) => (
        <div key={product._id} className="card">
          <Link to={`/products/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </Link>
          <div className="card-body">
            <Link to={`/products/${product._id}`}>
              <p>{product.name}</p>
            </Link>
            <p>${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
