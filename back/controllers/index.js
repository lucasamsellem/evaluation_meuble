import Furniture from "../db/models/Furniture.js";

export const publicController = {
	dashboard: async (req, res) => {
		const data = await Furniture.find({});
		res.status(200).json(data);
	},

	materialDetail: (req, res) => {
		const { type } = req.params;
		res.status(200).send(`Détail du matériel: ${type}`);
	},

	getLogin: (req, res) => {
		res.status(200).send("Page de connexion admin");
	},

	postLogin: (req, res) => {
		res.status(200).json({ message: "Tentative de connexion reçue" });
	},
};

export const adminController = {
	stats: (req, res) => {
		res.status(200).json({ message: "Statistiques des meubles" });
	},

	addFurniture: (req, res) => {
		res.status(201).json({ message: "Meuble ajouté (simulation)" });
	},

	changeQuantity: (req, res) => {
		res.status(200).json({ message: "Quantité mise à jour (simulation)" });
	},
};
