const sinon = require('sinon');
const chai = require('chai');
const  chaiHttp = require('chai-http');

const app = require('../../api/app');
const Users = require('../../database/models/Users');

const { accurateLoginRequest } = require('../mocks/userMocks')

chai.use(chaiHttp);

const { expect } = chai;

describe('Em caso de sucesso no método POST do endpoint /login', () => {
  let chaiHttpRes;

/*   before(async () => {
    sinon.stub(Users, 'findOne').resolves(loginResponseMock)
  })

  after(async () => {
    (Users.findOne).restore()
  }) */

  it('Deveria retornar o status code 200', async () => {
    chaiHttpRes = await chai.request(app).post('/login').send(accurateLoginRequest)
    const { status } = chaiHttpRes;
    expect(status).to.equal(200);
  })
})
