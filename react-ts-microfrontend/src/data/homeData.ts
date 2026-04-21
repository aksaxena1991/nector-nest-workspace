export type CategoryItem = {
  label: string
  hasChildren?: boolean
}

export type ProductItem = {
  id: number
  title: string
  price: number
  oldPrice?: number
  discount?: string
  rating: number
  reviews: number
  image: string
}

export const categoryMenu: CategoryItem[] = [
  { label: "Women's Fashion", hasChildren: true },
  { label: "Men's Fashion", hasChildren: true },
  { label: 'Electronics' },
  { label: 'Home & Lifestyle' },
  { label: 'Medicine' },
  { label: 'Sports & Outdoor' },
  { label: "Baby's & Toys" },
  { label: 'Groceries & Pets' },
  { label: 'Health & Beauty' },
]

export const flashSaleProducts: ProductItem[] = [
  {
    id: 1,
    title: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    discount: '-40%',
    rating: 4.5,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=900',
  },
  {
    id: 2,
    title: 'AK-900 Wired Keyboard',
    price: 960,
    oldPrice: 1160,
    discount: '-35%',
    rating: 4.2,
    reviews: 75,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900',
  },
  {
    id: 3,
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    discount: '-30%',
    rating: 4.8,
    reviews: 99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900',
  },
  {
    id: 4,
    title: 'RGB Comfort Gaming Chair',
    price: 375,
    oldPrice: 450,
    discount: '-25%',
    rating: 4.3,
    reviews: 90,
    image: 'https://images.unsplash.com/photo-1616628182509-6d40f27f7e53?w=900',
  },
]

export const browseCategories = [
  'Phones',
  'Computers',
  'SmartWatch',
  'Camera',
  'HeadPhones',
  'Gaming',
]
