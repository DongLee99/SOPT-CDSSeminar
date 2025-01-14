import mongoose from "mongoose";
import Review from "../../models/Review";
import config from "../../config";

const connectDB = async () => {
  try {
      await mongoose.connect(config.mongoURI);

      mongoose.set('autoCreate', true);

      console.log("Mongoose Connected ...");
      Review.createCollection().then(function (Collection) {
        console.log("Review Collection is created!");
      })

  } catch (err: any) {
      console.error(err.message);
      process.exit(1);
  }
};

export default connectDB;