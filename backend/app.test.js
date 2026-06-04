import request from "supertest";
import app from "./index";

describe("GET /", () => {
  test("should return API Working", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});