import { DataTypes } from 'sequelize';
import { sequelize } from '../Utilities/Database.js';

export const Ciudad = sequelize.define("ciudad", 
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        ciudad:{
            type:DataTypes.STRING,
            allowNull:false
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    });