import db from "../index.js";

const furnitureSchema = db.Schema({
	title: { type: String, required: true, maxLength: 50 },
	image: String,
	description: String,
	quantity: { type: Number, required: true },
	category: {
		name: { type: String, required: true },
	},
	materials: [
		{
			name: { type: String, required: true },
			type: { type: String, required: true },
			provider: { type: String, required: true },
		},
	],
});

const Furniture = db.model("furnitures", furnitureSchema);

export default Furniture;
