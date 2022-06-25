import { PageRepository } from '../../app/infra/repositories/page-repository'
import { PageModel } from '../domain/model/page-model'
import { FindProps } from '../infra/interfaces/find-props.interface'
import { PaginationParams, PaginationResponse } from '../infra/interfaces/pagination/pagination.interface'
const pageRepository = new PageRepository()

export interface AddPageModel {
  chapter_id: number
  page_number: number
  image_url: string
}
export interface UpdatePageModel {
  id: number
  chapter_id: number
  page_number: number
  image_url: string
}
export class PageService {
  async add (content: AddPageModel): Promise<PageModel> {
    return await pageRepository.add(content)
  }

  async find (props: FindProps): Promise<PageModel[]> {
    return await pageRepository.find(props)
  }

  async pagination (params: PaginationParams): Promise<PaginationResponse> {
    return await pageRepository.pagination(params)
  }

  async delete (id: number): Promise<void> {
    return await pageRepository.delete({ id: id })
  }

  async update (content: UpdatePageModel): Promise<PageModel> {
    return await pageRepository.update({ id: content.id }, content)
  }
}
