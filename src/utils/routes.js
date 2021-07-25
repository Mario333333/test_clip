const routes = {
  home: {
    url: "/",
  },
};

export const getURLByRouteName = (routeName) => {
  let route = routes[routeName],
    url = route ? route.url : "/";
  return url;
};
