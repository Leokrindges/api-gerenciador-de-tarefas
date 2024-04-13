import { envs } from './configs/envs';
import { Server } from './configs/server/app.server';


const server = Server.create();
server.listen(envs.PORT, () => console.log(`Servidor ta rodando na porta ${envs.PORT}`));