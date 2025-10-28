import { Router } from "express";
import { publicController, adminController } from "../controllers/index.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Router();

// --- PUBLIC ---

// get / dashboard (liste meubles)
// get / détail matériel

// get / login
// post / login

router.get("/", publicController.dashboard);
router.post("/login", publicController.postLogin);

// --- ADMIN --- (Bien vérifier que L'ADMIN EST CONNECTÉ)

// get / statistiques sur les meubles
// post / ajout meuble
// put / modification quantité meuble

router.get("/stats", isAuthenticated, adminController.stats);
router.post("/furniture/", isAuthenticated, adminController.addFurniture);
router.put("/furniture/", isAuthenticated, adminController.changeQuantity);

// --- ERREURS ---

// * / fallback universel

export default router;
