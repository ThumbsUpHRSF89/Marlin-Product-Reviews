const reviewData = [];


const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
// const getRandomFloat = (min, max) => (Math.random() * ((max - min) + 1)) + min;

const repeat = () => {
  // const reviewObjects = [];
  const usernames = ['johnny', 'sara', 'superman', 'batman', 'shredder', 'helen', 'lewin t hall', 'heironymous', 'jmarkey', 'iggywiggy', 'MerMan', 'German', 'Julius Romero', 'Angel Brigan', 'Chelsea Hamilton', 'Aaron Carter'];
  const reviewText = ['The manufacturer sent a defective product that had outdated software and therefore was not able to connect to the internet and be set up. The manufacturer refused to take ownership or even offer any discount for the inconvenience. Huge lack of support by TCL.', 'wow, what an amazing product.  I\'m blown away.  I would buy a hundred times if I could afford it', 'ew.  what were they thinking when they made this?  horrible quality and terrible customer service', 'this was ok.  did the job, but wasn\'t as great as they made it sound', 'great product, but shipping took fooreeeeevverrrr', 'highly recommend this', 'I don\'t think you can beat these for durability for the price. I wear these for 3-5 hours a day for commuting and workouts. The first pair lasted 8 months before the right channel started cutting in and out. This is from the tip wearing out over time which is expected. Other models in this price range would fail under heavy use as soon as a few weeks and certainly within 3 months. The sound quality is nothing to get excited about. When they are fit properly in your ears the sound is VERY mid-range heavy almost like an old AM radio and they also suppress external sound. I have no idea what the Wirecutter is talking about in their review by the way. For apps with EQ I cut the mids and boost the bass and treble to clear up the sound. Apps that don\'t have EQ are muddy and unlistenable. The noise suppression caused cramming an expanding earpice in your ear is disconcerting for phone calls. I find I can\'t hear my own voice and have to take the left earpiece out to hear myself. Still for the price, this is a solid option.'];
  const headers = ['"You buy cheap, you buy twice"', 'Started off strong....aaaaaaand failed :( *UPDATES', 'So cool!', 'Radical', 'I\'m so pissed', 'Don\'t by this product...', 'Ehh this was ok'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  for (let i = 0; i < 1000; i += 1) {
    const obj = {
      product_id: i % 100,
      username: usernames[getRandomInt(0, usernames.length - 1)],
      text: reviewText[getRandomInt(0, reviewText.length - 1)],
      rating: getRandomInt(2, 10) / 2,
      header: headers[getRandomInt(0, headers.length - 1)],
      date: `${months[getRandomInt(0, months.length - 1)]} ${getRandomInt(1, 31)}, ${getRandomInt(2000, 2018)}`,
    };
    reviewData.push(obj);
  }
  // reviewData = JSON.stringify(reviewObjects).split('},').join('},\n');
};

repeat();

exports.reviewData = reviewData;
