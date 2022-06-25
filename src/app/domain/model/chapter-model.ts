/* eslint-disable @typescript-eslint/naming-convention */
export interface ChapterModel {
  id: number
  title: string
  manga_id: string
  url: string
  number: String
  sequence: number
  release_date: Date
  status: string
  created_at: Date
  updated_at: Date
}

export const FIELDS = [
  'id',
  'title',
  'manga_id',
  'url',
  'number',
  'sequence',
  'release_date',
  'status',
  'created_at',
  'updated_at'
]
export const CREATE_REQUIRE = [
  'title',
  'manga_id',
  'url',
  'number',
  'sequence',
  'release_date',
  'status'
]
export const UPDATE_REQUIRE = [
  'title',
  'manga_id',
  'url',
  'number',
  'sequence',
  'release_date',
  'status'
]

// Utilize as funcionalidades abaixo somente se for possuir uma interface grafica
export const FIELD_NAMES = {
  id: 'Identificador',
  title: 'Titulo do capitulo',
  manga_id: 'Numero do manga',
  url: 'Imagem',
  number: 'Número da edição',
  sequence: 'Número da sequencia',
  release_date: 'Data de lançamento',
  status: 'Status do cápitulo',
  created_at: 'Data de criação',
  updated_at: 'Data de Atualização'
}
export const FIELD_TYPE = {
  id: 'number',
  title: 'text',
  manga_id: 'text',
  url: 'text',
  number: 'text',
  sequence: 'text',
  release_date: 'date',
  status: 'select',
  created_at: 'datetime',
  updated_at: 'datetime'
}
export const FIELD_OPTIONS = {
  status: [
    {
      label: 'PENDING',
      value: 'pending'
    },
    {
      label: 'PROCESSING',
      value: 'processing'
    },
    {
      label: 'COMPLETE',
      value: 'complete'
    }
  ]
}
export const FIELD_MASK = {}
export const EXCLUDED_FIELDS = []
export const FIELD_RELATIONS = {}
export const FIELDS_CREATE_HIDDEN = ['id', 'created_at', 'updated_at']
export const FIELDS_HIDDEN = []
