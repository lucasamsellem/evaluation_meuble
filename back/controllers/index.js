import Furniture from "../db/models/Furniture.js";
import User from "../db/models/User.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export const publicController = {
	dashboard: async (req, res) => {
		const data = await Furniture.find({});
		res.status(200).json(data);
	},

	postLogin: async (req, res) => {
		try {
			const { username, password } = req.body;

			const user = await User.findOne({ username });

			// Vérifications username & password

			if (!user) {
				return res
					.status(401)
					.json({ error: "Identifiants invalides" });
			}

			const hashedPassword = crypto
				.createHmac("sha256", process.env.PASSWORD_SECRET)
				.update(password)
				.digest("hex");

			if (user.password !== hashedPassword) {
				return res
					.status(401)
					.json({ error: "Identifiants invalides" });
			}

			// Création JWT

			const token = jwt.sign({
				userId: user._id,
				username: user.username,
			});
		} catch (err) {}
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
