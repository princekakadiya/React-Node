import Sequelize from "sequelize";

// database connection
const sequelize = new Sequelize("health_product_site", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

sequelize
    .authenticate()
    .then(() => {
        console.log("connection successful for mysql");
    })
    .catch((error) => {
        console.log(error);
    });

export default sequelize;
