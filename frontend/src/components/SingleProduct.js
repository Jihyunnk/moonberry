import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../store/singleProduct';

function SingleProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id: productId } = params;

  const [quantity, setQuantity] = useState(1);

  const singleProduct = useSelector((state) => state.singleProduct);
  const { product } = singleProduct;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const handleClick = () => {
    navigate(`/cart/${productId}?quantity=${quantity}`);
  };

  return (
    <div>
      <Link to="/products" className="back">
        BACK
      </Link>
      <div className="row">
        <div className="col-1">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <p>{product.description}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  {!product.price ? (
                    <div>${product.price}</div>
                  ) : (
                    <div>${product.price.toFixed(2)}</div>
                  )}
                </div>
              </li>
              {product.inventory && (
                <>
                  <li>
                    <div className="row">
                      <div>Quantity</div>
                      <div>
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary" onClick={handleClick}>
                      ADD TO CART
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
