import { Connection, createConnection, getConnection } from 'typeorm'
import { database } from '../../../main/config/variables'
import { join } from 'path'
const connect = async (): Promise<Connection> => {
  return await createConnection({
    type: 'postgres',
    host: database.host,
    port: database.port,
    username: database.username,
    password: database.password,
    database: database.database,
    synchronize: true,
    logging: false,
    entities: [
      join(__dirname, '../../domain/entities/*.ts')
    ]
  })
}
export const client = (): any => getConnection('db_home')
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TypeOrmHelpers = {
  client: null as unknown as Connection,
  connect: async (): Promise<void> => {
    await connect()
  },
  disconnect: async (): Promise<void> => {
    await TypeOrmHelpers.client.close()
  }
}
