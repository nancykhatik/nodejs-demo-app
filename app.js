
const http = require("http");

function createApp() {
  return http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        message: "Hello! My DevOps CI/CD Pipeline is working!",
        status: "success"
      })
    );
  });
}

if (require.main === module) {
  const server = createApp();

  server.listen(3000, () => {
    console.log("App running on http://localhost:3000");
  });
}

module.exports = createApp;
