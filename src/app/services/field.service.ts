/* eslint-disable @typescript-eslint/naming-convention */
export class FieldService {
  async getFieldsByModel (model: string): Promise<any> {
    const {
      FIELD_NAMES,
      FIELD_TYPE,
      FIELD_OPTIONS,
      FIELD_RELATIONS,
      FIELDS_CREATE_HIDDEN,
      FIELDS_HIDDEN,
      FIELDS,
      CREATE_REQUIRE,
      UPDATE_REQUIRE
    } = await import(`../domain/model/${model}-model`)

    const fieldsMonted = { fields: {}, hidden_create: FIELDS_CREATE_HIDDEN, hidden_table: FIELDS_HIDDEN }
    console.log('é undefined', FIELD_RELATIONS)
    for (const key of FIELDS) {
      
      fieldsMonted.fields[key] = {
        name: FIELD_NAMES[key],
        type: FIELD_TYPE[key],
        options: FIELD_OPTIONS[key],
        relation: FIELD_RELATIONS[key]??{},
        create_require: CREATE_REQUIRE.includes(key),
        update_require: UPDATE_REQUIRE.includes(key)
      }
    }
    return fieldsMonted
  }
}
