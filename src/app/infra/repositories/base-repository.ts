import { PaginationResponseRepository } from '../interfaces/pagination/pagination-response-count'
import { PaginationFormatResponse, PaginationParams, PaginationResponse } from '../interfaces/pagination/pagination.interface'
import { getRepository, ILike, Repository } from 'typeorm'
import { FindProps } from '../interfaces/find-props.interface'

export class BaseRepository {
  private readonly model: string
  constructor (model: string) {
    this.model = model
  }

  async instanceRepository (): Promise<Repository<any>> {
    const model = (await import(`../../domain/entities/${this.model}.ts`)).default
    const repository = getRepository(model)
    return repository
  }

  async add (content: any): Promise<any> {
    const repository = await this.instanceRepository()
    return await repository.save(content)
  }

  async delete (content: any): Promise<void> {
    const repository = await this.instanceRepository()
    await repository.delete(content)
  }

  async find (props: FindProps): Promise<any[]> {
    const repository = await this.instanceRepository()
    return await repository.find(props)
  }

  private async paginationBase (props: PaginationParams): Promise<PaginationResponseRepository> {
    const repository = await this.instanceRepository()
    const where: any[] = []
    const resultIlike = props.search.filter((value) => value.type === 'ilike')
    for (const value of resultIlike) {
      const object: any = {}
      object[value.param] = ILike(`%${value.value.toString()}%`)
    }

    const resultEqual = props.search.filter((value) => value.type === 'equal')

    for (const value of resultEqual) {
      if (where.length > 0) {
        for (let i = 0; i < where.length; i++) {
          where[i] = where[i][value.param] = value.value
        }
      } else {
        const object: any = {}
        object[value.param] = value.value
        where.push(object)
      }
    }
    const queryResult = await repository.findAndCount({
      skip: props.limit * (props.page - 1),
      take: props.limit,
      relations: (props.relations ?? {}),
      where: where,
      orderBy: (props.order ?? {})
    })
    return {
      data: queryResult[0],
      total: queryResult[1]
    }
  }

  async update (params: any, content: any): Promise<any> {
    const repository = await this.instanceRepository()
    return await repository.update(params, content)
  }

  async pagination (props: PaginationParams): Promise<PaginationResponse> {
    const pagination = await this.paginationBase(props)
    const totalPages = ((pagination.total % props.limit) === 0 ? (pagination.total / props.limit) : parseInt(((pagination.total / props.limit) + 1).toString()))

    const search = (props.search.length > 0 ? props.search[0].value : '')
    const paginationFormat: PaginationFormatResponse = {
      data: pagination.data,
      total: pagination.total,
      from: (props.page === 1 ? 1 : ((props.page * props.limit) / 2) + 1),
      first_page_url: `/api/${props.model}?page=1&limit=${props.limit}&search=${search}`,
      path: `/api/${props.model}`,
      to: props.page * props.limit,
      per_page: props.limit,
      last_page: totalPages,
      current_page: props.page,
      last_page_url: `/api/${props.model}?page=${totalPages}&limit=${props.limit}&search=${search}`,
      next_page_url: (props.page < totalPages ? `/api/${props.model}?page=${props.page + 1}&limit=${props.limit}&search=${search}` : ''),
      prev_page_url: (props.page > 1 ? `/api/${props.model}?page=${props.page - 1}&limit=${props.limit}&search=${search}` : '')
    }
    return {
      success: true,
      data: paginationFormat
    }
  }
}
