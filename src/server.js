const app = require("./app");

const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
};
start();
