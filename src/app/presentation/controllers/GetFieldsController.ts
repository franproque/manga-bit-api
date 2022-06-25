import { FieldService } from '../../services/field.service'
import { serverError, success } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'
const fieldService = new FieldService()

export class GetFieldsController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { model } = httpRequest.params
      console.log(model)
      return success(await fieldService.getFieldsByModel(model))
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
