import tags from '@/service/data/tags.json';

const getTag = (id) => tags.find(tag => tag.id === id);

export default getTag;