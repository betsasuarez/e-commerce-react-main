import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating-stars-component';
import basketImg from '../assets/ecomm-bag-icon.svg';

const ProductCard = ({ image, title, category, price, wasPrice, discount, stars }) => {
  return (
    <div className="cs-item">
      <a href="" className="cs-link">
        <div className="cs-picture-group">
          <img src={image} className="cs-picture" alt={title} />
          {discount && <span className="cs-offer">-{discount}%</span>}
        </div>
        <div className="cs-details">
          <span className="cs-category">{category}</span>
          <h3 className="cs-name">{title}</h3>
          <div className="cs-actions">
            <div className="cs-flex">
              <span className="cs-price">${price}</span>
              {wasPrice && <span className="cs-was-price">${wasPrice}</span>}
              <div className="cs-stars">
                <Rating
                  count={5}
                  value={stars}
                  size={24}
                  activeColor="#ffd700"
                  isHalf={true}
                  edit={false}
                />
              </div>
            </div>
            <button className="cs-buy">
              <img src={basketImg} className="cs-basket" alt="Add to basket" />
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  wasPrice: PropTypes.number,
  discount: PropTypes.number,
  stars: PropTypes.number.isRequired,
};

export default ProductCard;
