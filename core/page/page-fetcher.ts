// import { VoltaneApplication } from "../voltane-application";

export const fetchPageProps = (context: any) => {
  // const voltaneApplication = VoltaneApplication();

  // call fetchPageLayout by passing the slug and map that out
  // make a query to CMS to get content for that SLUG

  // if fetchPageLayout is not null then pass that through the enricher
  // then return that pageLayout
  return {
    context,
    site: {
      title: "My App Title",
      id: "site-id",
    },
    pageLayout: {
      header: {
        id: "header-id",
        type: "header",
        fields: {
          title: "Header",
          imageUrl: "test_url",
        },
      },
      renderZones: [
        {
          id: "renderZone-id",
          components: [
            {
              id: "component-id",
              type: "banner",
              fields: {
                title: "banner-title",
                imageUrl: "background-image",
              },
            },
          ],
        },
      ],
      footer: {
        id: "footer-id",
        type: "footer",
        fields: {
          title: "Footer",
          imageUrl: "test_url",
        },
      },
    },
  };
};
