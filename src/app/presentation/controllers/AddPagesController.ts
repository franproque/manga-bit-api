import { created, problemCompleting, serverError } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'
import { PageService } from '../../services/page.service'
const pageService = new PageService()
export class AddPagesController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { pages } = httpRequest.body
      const createdPages = await pageService.addArray(pages)
      if (createdPages.length !== pages.length) {
        await pageService.deleteArray(createdPages)
        return problemCompleting()
      }

      return created(createdPages)
    } catch (error) {
      return serverError()
    }
  }
}
