import bagProduct1 from '../assets/images/products/bags/bag-product-01.jpg'
import bagProduct2 from '../assets/images/products/bags/bag-product-02.jpg'
import bagProduct3 from '../assets/images/products/bags/bag-product-03.webp'
import bagProduct4 from '../assets/images/products/bags/bag-product-04.webp'
import bagProduct5 from '../assets/images/products/bags/bag-product-05.webp'
import manProduct1 from '../assets/images/products/men/man-product-01.jpg'
import manProduct2 from '../assets/images/products/men/man-product-02.jpg'
import manProduct3 from '../assets/images/products/men/man-product-03.jpg'
import manProduct4 from '../assets/images/products/men/man-product-04.jpg'
import manProduct5 from '../assets/images/products/men/man-product-05.png'
import manProduct6 from '../assets/images/products/men/man-product-06.webp'
import manProduct7 from '../assets/images/products/men/man-product-07.jpg'
import manProduct8 from '../assets/images/products/men/man-product-08.jpg'
import manProduct9 from '../assets/images/products/men/man-product-09.jpg'
import shoesProduct1 from '../assets/images/products/shoes/shoes-product-01.webp'
import shoesProduct2 from '../assets/images/products/shoes/shoes-product-02.webp'
import shoesProduct3 from '../assets/images/products/shoes/shoes-product-03.webp'
import shoesProduct4 from '../assets/images/products/shoes/shoes-product-04.webp'
import shoesProduct5 from '../assets/images/products/shoes/shoes-product-05.webp'
import watchProduct1 from '../assets/images/products/watches/watch-product-01.jpg'
import watchProduct2 from '../assets/images/products/watches/watch-product-02.jpg'
import watchProduct3 from '../assets/images/products/watches/watch-product-03.webp'
import watchProduct4 from '../assets/images/products/watches/watch-product-04.webp'
import watchProduct5 from '../assets/images/products/watches/watch-product-05.webp'
import watchProduct6 from '../assets/images/products/watches/watch-product-06.webp'
import womanProduct1 from '../assets/images/products/women/woman-product-01.jpg'
import womanProduct2 from '../assets/images/products/women/woman-product-02.jpg'
import womanProduct3 from '../assets/images/products/women/woman-product-03.jpg'
import womanProduct4 from '../assets/images/products/women/woman-product-04.jpg'
import womanProduct5 from '../assets/images/products/women/woman-product-05.jpg'
import womanProduct6 from '../assets/images/products/women/woman-product-06.jpg'
import womanProduct7 from '../assets/images/products/women/woman-product-07.jpg'
import womanProduct8 from '../assets/images/products/women/woman-product-08.jpg'
import womanProduct9 from '../assets/images/products/women/woman-product-09.jpg'
import womanProduct10 from '../assets/images/products/women/woman-product-10.jpg'
import womanProduct11 from '../assets/images/products/women/woman-product-11.jpg'

const ALL_PRODUCTS = [
  {
    id: 'bag_product_1',
    name: 'Mini ??anta',
    description: 'Suni deri el ??antas??',
    image: bagProduct1,
    price: 70,
  },
  {
    id: 'bag_product_2',
    name: 'Siyah ??anta',
    description: 'Siyah Suni deri tote ??anta',
    image: bagProduct2,
    price: 90,
  },
  {
    id: 'bag_product_3',
    name: '??anta',
    description: 'Suni kuma?? ??anta',
    image: bagProduct3,
    price: 135,
  },
  {
    id: 'bag_product_4',
    name: 'Geni?? ??anta',
    description: 'Tote suni deri ??anta',
    image: bagProduct4,
    price: 110,
  },
  {
    id: 'bag_product_5',
    name: 'K??????k Boy ??anta',
    description: 'Suni deri el ??antas??',
    image: bagProduct5,
    price: 115,
  },
  {
    id: 'man_product_1',
    name: 'Pantolon',
    description: 'D??z kesim pamuklu pantolon',
    image: manProduct1,
    price: 110,
  },
  {
    id: 'man_product_2',
    name: 'Herschel Modas??',
    description: 'Erkek Giyim Modas??',
    image: manProduct2,
    price: 95,
  },
  {
    id: 'man_product_3',
    name: 'Beyaz Basic Ti????rt',
    description: 'Beyaz Koton Rahat Kesim Ti????rt',
    image: manProduct3,
    price: 165,
  },
  {
    id: 'man_product_4',
    name: 'Siyah Ti????rt',
    description: 'Siyah renk basic ti????rt',
    image: manProduct4,
    price: 140,
  },
  {
    id: 'man_product_5',
    name: 'Beyaz Pantolon',
    description: 'Beyaz d??z pa??a pantolon',
    image: manProduct5,
    price: 80,
  },
  {
    id: 'man_product_6',
    name: 'G??mlek',
    description: 'Pamuklu regular g??mlek',
    image: manProduct6,
    price: 120,
  },
  {
    id: 'man_product_7',
    name: 'D??z Kesim Ti????rt',
    description: 'Basic pamuklu ti????rt',
    image: manProduct7,
    price: 75,
  },
  {
    id: 'man_product_8',
    name: 'Ti????rt',
    description: 'D??z kesim ti????rt',
    image: manProduct8,
    price: 210,
  },
  {
    id: 'man_product_9',
    name: 'Klasik Kesim Ti????rt',
    description: 'Pamuklu ti????rt',
    image: manProduct9,
    price: 90,
  },
  {
    id: 'shoes_product_1',
    name: 'Siyah Ayakkab??',
    description: 'Siyah klasik spor ayakkab??',
    image: shoesProduct1,
    price: 95,
  },
  {
    id: 'shoes_product_2',
    name: 'Gri Ayakkab??',
    description: 'Gri klasik spor ayakkab??',
    image: shoesProduct2,
    price: 90,
  },
  {
    id: 'shoes_product_3',
    name: 'Pembe Ayakkab??',
    description: 'Pembe klasik spor ayakkab??',
    image: shoesProduct3,
    price: 95,
  },
  {
    id: 'shoes_product_4',
    name: 'Siyah Sneakers',
    description: 'Siyah g??nl??k sneakers',
    image: shoesProduct4,
    price: 120,
  },
  {
    id: 'shoes_product_5',
    name: 'Gri Sneakers',
    description: 'Gri rahat tabanl?? g??nl??k sneakers',
    image: shoesProduct5,
    price: 100,
  },
  {
    id: 'watch_product_1',
    name: 'Yumu??ak Kay????l?? Saat',
    description: 'Suni yumu??ak kordonlu saat',
    image: watchProduct1,
    price: 90,
  },
  {
    id: 'watch_product_2',
    name: 'Saat',
    description: 'Klasik saat',
    image: watchProduct2,
    price: 85,
  },
  {
    id: 'watch_product_3',
    name: 'Saat',
    description: 'Klasik saat',
    image: watchProduct3,
    price: 220,
  },
  {
    id: 'watch_product_4',
    name: 'Beyaz Saat',
    description: 'Beyaz klasik saat',
    image: watchProduct4,
    price: 95,
  },
  {
    id: 'watch_product_5',
    name: 'Saat',
    description: 'Aksesuar, klasik saat',
    image: watchProduct5,
    price: 225,
  },
  {
    id: 'watch_product_6',
    name: 'Siyah Saat',
    description: 'Siyah klasik saat',
    image: watchProduct6,
    price: 205,
  },
  {
    id: 'woman_product_1',
    name: 'G??mlek',
    description: 'D??z pamuklu g??mlek',
    image: womanProduct1,
    price: 105,
  },
  {
    id: 'woman_product_2',
    name: 'Herschel Supply',
    description: 'Kad??n modas??',
    image: womanProduct2,
    price: 120,
  },
  {
    id: 'woman_product_3',
    name: 'Ti????rt',
    description: 'Kad??n rahat kesim ti????rt',
    image: womanProduct3,
    price: 85,
  },
  {
    id: 'woman_product_4',
    name: 'Klasik Kesim Tren??kot',
    description: 'Kad??n klasik model orta boy tren??kot',
    image: womanProduct4,
    price: 90,
  },
  {
    id: 'woman_product_5',
    name: 'Tulum',
    description: 'Tulum',
    image: womanProduct5,
    price: 135,
  },
  {
    id: 'woman_product_6',
    name: 'Boyunluk',
    description: 'Kad??n boyunluk',
    image: womanProduct6,
    price: 70,
  },
  {
    id: 'woman_product_7',
    name: 'Slim Kesim G??mlek',
    description: 'Slim kad??n pamuklu g??mlek',
    image: womanProduct7,
    price: 220,
  },
  {
    id: 'woman_product_8',
    name: 'Metalik Bask??l?? Par??alar',
    description: 'Metalik detaylar modas??',
    image: womanProduct8,
    price: 160,
  },
  {
    id: 'woman_product_9',
    name: 'G??mlek',
    description: 'Suni ipek rahat kesim g??mlek',
    image: womanProduct9,
    price: 180,
  },
  {
    id: 'woman_product_10',
    name: 'H??rka',
    description: 'Kad??n rahat kesim h??rka',
    image: womanProduct10,
    price: 145,
  },
  {
    id: 'woman_product_11',
    name: 'Kad??n Ofis Stili',
    description: 'Ofis modas??',
    image: womanProduct11,
    price: 200,
  },
]

export default ALL_PRODUCTS
