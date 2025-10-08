// src/data/products.js
// หมวดหมู่
export const categories = [
  { id: 'all', name: 'ทั้งหมด' },

  // เครื่องบินรบ
  { id: 'stealth', name: 'ล่องหน (Stealth)' },
  { id: 'multirole', name: 'หลายบทบาท (Multirole)' },
  { id: 'air-superiority', name: 'ครองอากาศ' },
  { id: 'trainer', name: 'ฝึก' },

  // ✅ ใหม่: รถถัง
  { id: 'tanks', name: 'รถถัง' },
];

// สินค้า (mock)
export const products = [
  // ====== เครื่องบินรบ ======
  {
    id: 1,
    name: 'F-35A Lightning II',
    category: 'stealth',
    originalPrice: 3900000000,
    discount: 5,
    image: 'https://placehold.co/600x400/0d6efd/ffffff?text=F-35A',
    description: 'เครื่องบินขับไล่ล่องหนยุคที่ 5 แบบหลายบทบาท',
    inStock: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'F-16V Viper',
    category: 'multirole',
    originalPrice: 2500000000,
    discount: 12,
    image: 'https://placehold.co/600x400/ffc107/000000?text=F-16V',
    description: 'ขับไล่หลายบทบาทรุ่นปรับปรุง พร้อมเรดาร์ AESA',
    inStock: true,
    rating: 4.4,
  },
  {
    id: 3,
    name: 'JAS 39 Gripen E',
    category: 'multirole',
    originalPrice: 2300000000,
    discount: 8,
    image: 'https://placehold.co/600x400/20c997/ffffff?text=Gripen+E',
    description: 'ขับไล่หลายบทบาท ขนาดกะทัดรัด ค่าดำเนินการต่ำ',
    inStock: true,
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Eurofighter Typhoon',
    category: 'air-superiority',
    originalPrice: 4000000000,
    discount: 10,
    image: 'https://placehold.co/600x400/6610f2/ffffff?text=Typhoon',
    description: 'ขับไล่ครองอากาศสมรรถนะสูง พร้อมความคล่องตัวเยี่ยม',
    inStock: true,
    rating: 4.5,
  },
  {
    id: 5,
    name: 'F-15EX Eagle II',
    category: 'air-superiority',
    originalPrice: 3800000000,
    discount: 7,
    image: 'https://placehold.co/600x400/f03e3e/ffffff?text=F-15EX',
    description: 'พลังบรรทุกอาวุธมาก ครองอากาศระยะไกล',
    inStock: true,
    rating: 4.3,
  },
  {
    id: 6,
    name: 'T-50 Golden Eagle',
    category: 'trainer',
    originalPrice: 1200000000,
    discount: 20,
    image: 'https://placehold.co/600x400/198754/ffffff?text=T-50',
    description: 'อากาศยานฝึกไอพ่นความเร็วสูง รุ่นพัฒนาเป็นขับไล่เบาได้',
    inStock: false,
    rating: 4.2,
  },

  // ====== ✅ รถถัง ======
  {
    id: 'T-1',
    name: 'M1A2 SEP v3 Abrams',
    category: 'tanks',
    originalPrice: 320000000,   // mock
    discount: 9,
    image: 'https://placehold.co/600x400/6c757d/ffffff?text=M1A2+Abrams',
    description: 'รถถังหลักกำลังแรง เครื่องยนต์กังหันแก๊ส เกราะคอมโพสิต',
    inStock: true,
    rating: 4.8,
  },
  {
    id: 'T-2',
    name: 'Leopard 2A7+',
    category: 'tanks',
    originalPrice: 300000000,
    discount: 7,
    image: 'https://placehold.co/600x400/28a745/ffffff?text=Leopard+2A7',
    description: 'รถถังหลักยุคใหม่จากยุโรป ความน่าเชื่อถือสูง',
    inStock: true,
    rating: 4.7,
  },
  {
    id: 'T-3',
    name: 'T-90M Proryv',
    category: 'tanks',
    originalPrice: 210000000,
    discount: 12,
    image: 'https://placehold.co/600x400/d63384/ffffff?text=T-90M',
    description: 'ปรับปรุงระบบยิงและเกราะ เพิ่มความอยู่รอดสนามรบ',
    inStock: true,
    rating: 4.3,
  },
  {
    id: 'T-4',
    name: 'Type 99A',
    category: 'tanks',
    originalPrice: 230000000,
    discount: 10,
    image: 'https://placehold.co/600x400/0ca678/ffffff?text=Type+99A',
    description: 'รถถังหลักสมรรถนะสูง พร้อมระบบควบคุมการยิงทันสมัย',
    inStock: false,
    rating: 4.2,
  },
];
