require('dotenv').config()
var chai = require('chai');
chai.use(require('chai-http'));
chai.use(require('chai-as-promised'));
var expect = chai.expect
chai.should()
const Replay  = require('replay');
var Blink = require('../index.js')

describe('description', () => {
  var blink;
  before(() => {
    blink = new Blink('', '', {_token: process.env.BLINK_AUTH_TOKEN, _region_id: process.env.BLINK_REGION_ID, _network_id:process.env.BLINK_NETWORK_ID});
    blink.setupSystem()
  })
  it('should get clients', () => {
    return blink.getClients().should.eventually.have.deep.property('clients')
  });
});
