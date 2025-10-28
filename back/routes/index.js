import { Router } from "express";
import { publicController, adminController } from "../controllers/index.js";

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

router.get("/stats", adminController.stats);
router.post("/furniture/", adminController.addFurniture);
router.put("/furniture/", adminController.changeQuantity);

// --- ERREURS ---

// * / fallback universel

export default router;
