import { get } from "./http";

const getItems = async () => {
  try {
    return get(
      "https://my-json-server.typicode.com/luribeto/reactjs-course-data/products"
    );
  } catch (err) {
    throw err;
  }
};

const groupByCategoryService = (itemsStore) => {
  return itemsStore.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, []);
};

export { getItems,groupByCategoryService };
