import { Router } from 'express'
import { GetFieldsController } from 'src/app/presentation/controllers/GetFieldsController'
import { ExampleController } from '../../app/presentation/controllers/ExampleController'
import { adaptRoute } from '../adapters/express.adapter'

export default (router: Router): void => {
  router.get('/models/:model/fields', adaptRoute(new GetFieldsController()))
  router.get('/', adaptRoute(new ExampleController()))
}
