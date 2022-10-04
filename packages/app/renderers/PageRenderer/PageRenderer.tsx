import { Page } from "../../../../pages/types";
import ComponentsRenderer from "../ComponentsRenderer/ComponentsRenderer";

type PageRendererProps = {
  page: Page;
};

const PageRenderer = ({ page }: PageRendererProps) => {
  console.log("PAGE: ", page);
  return (
    <div>
      <h1>{page.id}</h1>
      <ComponentsRenderer fields={page.fields} />
    </div>
  );
};

export default PageRenderer;
