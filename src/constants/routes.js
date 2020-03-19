export default Object.freeze({
  Intro: '/',
  ListView: '/catalogue',
  DetailView: {
    staticRoute: '/common-component/:id',
    dynamicRoute: (id) => `/common-component/${id}`,
  },
});
