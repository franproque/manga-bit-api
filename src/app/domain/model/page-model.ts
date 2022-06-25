/* eslint-disable @typescript-eslint/naming-convention */
export interface PageModel {
  id: number
  chapter_id: number
  page_number: number
  image_url: string
  created_at: Date
  updated_at: Date
}

export const FIELDS = [
  'id',
  'chapter_id',
  'page_number',
  'image_url',
  'created_at',
  'updated_at'
]
export const CREATE_REQUIRE = [
  'chapter_id',
  'page_number',
  'image_url'
]
export const UPDATE_REQUIRE = [
  'chapter_id',
  'page_number',
  'image_url'
]

// Utilize as funcionalidades abaixo somente se for possuir uma interface grafica
export const FIELD_NAMES = {
  id: 'Identificador',
  chapter_id: 'Capitulo relacionado',
  page_number: 'Número da página',
  image_url: 'URL da página',
  created_at: 'Data de criação',
  updated_at: 'Data de Atualização'
}
export const FIELD_TYPE = {
  id: 'number',
  chapter_id: 'select',
  page_number: 'number',
  image_url: 'image',
  created_at: 'datetime',
  updated_at: 'datetime'
}
export const FIELD_OPTIONS = {}
export const FIELD_MASK = {}
export const EXCLUDED_FIELDS = []
export const FIELD_RELATIONS = {
  chapter_id: {
    url: '/page',
    label: 'title',
    value: 'id'
  }
}
export const FIELDS_CREATE_HIDDEN = ['id', 'created_at', 'updated_at']
export const FIELDS_HIDDEN = []
