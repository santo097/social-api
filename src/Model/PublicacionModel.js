import { sequelize } from "../Utilities/Database.js";
import { DataTypes } from "sequelize";

export const Publicacion = sequelize.define("publicacione",{
    titulo:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN
    }
});

