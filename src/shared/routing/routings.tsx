const rootPath = '';

export const Routings = {
  home: {
    path: '',
    toNavigate: () => `${rootPath}/`,
  },
  good: {
    list: {
      path: `goods`,
      toNavigate: () => `${rootPath}/${Routings.good.list.path}`,
    },
  },
  client: {
    list: {
      path: `clients`,
      toNavigate: () => `${rootPath}/${Routings.client.list.path}`,
    },
  },
  shop: {
    list: {
      path: `shops`,
      toNavigate: () => `${rootPath}/${Routings.shop.list.path}`,
    },
  },
};
