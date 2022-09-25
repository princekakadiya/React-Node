import express from "express";
const router = express.Router();
import { productController } from "../controller";

router.post("/addproduct", productController.addProduct);
router.get("/getproduct", productController.getAllProduct);
router.patch("/updateproduct/:id", productController.updateProduct);
router.patch("/deleteproduct/:id", productController.deleteProduct);

export default router;
