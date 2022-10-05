import { PageLayoutTypes, Site } from "../../../pages/types";
import ComponentsRenderer from "../ComponentsRenderer/ComponentsRenderer";
import HeaderRenderer from "../HeaderRenderer/HeaderRenderer";

type PageRendererProps = {
  site: Site;
  pageLayout: PageLayoutTypes;
};

const PageRenderer = ({ pageLayout, site }: PageRendererProps) => {
  console.log("PAGE: ", pageLayout);

  //Site can now be used to set the UI Lib config with Site Data
  return (
    <div>
      {pageLayout && (
        <div className="header">
          {pageLayout.header && (
            <section>
              <HeaderRenderer header={pageLayout.header} />
            </section>
          )}
        </div>
      )}

      {/* <ComponentsRenderer fields={page.fields} /> */}
    </div>
  );
};

export default PageRenderer;
