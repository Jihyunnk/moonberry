import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../store/singleProduct';

function SingleProduct() {
  const dispatch = useDispatch();
  const params = useParams();
  const { id: productId } = params;

  const [quantity, setQuantity] = useState(1);

  const singleProduct = useSelector((state) => state.singleProduct);
  const { product } = singleProduct;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      <div>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <div>
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
        <div>
          <div>
            <ul>
              <li>
                <div>
                  <div>Price</div>
                  <div>${product.price}</div>
                </div>
              </li>
              {product.inventory && (
                <>
                  <li>
                    <div>
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
                    <button>ADD TO CART</button>
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