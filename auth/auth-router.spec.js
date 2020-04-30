const request = require("supertest");

const server = require("../api/server.js");
const Users = require("../models/users-model.js");

const db = require("../data/dbConfig.js");

const testReg = {
  first_name: "test",
  last_name: "test",
  username: "test",
  password: "test",
  email: "test",
  is_admin: true,
  cohort: "test",
};

const testLog = {
  username: "test",
  password: "test",
};

describe("auth-router", function () {
  describe("register", function () {
    beforeAll(async () => {
      await db("users").truncate();
    });
    it("should allow successful registration", function () {
      return request(server)
        .post("/api/register")
        .send(testReg)
        .then(async (res) => {
          expect(res.status).toBe(201);

          expect(res.body.id).toBeDefined();

          const id = res.body.id;
          const verify = await Users.findById(id);
          expect(verify).toBeTruthy();
        });
    });
  });
  describe("login", function () {
    it("should allow successful login", function () {
      return request(server)
        .post("/api/login")
        .send(testLog)
        .then(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.message).toBe("login successful");
        });
    });
    it("should disallow login with incorrect username or password", function () {
      return request(server)
        .post("/api/login")
        .send({ username: "username", password: "password" })
        .then(async (res) => {
          expect(res.status).toBe(401);
          expect(res.body.message).toBe("incorrect username or password");
        });
    });
  });
});
