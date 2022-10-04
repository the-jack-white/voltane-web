export type FieldsType = {
  id: string;
  type: string;
  title: string;
};

export interface Page {
  id: string;
  type: string;
  fields: FieldsType;
}
