const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('Test GET /hello with no name', async function () {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=10L')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {"initNum":10, "initUnit":"L", "returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"});
      });
  });

  test('Test GET /hello with no name', async function () {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=32g')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body, 'invalid unit');
      });
  });

  test('Test GET /hello with no name', async function () {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4kg')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body, 'invalid number');
      });
  });

  test('Test GET /hello with no name', async function () {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body, "invalid number and unit");
      });
  });

  test('Test GET /hello with no name', async function () {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=kg')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {"initNum":1, "initUnit":"kg", "returnNum":2.20462,"returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"});
      });
  });
  
});
