/* eslint-disable @typescript-eslint/naming-convention */
export interface ExampleModel {
  id: string
  titulo: string
  dt_cadastro: Date
}

export const FIELDS = [
  'id',
  'titulo',
  'dt_cadastro'
]
export const CREATE_REQUIRE = [
  'titulo'
]
export const UPDATE_REQUIRE = [
  'titulo'
]

// Utilize as funcionalidades abaixo somente se for possuir uma interface grafica
export const FIELD_NAMES = {
  id: 'Identificador',
  titulo: 'Titulo',
  dt_cadastro: 'Data de cadastro'
}
export const FIELD_TYPE = {
  id: 'number',
  titulo: 'text',
  dt_cadastro: 'date'
}
export const FIELD_OPTIONS = {
}
export const FIELD_MASK = {}
export const EXCLUDED_FIELDS = []
export const FIELD_RELATIONS = {}
export const FIELDS_CREATE_HIDDEN = ['id', 'dt_cadastro']
export const FIELDS_HIDDEN = []
