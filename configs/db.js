const mongoose = require("mongoose");

const connectToDB = async () => {
  if (mongoose?.connections && mongoose.connections[0]?.readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect To DB Successfully :))");
    return true;
  } catch (err) {
    console.log("DB Connection has error ->", err);
  }
};

export default connectToDB;
