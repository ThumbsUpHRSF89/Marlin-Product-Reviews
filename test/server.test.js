import $ from 'jquery';

const Server = require('../server/server.js');

describe('Server API Tests', () => {
  it('should receive get requests successfully', () => {
    $.get('/product/25', 25, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('data recieved from server to component', data);
        expect(data).toBe('');
      }
    });
  });
});
