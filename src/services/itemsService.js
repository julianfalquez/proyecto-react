import { get } from "./http";

async function getItems() {
    return get("https://my-json-server.typicode.com/luribeto/reactjs-course-data/products")
  }

export {getItems}