import { DataTypes } from "sequelize";
import { sequelize } from '../Utilities/Database.js';

export const TipoDocumento = sequelize.define("tipoDocumento",{
    tipoDocumento:{
        type:DataTypes.STRING,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});