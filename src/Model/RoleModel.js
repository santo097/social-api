import {DataTypes} from 'sequelize';
import { sequelize } from '../Utilities/Database.js';
export const Role = sequelize.define("role" , {
    role:{
        type:DataTypes.STRING,
        allowNull:false    
    },
    activo:{
        type:DataTypes.STRING,
        allowNull:false
    }
});