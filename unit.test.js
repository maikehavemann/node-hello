// based on: https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
const port = process.env.PORT || 3000;

const request = require('supertest')
const app = require('./server')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.text).toContain("zCX")
  })
})
