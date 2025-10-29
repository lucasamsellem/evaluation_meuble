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

	notFoundError: async (req, res) => {
		return res.status(404).json({ error: "Cette page n'existe pas" });
	},
};

export const adminController = {
	stats: (req, res) => {
		res.status(200).json({ message: "Statistiques des meubles" });
	},

	addFurniture: async (req, res) => {
		try {
			const { title, image, category, materials } = req.body;

			const newFurniture = new Furniture({
				title,
				image,
				category,
				materials,
				quantity: 1,
			});

			await newFurniture.save();
			res.status(201).json({ message: "Meuble ajouté (simulation)" });
		} catch (error) {
			return res
				.status(500)
				.json({
					error: "Erreur lors de l'ajout du meuble",
					detail: error.message,
				});
		}
	},

	changeQuantity: (req, res) => {
		console.log(req.body);
		res.status(200).json({ message: "Quantité mise à jour (simulation)" });
	},
};
