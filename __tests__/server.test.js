const request = require("supertest");
const app = require("../server"); // Import the Express app

describe("GET /api/events", () => {
  it("should return a JSON response with event data", async () => {
    const response = await request(app).get("/api/events");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Event List");
    expect(response.body).toHaveProperty("events");
    expect(Array.isArray(response.body.events)).toBe(true);
  });
});
