import Furniture from "../db/models/Furniture.js";
import User from "../db/models/User.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

console.log(process.env);

export const publicController = {
	dashboard: async (req, res) => {
		const data = await Furniture.find({});
		res.status(200).json(data);
	},

	postLogin: async (req, res) => {
		try {
			const { username, password } = req.body;

			const user = await User.findOne({ username });
			console.log(user);

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

			const token = jwt.sign(
				{
					userId: user._id,
					username: user.username,
				},
				process.env.JWT_SECRET,
				{ expiresIn: "24h" }
			);

			res.json({ token, username: user.username });
		} catch (err) {
			res.status(401).json({ error: err.message });
		}
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
		console.log(req.body);
		res.status(200).json({ message: "Quantité mise à jour (simulation)" });
	},
};
