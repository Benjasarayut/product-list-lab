// หมวดหมู่
export const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'stealth', name: 'ล่องหน (Stealth)' },
  { id: 'multirole', name: 'หลายบทบาท (Multirole)' },
  { id: 'air-superiority', name: 'ครองอากาศ' },
  { id: 'trainer', name: 'ฝึก' },
];

// สินค้าตัวอย่าง (มี originalPrice + discount + rating + inStock)
export const products = [
  {
    id: 1,
    name: 'F-35A Lightning II',
    category: 'stealth',
    originalPrice: 3900000000,   // ~฿ (ตัวอย่าง)
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
    inStock: false,              // โชว์ป้าย "หมด"
    rating: 4.2,
  },
];