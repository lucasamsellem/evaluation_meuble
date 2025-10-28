import Furniture from "./db/models/Furniture.js";
import User from "./db/models/User.js";
import data from "./data.js";
import dotenv from "dotenv";

dotenv.config();

async function insertFurnitures() {
	const { furnitures } = data;

	await Furniture.deleteMany({});
	await Furniture.insertMany(furnitures);
	console.log("Initial furnitures inserted");
	process.exit(0);
}

async function insertUser() {
	const { user } = data;

	await User.deleteMany({});
	await User.insertOne(user);
	console.log("Initial user inserted");
	process.exit(0);
}

insertUser();
