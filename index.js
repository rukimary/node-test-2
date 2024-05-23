const axios = require("axios");
const fs = require("fs");
const path = require("path");
const http = require("http");

async function fetchProducts() {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    fs.writeFile(
      path.resolve(__dirname, "products.json"),
      JSON.stringify(data),
      "utf-8",
      (error) => {
        if (error) {
          throw error;
        }
        console.log(`Товары!`);
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const server = http.createServer(async (request, response) => {
  if (request.url === "/products") {
    try {
      const products = await fetchProducts();
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(products));
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Что-то пошло не так");
    }
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000/");
});
