import { serverError, success } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'
import { PageService } from '../../services/page.service'
const pageService = new PageService()
export class PaginationPageController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { chapter_id } = httpRequest.params
      const { limit = 100, page = 1 } = httpRequest.query
      const pagination = await pageService.pagination({
        limit: parseInt(limit),
        model: 'page',
        page: parseInt(page),
        search: [
          {
            param: 'chapter_id',
            type: 'equal',
            value: chapter_id
          }
        ]
      })
      return success(pagination)
    } catch (error) {
      return serverError()
    }
  }
}
