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
      name: `${tvBrands[i % 7]}-${letters[i % 5]}`,
      category: 'TV',
      image_url: tvImageUrls[i % 26],
      rating: getRandomInt(0, 5),
      numberOfReviews: getRandomInt(0, 1000),
    };
    objects.push(obj);
  }
  return JSON.stringify(objects).split(',').join(',\n');
};

repeat();
