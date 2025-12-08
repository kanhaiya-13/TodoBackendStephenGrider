const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://kanu134:ieA4inkwk8deGCBl@cluster0.9sc3dbq.mongodb.net/todoSG"; //SG- stephenGrider

// const connection = async () => {
//   await mongoose.connect(mongoDB);
// };

var connection;

async function connectMongoDB() {
  try {
    connection = mongoose.connect(mongoDB);
    console.log("Connected to Database!!");
  } catch (e) {
    console.log("Connection to Database failed ❌");
    console.log("Check Internet connection ❓");
    console.log(e);
  }
}
connectMongoDB();

module.exports = { connection };
