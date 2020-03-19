import tagsJson from '@/service/data/tags.json';

const getTag = (id) => tagsJson.find((tag) => tag.id === id);

export default getTag;
