import { Router } from "express";
import { publicController, adminController } from "../controllers/index.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
	furnitureValidation,
	quantityValidation,
} from "../middlewares/formValidation.js";

const router = Router();

// --- PUBLIC ---

// get / dashboard (liste meubles)
// post / login

router.get("/", publicController.dashboard);
router.post("/login", publicController.postLogin);

// --- ADMIN --- (Bien vérifier que L'ADMIN EST CONNECTÉ)

// post / ajout meuble
// put / modification quantité meuble

router.post(
	"/furniture/",
	isAuthenticated,
	furnitureValidation,
	adminController.addFurniture
);
router.put(
	"/furniture/",
	isAuthenticated,
	quantityValidation,
	adminController.changeQuantity
);

// --- ERREURS ---

router.all(/(.*)/, publicController.notFoundError);

// * / fallback universel

export default router;
