import db from "../index.js";

const furnitureSchema = db.Schema({
	title: { type: String, required: true, maxLength: 50 },
	image: String,
	description: String,
	quantity: { type: Number, required: true },
	category_id: { type: Number, required: true },
});

const Furniture = db.model("furnitures", furnitureSchema);

export default Furniture;
