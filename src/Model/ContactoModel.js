import { DataTypes } from 'sequelize';
import { sequelize } from '../Utilities/Database.js';

export const Contacto = sequelize.define("contacto", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    telefono:{
        type:DataTypes.STRING,
        allowNull:false
    },
    correo:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        }
        },
    sitioweb:{
        type:DataTypes.STRING,
        allowNull:true
    },
    activo:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});