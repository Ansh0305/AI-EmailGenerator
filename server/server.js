const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});

process.once("unhandledRejection", (error) => {
  console.error("Unhandled rejection");
  process.exit(1);
});
