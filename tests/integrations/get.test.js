test("Primeiro test", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(response.status).toBe(200);
  expect(responseBody.dependencies.database.version).toEqual(16.4);
});
