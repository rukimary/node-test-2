const axios = require("axios");
const fs = require("fs");
const path = require("path");
const http = require("http");

async function fetchAndWrite() {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    fs.writeFile(
      path.resolve(__dirname, "products.json"),
      JSON.stringify(data),
      "utf-8",
      (err) => {
        if (err) {
          throw err;
        }
        console.log(`Got some products`);
      }
    );
  } catch (error) {
    console.error(error);
  }
}

fetchAndWrite();

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.url === "/products") {
    response.write("Товары!");
  } else if (request.url === "/cart") {
    response.write("Корзина!");
  }

  response.end();
});

server.listen(3000);

// async function fetchAndWrite() {
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     const jsonData = JSON.stringify(response.data);

//     fs.writeFileSync("products.json", jsonData);

//     console.log("Products data has been written to file successfully!");
//   } catch (error) {
//     console.error("Error fetching products data or writing to file:", error);
//   }
// }

// const server = http.createServer((req, res) => {
//   if (req.url === "/fetch-products-and-save" && req.method === "GET") {
//     fetchAndWrite()
//       .then(() => {
//         res.writeHead(200);
//         res.end("Products data has been fetched and saved successfully!");
//       })
//       .catch((error) => {
//         res.writeHead(500);
//         res.end("Error fetching products data or writing to file: " + error);
//       });
//   } else {
//     res.writeHead(404);
//     res.end("Not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });
