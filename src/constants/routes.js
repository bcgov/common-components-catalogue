export default Object.freeze({
  Intro: '/',
  ListView: '/list-view',
  DetailView: {
    staticRoute: '/detail-view/:id',
    dynamicRoute: (id) => `/detail-view/${id}`,
  },
});
