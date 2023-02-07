import {sequelize} from '../Utilities/Database.js';
import { DataTypes } from 'sequelize';
import { Pais } from './PaisModel.js';
import { Ciudad } from './CiudadModel.js';

export const Direccion = sequelize.define("direccione", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    domicilio:{
        type:DataTypes.STRING,
        allowNull:false
    },
    codigoPostal:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});

// Relacion direccion pais

Pais.hasMany(Direccion, {
    foreignKey:'paisID',
    sourceKey:'id',
});

Direccion.belongsTo(Pais, {
    foreignKey: "paisID",
    targetId:"id"
});

// Relacion direccion ciudad

Ciudad.hasMany(Direccion,{
    foreignKey:'ciudadID',
    sourceKey:'id'
});

Direccion.belongsTo(Ciudad,{
    foreignKey:'ciudadID',
    targetId:'id'
});

