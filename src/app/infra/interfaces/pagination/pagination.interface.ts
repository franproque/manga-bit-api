export interface PaginationFormatResponse {
    data: any
    first_page_url: string
    from: number
    last_page_url: string
    next_page_url: string
    path: string
    last_page: number
    current_page: number
    per_page: number
    prev_page_url: string
    to: number
    total: number
  }
  export interface PaginationResponse {
    success: boolean
    data: PaginationFormatResponse
  }
  
  export interface SearchParams {
    param: string
    type: string
    value: string | number
  }
  export interface PaginationParams {
    page: number
    limit: number
    relations?: any
    model: string
    order?: any
    search: SearchParams[]
  }
