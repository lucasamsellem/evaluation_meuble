import db from "../index.js";

const materialSchema = db.Schema({
	name: { type: String, required: true, maxLength: 20 },
	type: String,
	provider: String,
});

const Material = db.model("furnitures", materialSchema);

export default Material;
