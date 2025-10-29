export function furnitureValidation(req, res, next) {
	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).json({ error: "Données manquantes." });
	}

	const {
		body: { title, image, category, materials },
	} = req;

	const titleTrimmed = title.trim();

	if (titleTrimmed.length < 3 || titleTrimmed.length > 50) {
		return res.status(400).json({
			error: "Le titre doit contenir entre 3 et 50 caractères.",
		});
	}

	if (!image || !image.trim()) {
		return res.status(400).json({ error: "L'image est requise." });
	}

	const validCategories = ["Armoire", "Étagère"];
	if (!validCategories.includes(category)) {
		return res.status(400).json({ error: "Catégorie invalide." });
	}

	if (materials.length === 0) {
		return res
			.status(400)
			.json({ error: "Au moins un matériau est requis." });
	}

	next();
}

// Il peut potentiellement ajouter, puis appeler encore l'api
// pour les nouveaux meubles, ce qui mettra à jour le front
