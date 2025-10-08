import React, { useMemo, useState } from 'react';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import { products as initialProducts, categories } from './data/products';

// helper คำนวณราคาสุทธิหลังส่วนลด (รองรับของเดิม)
const finalPriceOf = (p) =>
  typeof p.originalPrice === 'number'
    ? Math.round(p.originalPrice * (1 - (p.discount || 0) / 100))
    : Number(p.price || 0);

function App() {
  // ตะกร้าเก็บรายการแบบ { id, name, price, image, qty }
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // จำนวนรวมไว้โชว์บน badge
  const totalQty = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);

  // เพิ่มสินค้าลงตะกร้า (ถ้ามีอยู่แล้ว +1)
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const price = finalPriceOf(product);
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
        } else {
        return [
          ...prev,
          { id: product.id, name: product.name, price, image: product.image, qty: 1 },
        ];
      }
    });
    // เปิดตะกร้าทันทีถ้าอยากให้เห็น (เลือกได้)
    // setCartOpen(true);
  };

  const handleViewDetails = (product) => {
    const priceTxt = finalPriceOf(product).toLocaleString();
    alert(`ดูรายละเอียด:\n• ${product.name}\n• ราคา: ฿${priceTxt}\n• เรตติ้ง: ${product.rating}\n\n${product.description}`);
  };

  // action ในตะกร้า
  const inc = (id) =>
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  const remove = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setCart([]);

  return (
    <div>
      {/* Cart badge (กดเพื่อเปิด/ปิด) */}
      <div
        onClick={() => setCartOpen(true)}
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          background: '#0d6efd',
          color: '#fff',
          padding: '10px 14px',
          borderRadius: 999,
          zIndex: 1000,
          boxShadow: '0 8px 20px rgba(13,110,253,.35)',
          cursor: 'pointer',
          userSelect: 'none'
        }}
        title="คลิกเพื่อเปิดตะกร้า"
      >
        🛒 ตะกร้า: {totalQty} ชิ้น
      </div>

      <ProductList
        products={initialProducts}
        categories={categories}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />

      {/* Drawer ตะกร้า */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onInc={inc}
        onDec={dec}
        onRemove={remove}
        onClear={clear}
      />
    </div>
  );
}

export default App;
