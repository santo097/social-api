import server from './Service/Middlewars.js';
import Configuracion from './Utilities/Configuracion.js';
import { sequelize } from './Utilities/Database.js';

import "./Model/CiudadModel.js";
import "./Model/ContactoModel.js";
import "./Model/DireccionModel.js";
import "./Model/InformacionUsuarioModel.js";
import "./Model/PaisModel.js";
import "./Model/RoleModel.js";
import "./Model/TipoDocumentoModel.js";
import "./Model/UsuarioModel.js";

const main = async() =>{
    try {
        await sequelize.authenticate();
        console.log('Conexion establecida');
        // await sequelize.sync();
        server.listen(Configuracion.servidor.port, ()=>{
            console.log('Server on port: ', Configuracion.servidor.port);
        });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();
