import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating';

export default function Product({data, cart, setCart}) {
let [toggle, setToggle] = useState(true)
const [rating, setRating] = useState(0)

const handleRating = (rate)=>{
setRating(rate)
}

  return (
    <>
      {/* <!-- Section--> */}
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product tag--> */}
         { data.isSale?<div className="sale-badge">Sale</div>:
         ""
         }
          
        
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
            
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{data.name}</h5>
              {/* <!-- Product price--> */}
              {data.isSale?<span>
              <s className="light-text">${data.price}</s> ${data.discoutPrice}<br/></span>: <span>

              ${data.price}<br/></span>}
              <br/>
             
             <Rating onClick={handleRating} initialValue={rating} size={25} />
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            {
            toggle?<div className="text-center">
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setCart(cart + 1);
                    setToggle(!toggle);
                  }}
                >
                  Add to cart
                </button>
              </div> :
            
              <div className="text-center">
                <button
                  className="btn btn-dark mt-auto"
                  onClick={() => {
                    setCart(cart - 1);
                    setToggle(!toggle);
                  }}
                >
                  Remove from cart
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

