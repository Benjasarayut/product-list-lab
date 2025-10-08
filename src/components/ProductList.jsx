import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

const getFinalPrice = (p) =>
  typeof p.originalPrice === 'number'
    ? Math.round(p.originalPrice * (1 - (p.discount || 0) / 100))
    : Number(p.price || 0);

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevant'); // relevant | name | priceAsc | priceDesc | rating

  const filtered = useMemo(() => {
    let list = [...products];

    // category
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }

    // sort
    switch (sortBy) {
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name, 'th'));
        break;
      case 'priceAsc':
        list.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
        break;
      case 'priceDesc':
        list.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
        break;
      case 'rating':
        list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // relevant: แสดงสินค้าพร้อมสต็อกก่อน
        list.sort((a, b) => Number(b.inStock) - Number(a.inStock));
    }

    return list;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="product-list-container">
      {/* Header */}
      <div className="header">
        <h1>🛍️ ร้านค้าออนไลน์</h1>
        <p>Lab 3.2 - การสร้าง Components และ Props</p>
      </div>

      {/* Controls */}
      <div className="controls">
        <div className="control">
          <label>หมวดหมู่</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="control grow">
          <label>ค้นหา</label>
          <input
            type="text"
            placeholder="พิมพ์ชื่อ/คำอธิบายสินค้า..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="control">
          <label>เรียงโดย</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevant">ความเกี่ยวข้อง</option>
            <option value="name">ชื่อ (ก-ฮ)</option>
            <option value="priceAsc">ราคาต่ำ→สูง</option>
            <option value="priceDesc">ราคาสูง→ต่ำ</option>
            <option value="rating">เรตติ้งสูงสุด</option>
          </select>
        </div>
      </div>

      {/* Products */}
      {filtered.length === 0 ? (
        <div className="empty">
          ไม่พบสินค้าที่ตรงกับเงื่อนไขการค้นหา/กรอง
        </div>
      ) : (
        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProductList;
