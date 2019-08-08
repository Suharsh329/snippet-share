import app from '../src/index';
import * as chai from 'chai';
import * as request from 'supertest';

const expect = chai.expect;

delete require.cache[require.resolve('../src/index')];

describe('User API Tests', () => {
  it('should get all users', (done) => {
    request(app).get('/users')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err: Error, res: any) => {
        if (err) done(err);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a user by id', (done) => {
    request(app).get('/users/1')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err: Error, res: any) => {
        if (err) done(err);
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('John Doe');
        done();
      });
  });

  it("should return not found for a non existent user", (done) => {
    request(app).get("/users/10")
      .set("Accept", "application/json")
      .end((err: Error, res: any) => {
        if (err) done(err);
        expect(404);
        done();
      });
  });

  it("should create a user", (done) => {
    request(app).post("/users")
      .type('form')
      .send({ name: 'Jane Doe', username: 'jane123', email: 'jane@email.com', password: 'password' })
      .set("Accept", "application/json")
      .end((err: Error, res: any) => {
        if (err) done(err);
        expect(201);
        done();
      });
  });

  it("should not create a user without email or username", (done) => {
    request(app).post("/users")
      .type('form')
      .send({ name: 'Jane Doe', username: 'jane123', password: 'password' })
      .set("Accept", "application/json")
      .end((err: Error, res: any) => {
        if (err) done(err);
        expect(404);
        done();
      });
  });

  it("should update user's email id", (done) => {
    request(app).patch("/users/1")
      .type('form')
      .send({ email: 'john123@gmail.com' })
      .set("Accept", "application/json")
      .end((err: Error, res: any) => {
        if (err) done(err);
        expect(200);
        done();
      });
  });

  it("should delete specified user", (done) => {
    request(app).delete("/users/2")
      .set("Accept", "application/json")
      .end((err: Error, res: any) => {
        if (err) done(err);
        expect(204);
        done();
      });
  });
});
