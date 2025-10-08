# Lab 3.2 — Product List (Components & Props)

สร้างเว็บแคตตาล็อกสินค้าโดยใช้ **React + Vite** โฟกัสที่การออกแบบ **Components**, ส่งข้อมูลด้วย **Props**, ตรวจสอบชนิดด้วย **PropTypes**, และโต้ตอบด้วย **Event Handling**  
โปรเจกต์นี้ดัดแปลงสินค้าเป็น **“เครื่องบินรบ”** และเพิ่มหมวด **“รถถัง”** พร้อม **ตะกร้าสินค้าแบบแก้ไขได้** (Cart Drawer)

---

## ✨ ฟีเจอร์หลัก

- 🔎 **ค้นหา / กรอง / เรียงลำดับ**
  - กรองตามหมวด (Stealth, Multirole, Air Superiority, Trainer, Tanks)
  - ค้นหาชื่อ/คำอธิบายสินค้า
  - เรียงตามความเกี่ยวข้อง, ชื่อ, ราคา ↑/↓, เรตติ้ง
- 🧩 **Components & Props**
  - `ProductList` (แสดงรวม + ตัวกรอง)
  - `ProductCard` (การ์ดสินค้า + ส่วนลด + เรตติ้งดาว)
  - `CartDrawer` (แผงตะกร้าเลื่อนออกด้านขวา)
- 🛒 **ตะกร้าแก้ไขได้**
  - เพิ่ม/ลดจำนวน, ลบรายการ, ล้างทั้งตะกร้า
  - คำนวณยอดรวมแบบเรียลไทม์
- ⭐ **Rating ดาว + ส่วนลด**
  - แสดงดาวเต็ม/ครึ่ง/ว่าง และตัวเลข `(4.7)`
  - แสดงราคาเดิม (ขีดฆ่า) และ **ราคาหลังหักส่วนลด**
- 📱 **Responsive** รองรับจอเล็ก

> หมายเหตุ: ข้อมูลราคา/ส่วนลด/สต็อกเป็น **Mock** เพื่อการเรียนรู้ UI เท่านั้น

---

## 🛠 เทคโนโลยีที่ใช้

- React 18 + Vite
- PropTypes (ตรวจสอบชนิดของ props)
- CSS (no framework) + Responsive

---

## 🗂 โครงสร้างโปรเจกต์

```csharp
product-list-lab/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ CartDrawer.jsx        # แผงตะกร้า แก้จำนวน/ลบ/เคลียร์
│  │  ├─ CartDrawer.css
│  │  ├─ ProductCard.jsx       # การ์ดสินค้า + ดาว + ส่วนลด
│  │  ├─ ProductList.jsx       # ตัวกรอง ค้นหา เรียงลำดับ + แสดงกริด
│  │  └─ ProductList.css
│  ├─ data/
│  │  └─ products.js           # mock data: เครื่องบินรบ + รถถัง & categories
│  ├─ App.jsx                  # รวมทุกอย่าง + badge ตะกร้ามุมขวาบน
│  └─ main.jsx                 # React root
├─ .gitignore
├─ index.html
└─ package.json

```

🚀 เริ่มต้นใช้งาน
bash
คัดลอกโค้ด

```

npm install
npm run dev

```

เปิดเบราว์เซอร์ที่แสดงบนเทอร์มินัล (เช่น http://localhost:5173)

📦 ข้อมูลสินค้า (Mock)
หมวดหมู่: stealth, multirole, air-superiority, trainer, tanks

อยู่ในไฟล์ src/data/products.js

โครงสร้างสินค้าตัวอย่าง:

```

js
{
  id: 'T-1',                     // string/number
  name: 'M1A2 SEP v3 Abrams',
  category: 'tanks',
  originalPrice: 320000000,      // ราคาเต็ม
  discount: 9,                   // %
  image: 'https://placehold.co/...',
  description: 'รถถังหลัก...',
  inStock: true,
  rating: 4.8
}

```

🧮 ตะกร้าสินค้า (Cart)
กดที่ badge ตะกร้า มุมขวาบนเพื่อเปิด/ปิด

เพิ่มสินค้าจากปุ่ม ใส่ตะกร้า

ใน Drawer:

+ / - ปรับจำนวน

ลบ เพื่อลบรายการ

ล้างตะกร้า เคลียร์ทั้งหมด

โครงรายการในตะกร้า:

```

js
{ id, name, price, image, qty }
🔍 PropTypes ที่ใช้ (ตัวอย่าง)

```
```
jsx
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    inStock: PropTypes.bool,
    rating: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

```

✅ เช็กลิสต์งานที่ทำแล้ว
 Components & Props ครบถ้วน

 PropTypes Validation

 Filtering + Search + Sorting

 Rating ดาว + ส่วนลด + ราคาเดิม (ขีดฆ่า)

 Cart Drawer แก้ไขได้ (เพิ่ม/ลด/ลบ/ล้าง)

 Responsive UI

➕ ไอเดียต่อยอด (Optional)
บันทึกตะกร้าลง localStorage

หน้า Checkout แยกรายการ/ที่อยู่/สรุปราคา

ตัวกรองขั้นสูง (ช่วงราคา / เฉพาะสินค้ามีสต็อก)

แสดง spec chips (เช่น พิสัยบิน/ความเร็ว/น้ำหนัก) สำหรับเครื่องบิน/รถถัง

📄 License
สำหรับการศึกษา/สาธิตเท่านั้น

sql
คัดลอกโค้ด

ถ้าพร้อมอัปขึ้น Git ให้รันสั้น ๆ:
```bash
git add README.md
git commit -m "docs: add concise README for Lab 3.2"
git pull --rebase origin main
git push origin main
