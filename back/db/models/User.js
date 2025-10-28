import db from "../index.js";

const userSchema = db.Schema({
	username: String,
	password: String,
	createdAt: Date,
});

const User = db.model("users", userSchema);

export default User;
