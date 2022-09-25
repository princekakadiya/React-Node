import sequelize from "../connection/sqlConnection";
import { DataTypes } from "sequelize";

const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: DataTypes.STRING,
        },
        Image: {
            type: DataTypes.STRING,
        },
        Price: {
            type: DataTypes.INTEGER,
        },
        Mechanism: {
            type: DataTypes.STRING,
        },
        Categories: {
            type: DataTypes.STRING,
        },
        Dosage: {
            type: DataTypes.STRING,
        },
        Packing: {
            type: DataTypes.STRING,
        },
        KeyIngredients: {
            type: DataTypes.STRING,
        },
        Indications: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "1",
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        deleted_at: {
            type: DataTypes.DATE,
            required: false,
        },
    },
    {
        timestamps: false,
    }
);

Product.sync({ alter: true }).then(() => {
    console.log("table created");
});

export default Product;
