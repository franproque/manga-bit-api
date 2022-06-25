import { created, serverError } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'
import { ChapterService } from '../../services/chapter.service'
const chapterService = new ChapterService()
export class AddChapterController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { manga_id, release_date, number, status, url, title, sequence } = httpRequest.body

      const chapter = await chapterService.add({
        manga_id,
        number,
        release_date,
        sequence,
        status,
        title,
        url
      })
      return created(chapter)
    } catch (error) {
      return serverError()
    }
  }
}
