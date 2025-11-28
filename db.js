const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://kanu134:ieA4inkwk8deGCBl@cluster0.9sc3dbq.mongodb.net/todoSG"; //SG- stephenGrider

const connection = mongoose.connect(mongoDB);

export { connection };
