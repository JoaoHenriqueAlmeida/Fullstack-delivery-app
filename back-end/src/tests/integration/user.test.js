/* const sinon = require('sinon'); */
const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../../api/app')

const { accurateLoginRequest, loginResponseMock } = require('../mocks/userMocks') ;

app.use(chaiHttp);

const { expect } = chai;

describe('Em caso de sucesso no método POST do endpoint /login', () => {
  let chaiHttpRes;

  it('Deveria retornar o status code 200', async () => {
    chaiHttpRes = await request(app).post('/login').send(accurateLoginRequest)
    const { status } = chaiHttpRes;
    expect(status).to.equal(200);
  })
})

describe('Em caso de sucesso no método POST do endpoint /login', () => {

  it('Deveria retornar o nome e o cargo corretos', async () => {
    let chaiHttpRes = await request(app).post('/login').send(accurateLoginRequest)
    const { name, role } = chaiHttpRes.body;
    expect(name).to.equal(loginResponseMock.name);
    expect(role).to.equal(loginResponseMock.role);
  })
})

describe('Em caso de sucesso no método POST do endpoint /login', () => {

  it('Deveria retornar um token válido', async () => {
    let chaiHttpRes = await request(app).post('/login').send(accurateLoginRequest)
    const { token} = chaiHttpRes.body;
    expect(token).to.contain('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
  })
})