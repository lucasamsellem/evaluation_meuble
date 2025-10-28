import Furniture from "./db/models/Furniture.js";
import data from "./data.js";

async function insertFurnitures() {
	const { furnitures } = data;

	await Furniture.deleteMany({});
	await Furniture.insertMany(furnitures);
	console.log("Initial users inserted");
	process.exit(0);
}

insertFurnitures();
