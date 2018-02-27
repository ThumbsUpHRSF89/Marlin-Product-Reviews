const tvData = [
  {
    id: 75,
    name: 'Sony-X',
    category: 'TV',
    image_url: 'https://goo.gl/images/WnZqdY',
    rating: 0,
    numberOfReviews: 254,
  },
  {
    id: 76,
    name: 'Vizio-B',
    category: 'TV',
    image_url: 'https://goo.gl/images/aw6khe',
    rating: 3,
    numberOfReviews: 573,
  },
  {
    id: 77,
    name: 'Philips-V',
    category: 'TV',
    image_url: 'https://goo.gl/images/BFRLPi',
    rating: 5,
    numberOfReviews: 733,
  },
  {
    id: 78,
    name: 'Samsung-M',
    category: 'TV',
    image_url: 'https://goo.gl/images/t4HW6Q',
    rating: 0,
    numberOfReviews: 373,
  },
  {
    id: 79,
    name: 'TCL-undefined',
    category: 'TV',
    image_url: 'https://goo.gl/images/6wpBKq',
    rating: 3,
    numberOfReviews: 125,
  },
  {
    id: 80,
    name: 'LG-X',
    category: 'TV',
    image_url: 'https://goo.gl/images/myL1tv',
    rating: 3,
    numberOfReviews: 98,
  },
  {
    id: 81,
    name: 'undefined-B',
    category: 'TV',
    image_url: 'https://goo.gl/images/7NmS2A',
    rating: 0,
    numberOfReviews: 714,
  },
  {
    id: 82,
    name: 'Sony-V',
    category: 'TV',
    image_url: 'https://goo.gl/images/CNzaV1',
    rating: 1,
    numberOfReviews: 338,
  },
  {
    id: 83,
    name: 'Vizio-M',
    category: 'TV',
    image_url: 'https://goo.gl/images/ypwmt1',
    rating: 3,
    numberOfReviews: 100,
  },
  {
    id: 84,
    name: 'Philips-undefined',
    category: 'TV',
    image_url: 'https://goo.gl/images/RoVfZb',
    rating: 3,
    numberOfReviews: 700,
  },
  {
    id: 85,
    name: 'Samsung-X',
    category: 'TV',
    image_url: 'https://goo.gl/images/qJgKz5',
    rating: 1,
    numberOfReviews: 375,
  },
  {
    id: 86,
    name: 'TCL-B',
    category: 'TV',
    image_url: 'https://goo.gl/images/u68PL7',
    rating: 4,
    numberOfReviews: 594,
  },
  {
    id: 87,
    name: 'LG-V',
    category: 'TV',
    image_url: 'https://goo.gl/images/er6emf',
    rating: 1,
    numberOfReviews: 317,
  },
  {
    id: 88,
    name: 'undefined-M',
    category: 'TV',
    image_url: 'https://goo.gl/images/7Rq9BV',
    rating: 2,
    numberOfReviews: 498,
  },
  {
    id: 89,
    name: 'Sony-undefined',
    category: 'TV',
    image_url: 'https://goo.gl/images/ZGqiKk',
    rating: 1,
    numberOfReviews: 474,
  },
  {
    id: 90,
    name: 'Vizio-X',
    category: 'TV',
    image_url: 'https://goo.gl/images/qHFMdA',
    rating: 1,
    numberOfReviews: 398,
  },
  {
    id: 91,
    name: 'Philips-B',
    category: 'TV',
    image_url: 'https://goo.gl/images/u9Q8DR',
    rating: 3,
    numberOfReviews: 765,
  },
  {
    id: 92,
    name: 'Samsung-V',
    category: 'TV',
    image_url: 'https://goo.gl/images/aVSsYn',
    rating: 5,
    numberOfReviews: 291,
  },
  {
    id: 93,
    name: 'TCL-M',
    category: 'TV',
    image_url: 'https://goo.gl/images/oj4pSr',
    rating: 5,
    numberOfReviews: 861,
  },
  {
    id: 94,
    name: 'LG-undefined',
    category: 'TV',
    image_url: 'https://goo.gl/images/SSJw9D',
    rating: 3,
    numberOfReviews: 323,
  },
  {
    id: 95,
    name: 'undefined-X',
    category: 'TV',
    image_url: 'https://goo.gl/images/88vHa9',
    rating: 1,
    numberOfReviews: 510,
  },
  {
    id: 96,
    name: 'Sony-B',
    category: 'TV',
    image_url: 'https://goo.gl/images/JoWhVh',
    rating: 0,
    numberOfReviews: 885,
  },
  {
    id: 97,
    name: 'Vizio-V',
    category: 'TV',
    image_url: 'https://goo.gl/images/18VjJX',
    rating: 4,
    numberOfReviews: 452,
  },
  {
    id: 98,
    name: 'Philips-M',
    category: 'TV',
    image_url: 'https://goo.gl/images/fVmpkb',
    rating: 5,
    numberOfReviews: 719,
  },
  {
    id: 99,
    name: 'Samsung-undefined',
    category: 'TV',
    image_url: 'https://goo.gl/images/RtURx5',
    rating: 2,
    numberOfReviews: 962,
  },
  {
    id: 25,
    name: 'Panasonic RP-HJE120-PPK In-Ear Stereo Earphones, Black',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/31T7cG1RxpL.jpg'
  },
  {
    id: 26,
    name: 'Mpow 059 Bluetooth Headphones Over Ear, Hi-Fi Stereo Wireless Headset, Foldable, Soft Memory-Protein Earmuffs, w/ Built-in Mic and Wired Mode for PC/ Cell Phones/ TV',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61y0yb%2B3pqL._SL1280_.jpg'
  },
  {
    id: 27,
    name: 'Halcent 2 Pack Premium Wired Earphones Noise Cancelling Earbuds Headphones with Remote & Mic In-Ear Headphones for iPhone, Samsung, iPad, iPod, Nokia, LG, HTC etc (White)',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61cFs0XjzFL._SL1500_.jpg'
  },
  {
    id: 28,
    name: 'Halcent 2 Pack Stereo Sound Earphones,Noise Cancelling Headphones with Microphone,Stylish Dynamic Rope Wired Earbuds for iPhone, Samsung, iPad, iPod, Nokia, LG, HTC etc(Black & Red)',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/71dCtpr8REL._SL1500_.jpg'
  },
  {
    id: 29,
    name: 'Earbuds, HokoAcc In-Ear Headphones Noise Isolation Headsets Heavy Bass Earphones with Microphone for iPhone Samsung iPad and Most Android Phones',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51vWsEvnVJL._SL1050_.jpg'
  },
  {
    id: 30,
    name: 'Mpow Flame Bluetooth Headphones Waterproof IPX7, Wireless Earbuds Sport, Richer Bass HiFi Stereo In-Ear Earphones w/ Mic, Case, 7-9 Hrs Playback Noise Cancelling Headsets (Comfy & Fast Pairing)',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61GIxxfDvKL._SL1280_.jpg'
  },
  {
    id: 31,
    name: 'Mpow Flame Bluetooth Headphones Waterproof IPX7, Wireless Earbuds Sport, Richer Bass HiFi Stereo In-Ear Earphones w/ Mic, Case, 7-9 Hrs Playback Noise Cancelling Headsets (Comfy & Fast Pairing)',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61VcjWqmBSL._SL1280_.jpg'
  },
  {
    id: 32,
    name: 'Mpow Flame Bluetooth Headphones Waterproof IPX7, Wireless Earbuds Sport, Richer Bass HiFi Stereo In-Ear Earphones w/ Mic, Case, 7-9 Hrs Playback Noise Cancelling Headsets (Comfy & Fast Pairing)',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61L2yUAOKeL._SL1280_.jpg'
  },
  {
    id: 33,
    name: 'Mpow Flame Bluetooth Headphones Waterproof IPX7, Wireless Earbuds Sport, Richer Bass HiFi Stereo In-Ear Earphones w/ Mic, Case, 7-9 Hrs Playback Noise Cancelling Headsets (Comfy & Fast Pairing)',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61UtzTmRkmL._SL1280_.jpg'
  },
  {
    id: 34,
    name: 'On Ear Headphones, Vogek Lightweight and Foldable Bass Headphones with Volume Control and Microphone-Black',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/71es1iBWE-L._SL1500_.jpg'
  },
  {
    id: 35,
    name: 'Vogek On Ear Headphones Lightweight and Foldable Bass Headphones with Volume Control and Microphone - Blue',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/71HavkRJuOL._SL1500_.jpg'
  },
  {
    id: 36,
    name: 'On Ear Headphones, Vogek Lightweight and Foldable On Ear Headphones with 1.5M Tangle-Free Cord and Microphone - Cyan',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/71WoLs1CO3L._SL1500_.jpg',
  },
  {
    id: 37,
    name: 'Vogek On Ear Headphones Lightweight and Foldable Bass Headphones with Volume Control and Microphone (Gold-White)',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/71R7jKxQxXL._SL1500_.jpg'
  },
  {
    id: 38,
    name: 'On Ear Headphones, Vogek Lightweight and Foldable On Ear Headphones with 1.5M Tangle-Free Cord and Microphone - Red',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/71VJaOr3gnL._SL1500_.jpg'
  },
  {
    id: 39,
    name: 'Bluetooth Headphones, Otium Best Wireless Sports Earphones w/ Mic IPX7 Waterproof HD Stereo Sweatproof In Ear Earbuds for Gym Running Workout 8 Hour Battery Noise Cancelling Headsets',
    category: 'headphones',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61a9fpKy3qL._SL1500_.jpg',
  },
  {
    id: 40,
    name: 'Purina Cat Chow Naturals Indoor Dry Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81XKRgX0CbL._SL1500_.jpg'
  },
  {
    id: 41,
    name: 'Meow Mix Tender Centers Dry Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/71e%2BOBGQk5L._SL1300_.jpg'
  },
  {
    id: 42,
    name: '9Lives Dry Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81tMyZtpHRL._SL1300_.jpg'
  },
  {
    id: 43,
    name: 'Purina Friskies Surfin\' & Turfin\' Favorites Dry Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81iY6Jf-QHL._SL1500_.jpg'
  },
  {
    id: 44,
    name: 'Purina Friskies Savory Shreds Adult Wet Cat Food Variety Pack',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81iY6Jf-QHL._SL1500_.jpg'
  },
  {
    id: 45,
    name: 'Purina ONE Tender Selects Blend With Real Chicken Dry Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81xfG2foxVL._SL1500_.jpg'
  },
  {
    id: 46,
    name: 'Purina Fancy Feast Medleys Tuscany Collection Gourmet Wet Cat Food Variety Pack- (24) 3 oz. Cans',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81mbzXlXN8L._SL1500_.jpg'
  },
  {
    id: 47,
    name: 'Purina Friskies Tasty Treasures Variety Pack Wet Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/91i3WownEhL._SL1500_.jpg'
  },
  {
    id: 48,
    name:'IAMS Proactive Health Specialized Care Adult Dry Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/818NOD6F1XL._SL1500_.jpg'
  },
  {
    id: 49,
    name: 'BLUE Wilderness High Protein Grain Free Adult Dry Cat Food',
    category: 'cat food',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/91Ry9TwrYkL._SL1500_.jpg'
  }
];

const allProductData = [];

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getRandomFloat = (min, max) => (Math.random() * ((max - min) + 1)) + min;

// function to grab url from existing data object array
// using const but does it matter that i push into it and 'change' it...?
const urlGetter = () => {
  const tvImageURLs = [];
  for (let i = 0; i < tvData.length; i += 1) {
    tvImageURLs.push(tvData[i].image_url);
  }
};

const repeat = () => {
  const objects = [];
  const letters = ['X', 'B', 'V', 'M'];
  const tvBrands = ['Sony', 'Vizio', 'Philips', 'Samsung', 'TCL', 'LG'];
  const tvImageUrls = ['https://goo.gl/images/WnZqdY', 'https://goo.gl/images/aw6khe', 'https://goo.gl/images/BFRLPi', 'https://goo.gl/images/t4HW6Q', 'https://goo.gl/images/6wpBKq', 'https://goo.gl/images/myL1tv', 'https://goo.gl/images/7NmS2A', 'https://goo.gl/images/CNzaV1', 'https://goo.gl/images/ypwmt1', 'https://goo.gl/images/RoVfZb', 'https://goo.gl/images/qJgKz5', 'https://goo.gl/images/u68PL7', 'https://goo.gl/images/er6emf', 'https://goo.gl/images/7Rq9BV', 'https://goo.gl/images/ZGqiKk', 'https://goo.gl/images/qHFMdA', 'https://goo.gl/images/u9Q8DR', 'https://goo.gl/images/aVSsYn', 'https://goo.gl/images/oj4pSr', 'https://goo.gl/images/SSJw9D', 'https://goo.gl/images/88vHa9', 'https://goo.gl/images/JoWhVh', 'https://goo.gl/images/18VjJX', 'https://goo.gl/images/fVmpkb', 'https://goo.gl/images/RtURx5'];
  for (let i = 0; i < 25; i += 1) {
    const obj = {
      // plus 75 for product numbers 75 - 99
      id: i + 75,
      name: `${tvBrands[i % 6]}-${letters[i % 4]}`,
      category: 'TV',
      image_url: tvImageUrls[i % 25],
      rating: getRandomInt(0, 5),
      numberOfReviews: getRandomInt(0, 1000),
    };
    objects.push(obj);
  }
  return JSON.stringify(objects).split(',').join(',\n');
};

repeat();

exports.tvData = tvData;
