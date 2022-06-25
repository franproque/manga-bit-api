/* eslint-disable @typescript-eslint/no-floating-promises */
import 'reflect-metadata'
import { server } from './config/variables'
import { app } from './config/app'
import { TypeOrmHelpers } from '../app/infra/database/typeorm-helpers'
TypeOrmHelpers.connect().then(() => {
  app.listen(server.port, () => {
    console.log(`Servidor iniciado com sucesso.  http://localhost:${server.port}`)
  })
})
