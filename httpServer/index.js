const { createServer } = require("http");
const { readFileSync } = require("fs");
const url = require("url");
const replaceTemp = require("../modules/replaceTemplates");
// RETRIEVE DATA FILE
const data = readFileSync("../dev-data/data.json", "utf-8");
const parsedData = JSON.parse(data);

// RETRIEVE HTML TEMPLATES
const overviewTemplate = readFileSync("../templates/overview.html", "utf-8");
const productTemplate = readFileSync("../templates/product.html", "utf-8");
const cardTemplate = readFileSync("../templates/card.html", "utf-8");

// CREATE SERVER INSTANCE
const http = createServer((req, res) => {
  // RESPOND TO CLIENT REQUEST BASED ON ROUTES
  const { query, pathname } = url.parse(req.url, true);
  // OVERVIEW ROUTE
  if (pathname === "/" || pathname === "/overview") {
    const card = parsedData.map((item) => replaceTemp(cardTemplate, item));
    return res
      .writeHead(200, { "Content-Type": "text/html" })
      .end(overviewTemplate.replace("{%PRODUCT_CARDS%}", card));
    // PRODUCT ROUTE
  } else if (pathname === "/product") {
    const product = parsedData[query.id];
    const output = replaceTemp(productTemplate, product);
    return res.writeHead(200, { "Content-Type": "text/html" }).end(output);
    // API ROUTE
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" }).end(productData);
  } else {
    res
      .writeHead(404, {
        "Content-Type": "text/html",
      })
      .end("<h1>404 Not Found</h1>");
  }
});

http.listen(8000, () => {
  console.log("listening on port 8000");
});
