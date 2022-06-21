export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "Dev" : "Prod"
}
export const app = {
  title: "Blog"
}
export const links = [
  {
      title: "Blog",
      alias: "blog",
      url: "/blog",
  },
  {
      title: "About",
      alias: "about",
      url: "/about",
  },
  {
    title: "Admin",
    alias: "admin",
    url: "/admin",
},
];
