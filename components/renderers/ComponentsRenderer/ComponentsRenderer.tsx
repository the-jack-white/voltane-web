import { FieldsType } from "../../../pages/types";

import HeaderMapper from "../../HeaderMapper/HeaderMapper";

type ComponentsRendererProps = {
  fields: FieldsType;
};

const ComponentsRenderer = ({ fields }: ComponentsRendererProps) => {
  console.log("FIELDS: ", fields);
  return (
    <div>
      <h2>{fields.id}</h2>
      <HeaderMapper />
    </div>
  );
};

export default ComponentsRenderer;
