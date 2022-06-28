export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ba9b98c5bd722e725dbf49",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-eiwqwvg4",
                  apiId: "17ba5704-2384-4b97-8541-067fbeb376f5",
                },
                {
                  buildHookId: "62ba9b980003f52b79376ff4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fruxf4nm",
                  apiId: "a488c850-da8d-4a4e-9e0a-96594dd00314",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/d0lbangi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fruxf4nm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
