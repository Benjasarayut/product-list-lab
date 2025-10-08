import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './CartDrawer.css';

function CartDrawer({ open, onClose, items, onInc, onDec, onRemove, onClear }) {
  const { totalQty, totalPrice } = useMemo(() => {
    const totalQty = items.reduce((s, i) => s + i.qty, 0);
    const totalPrice = items.reduce((s, i) => s + i.qty * i.price, 0);
    return { totalQty, totalPrice };
  }, [items]);

  return (
    <>
      {open && <div className="cart-overlay" onClick={onClose} />}

      <aside className={`cart-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <header className="cart-header">
          <h3>🛒 ตะกร้าสินค้า</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close">✕</button>
        </header>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">ยังไม่มีสินค้าในตะกร้า</div>
          ) : (
            <ul className="cart-list">
              {items.map((it) => (
                <li key={it.id} className="cart-item">
                  <img src={it.image} alt={it.name} />
                  <div className="cart-info">
                    <div className="cart-name">{it.name}</div>
                    <div className="cart-price">฿{it.price.toLocaleString()}</div>

                    <div className="cart-qty">
                      <button className="qty-btn" onClick={() => onDec(it.id)}>-</button>
                      <span className="qty-val">{it.qty}</span>
                      <button className="qty-btn" onClick={() => onInc(it.id)}>+</button>
                    </div>
                  </div>

                  <div className="cart-sub">
                    <div>฿{(it.qty * it.price).toLocaleString()}</div>
                    <button className="link-danger" onClick={() => onRemove(it.id)}>ลบ</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="cart-footer">
          <div className="cart-summary">
            <div>จำนวน: <strong>{totalQty}</strong> ชิ้น</div>
            <div>รวมทั้งหมด: <strong>฿{totalPrice.toLocaleString()}</strong></div>
          </div>
          <div className="cart-actions">
            <button className="btn btn-outline" onClick={onClear} disabled={items.length === 0}>
              ล้างตะกร้า
            </button>
            <button className="btn btn-primary" disabled={items.length === 0}>
              ชำระเงิน (เดโม)
            </button>
          </div>
        </footer>
      </aside>
    </>
  );
}

CartDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string,
      qty: PropTypes.number.isRequired,
    })
  ).isRequired,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default CartDrawer;
