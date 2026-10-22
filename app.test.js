
const test = require("node:test");
const assert = require("node:assert/strict");
const createApp = require("./app");

test("App returns a successful response", async (t) => {
  const server = createApp();

  await new Promise((resolve) => server.listen(0, resolve));

  t.after(() => {
    server.close();
  });

  const response = await fetch(
    `http://localhost:${server.address().port}`
  );

  assert.equal(response.status, 200);

  const data = await response.json();

  assert.equal(data.status, "success");
  assert.ok(data.message.includes("CI/CD Pipeline"));
});
