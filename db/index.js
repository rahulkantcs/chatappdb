// db.js
const User = require("../model/user");

const Mongoose = require("mongoose")
const localDB = `mongodb://localhost:27017/role_auth`
exports.connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}

exports.getUser = async (id) => {
  const user = await User.findById(id)
  const container = {}
  container.username = user.username
  container.role = user.role
  container.id = user.id
  return container
} 



