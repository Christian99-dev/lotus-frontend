const fs = require("fs-extra");

exports.onPostBuild = async ({ graphql }) => {
  const result = await graphql(`
    query {
      strapiSeo {
        robots_txt {
          data {
            robots_txt
          }
        }
        sitemap_xml {
          data {
            sitemap_xml
          }
        }
      }
    }
  `)
  
  await fs.writeFile(
    "./public/robots.txt",
    result.data.strapiSeo.robots_txt.data.robots_txt
  );
  await fs.writeFile(
    "./public/sitemap.xml",
    result.data.strapiSeo.sitemap_xml.data.sitemap_xml
  );
};
