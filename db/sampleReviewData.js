const reviewData = [];


const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
// const getRandomFloat = (min, max) => (Math.random() * ((max - min) + 1)) + min;

const repeat = () => {
  // const reviewObjects = [];
  const usernames = ['johnny', 'sara', 'superman', 'batman', 'shredder', 'helen', 'lewinthall', 'heironymous', 'jmarkey', 'iggywiggy', 'MerMan'];
  const reviewText = ['The manufacturer sent a defective product that had outdated software and therefore was not able to connect to the internet and be set up. The manufacturer refused to take ownership or even offer any discount for the inconvenience. Huge lack of support by TCL.', 'wow, what an amazing product.  I\'m blown away.  I would buy a hundred times if I could afford it', 'ew.  what were they thinking when they made this?  horrible quality and terrible customer service', 'this was ok.  did the job, but wasn\'t as great as they made it sound', 'great product, but shipping took fooreeeeevverrrr', 'highly recommend this'];
  const headers = ['"You buy cheap, you buy twice"', 'Started off strong....aaaaaaand failed :( *UPDATES', 'So cool!', 'Radical', 'I\'m so pissed', 'Don\'t by this product...', 'Ehh this was ok'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  for (let i = 0; i < 500; i += 1) {
    const obj = {
      product_id: i % 100,
      username: usernames[getRandomInt(0, usernames.length - 1)],
      text: reviewText[getRandomInt(0, reviewText.length - 1)],
      rating: getRandomInt(0, 5),
      header: headers[getRandomInt(0, headers.length - 1)],
      date: `${months[getRandomInt(0, months.length - 1)]} ${getRandomInt(1, 31)}, ${getRandomInt(2000, 2018)}`,
    };
    reviewData.push(obj);
  }
  // reviewData = JSON.stringify(reviewObjects).split('},').join('},\n');
};

repeat();

exports.reviewData = reviewData;
