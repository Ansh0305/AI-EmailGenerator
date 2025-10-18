const OpenAi = require("openai");

const openai = new openai.OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});
module.exports = openai;
