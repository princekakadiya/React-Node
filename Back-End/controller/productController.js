import express from "express";
import { Sequelize } from "sequelize";
import Product from "../model/Product";

const productController = {
    addProduct: async (req, res) => {
        try {
            const {
                Name,
                Image,
                Price,
                Mechanism,
                Categories,
                Dosage,
                Packing,
                KeyIngredients,
                Indications,
            } = req.body;

            const data = await Product.create({
                Name,
                Image,
                Price: `${Price}rs`,
                Mechanism,
                Categories,
                Dosage,
                Packing,
                KeyIngredients,
                Indications,
            });

            res.status(200).json({
                message: "Product added successfully",
                status: 200,
                data: data,
            });
        } catch (error) {
            res.status(400).json({ message: error.message, status: 400 });
        }
    },

    getAllProduct: async (req, res) => {
        try {
            const getAllProduct = await Product.findAll({
                where: { status: "1" },
            });
            res.status(200).json({
                message: "Product Fetching...",
                status: 200,
                data:
                    getAllProduct.length > 0
                        ? getAllProduct
                        : "new Product not found",
            });
        } catch (error) {
            res.status(400).json({ error: error.message, status: 400 });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { Price } = req.body;

            const data = await Product.update(
                { Price: Price, updated_at: Sequelize.fn("now") },
                { where: { id: id } }
            );

            res.status(200).json({
                message: "Product update successfully",
                status: 200,
            });
        } catch (error) {
            res.status(400).json({ error: error.message, status: 400 });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;

            const data = await Product.update(
                { deleted_at: Sequelize.fn("now"), status: "0" },
                { where: { id: id } }
            );

            const updatedData = await Product.findOne({
                where: { id: id },
            });

            if (updatedData.status === "0") {
                return res.status(200).json({
                    message: "Product already deleted from list",
                    status: 200,
                });
            }

            res.status(200).json({
                message: "Product delete successfully",
                status: 200,
            });
        } catch (error) {
            res.status(400).json({ error: error.message, status: 400 });
        }
    },
};

export default productController;
