export type FieldsType = {
  id: string;
  type: string;
  title: string;
};

export type Fields = {
  title: string;
  imageUrl: string;
};

export type PageLayoutChildTypes = {
  id: string;
  type: string;
  fields: Fields;
};

export type RenderZonesTypes = {
  id: string;
  components: PageLayoutChildTypes[];
};

export type PageLayoutTypes = {
  header: PageLayoutChildTypes;
  renderZones: RenderZonesTypes[];
  footer: PageLayoutChildTypes;
};

export type Site = {
  title: string;
  id: string;
};
