import { Controller, HttpRequest, HttpResponse } from '../protocolos'
import { serverError, success } from '../helpers/http-helpers'
export class ExampleController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return success('Sucesso exemplo Ok')
    } catch (error) {
      return serverError()
    }
  }
}
