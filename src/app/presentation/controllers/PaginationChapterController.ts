import { serverError, success } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'
import { ChapterService } from '../../services/chapter.service'
const chapterService = new ChapterService()
export class PaginationChapterController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { manga_id } = httpRequest.params
      const { limit, page = 1 } = httpRequest.query
      const pagination = await chapterService.pagination({
        limit: parseInt(limit),
        model: 'chapter',
        page: parseInt(page),
        search: [
          {
            param: 'manga_id',
            type: 'equal',
            value: manga_id
          }
        ]
      })
      return success(pagination)
    } catch (error) {
      return serverError()
    }
  }
}
