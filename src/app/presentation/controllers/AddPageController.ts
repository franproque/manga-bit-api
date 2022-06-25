import { created, serverError } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'
import { PageService } from '../../services/page.service'
const pageService = new PageService()
export class AddPageController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const createdPage = await pageService.add(httpRequest.body)
      return created(createdPage)
    } catch (error) {
      return serverError()
    }
  }
}
