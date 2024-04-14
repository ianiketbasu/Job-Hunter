// import mongoose from "mongoose";

// export const dbConnection = () => {
//     mongoose.connect((process.env.MONGO_URL), {
//         dbName: "JOB_HUNTER"
//     }).then(() => {
//         console.log(`DB connection successfull`)
//     }).catch((err) => {
//         console.log(`DB connection field :( , err : ${err}`)
//     })
// }

import mongoose from "mongoose";


const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/JOB_HUNTER`
    );
    console.log(
      `\nMongoDB connected !! \nDB HOST :  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB connection error`, error);
    process.exit(1);
  }
};

export default dbConnection;
