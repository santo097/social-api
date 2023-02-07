import { sequelize } from '../Utilities/Database.js';
import {DataTypes} from 'sequelize';

export const Pais = sequelize.define("pais", {
    pais:{
        type:DataTypes.STRING,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN,
        allowNull:false    
    }
});