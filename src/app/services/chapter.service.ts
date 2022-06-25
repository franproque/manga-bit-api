import { ChapterModel } from '../domain/model/chapter-model'
import { FindProps } from '../infra/interfaces/find-props.interface'
import { PaginationParams, PaginationResponse } from '../infra/interfaces/pagination/pagination.interface'
import { ChapterRepository } from '../infra/repositories/chapter-repository'
const chapterRepository = new ChapterRepository()

export interface AddChapterModel {
  title: string
  manga_id: string
  url: string
  number: String
  sequence: number
  release_date?: Date
  status: string
}

export interface UpdateChapterModel {
  id: number
  title: string
  manga_id: string
  url: string
  number: String
  sequence: number
  release_date: Date
  status: string
}
export class ChapterService {
  async add (content: AddChapterModel): Promise<ChapterModel> {
    return await chapterRepository.add(content)
  }

  async find (props: FindProps): Promise<ChapterModel[]> {
    return await chapterRepository.find(props)
  }

  async pagination (params: PaginationParams): Promise<PaginationResponse> {
    return await chapterRepository.pagination(params)
  }

  async delete (id: number): Promise<void> {
    return await chapterRepository.delete({ id })
  }

  async update (content: UpdateChapterModel): Promise<ChapterModel> {
    return await chapterRepository.update({ id: content.id }, content)
  }
}
