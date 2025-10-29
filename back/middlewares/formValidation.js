import Furniture from '../db/models/Furniture.js';

export async function quantityValidation(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Données manquantes.' });
  }

  const {
    body: { id, updatedQuantity },
  } = req;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'ID de meuble invalide.' });
  }

  const furniture = await Furniture.findById(id);
  if (!furniture) {
    return res.status(404).json({ error: 'Meuble non trouvé.' });
  }

  if (furniture.quantity !== updatedQuantity - 1) {
    return res.status(409).json({
      error:
        'La quantité a été modifiée par un autre utilisateur. Veuillez recharger la page et réessayer.',
    });
  }

  next();
}

export function furnitureValidation(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Données manquantes.' });
  }

  console.log(req.body);

  const {
    body: { title, image, category, materials },
  } = req;

  const titleTrimmed = title.trim();

  if (titleTrimmed.length < 3 || titleTrimmed.length > 50) {
    return res.status(400).json({
      error: 'Le titre doit contenir entre 3 et 50 caractères.',
    });
  }

  if (!image || !image.trim()) {
    return res.status(400).json({ error: "L'image est requise." });
  }

  const validCategories = ['Armoire', 'Étagère'];
  if (!validCategories.includes(category.name)) {
    return res.status(400).json({ error: 'Catégorie invalide.' });
  }

  if (materials.length === 0) {
    return res.status(400).json({ error: 'Au moins un matériau est requis.' });
  }

  next();
}

// Il peut potentiellement ajouter, puis appeler encore l'api
// pour les nouveaux meubles, ce qui mettra à jour le front
