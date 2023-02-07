import { DataTypes } from "sequelize";
import { sequelize } from '../Utilities/Database.js';
import { InformacionUsuario } from "./InformacionUsuarioModel.js";
import { Role } from "./RoleModel.js";

export const Usuario = sequelize.define("usuario", {
    usuario:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contraseña:{
        type:DataTypes.STRING,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});


// Relacion usuario e informacion usuario

InformacionUsuario.hasOne(Usuario, {
    foreignKey:'informacionusuarioID',
    targetId:'id'
});

Usuario.belongsTo(InformacionUsuario, {
    foreignKey:'informacionusuarioID',
    sourceKey:'id'
});

// Relacion usuario Role

Role.hasOne(Usuario, {
    foreignKey:'roleID',
    targetId:'id'
});

Usuario.belongsTo(Role,{
    foreignKey:'roleID',
    sourceKey:'id'
});