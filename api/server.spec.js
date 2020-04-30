const request = require("supertest");
const server = require("./server.js");

describe("server.js", function () {
  describe("GET /", function () {
    it("should return status code 200", function () {
      return request(server).get("/").expect(200);
    });
    it('should respond with {api: "winning"}', function () {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("winning");
        });
    });
  });
});
