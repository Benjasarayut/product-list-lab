import React from 'react';
import PropTypes from 'prop-types';

const getFinalPrice = (p) => {
  if (typeof p.originalPrice === 'number') {
    const d = Number(p.discount || 0);
    return Math.round(p.originalPrice * (1 - d / 100));
  }
  // fallback legacy field
  return Number(p.price || 0);
};

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  for (let i = 0; i < full; i++) stars.push(<span key={`f${i}`} className="star full">★</span>);
  if (half) stars.push(<span key="h" className="star half">★</span>);
  for (let i = stars.length; i < 5; i++) stars.push(<span key={`e${i}`} className="star empty">★</span>);
  return stars;
};

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const finalPrice = getFinalPrice(product);

  return (
    <div className={`product-card ${!product.inStock ? 'is-out' : ''}`}>
      <div className="product-image">
        {!product.inStock && <span className="stock-badge">หมด</span>}
        {product.discount > 0 && <span className="discount-badge">-{product.discount}%</span>}
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src =
              'https://placehold.co/600x400/ced4da/495057?text=No+Image';
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-number">({product.rating?.toFixed(1)})</span>
        </div>
        <p className="product-description">{product.description}</p>

        <div className="product-price">
          <span className="price-now">฿{finalPrice.toLocaleString()}</span>
          {product.discount > 0 && (
            <span className="price-old">฿{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="product-actions">
          <button className="btn btn-secondary" onClick={() => onViewDetails(product)}>
            ดูรายละเอียด
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    price: PropTypes.number, // เผื่อใช้ฟิลด์เก่า
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    inStock: PropTypes.bool,
    rating: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProductCard;
