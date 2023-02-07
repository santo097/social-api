import { Sequelize } from "sequelize";
import Configuracion from '../Utilities/Configuracion.js';

export const sequelize = new Sequelize(
    Configuracion.db.nombre,
    Configuracion.db.usuario,
    Configuracion.db.contraseña,
    {
        host:Configuracion.db.host,
        dialect:"postgres"
    }
);
