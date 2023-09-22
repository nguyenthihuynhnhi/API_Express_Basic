const express = require("express");
const rootRouter = require("./src/routers/rootRouter");
const app = express();

const port = 3001;

const obj = {
  nhi: "dzú bư",
};

app.get("/", (req, res) => {
  res.send("OKE");
});

// express.json(): body => JSON
app.use(express.json());

app.use(rootRouter);

app.listen(port, () => {
  console.log(`Lắng nghe cổng http://localhost:${port} ...`);
  console.log(`Example app listening on port ${port}`);
});
