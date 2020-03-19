import Tags from '@/service/data/tags.json';

const getTag = (id) => Tags.find((tag) => tag.id === id);

export default getTag;
