import { get } from "./http";

const getItems=async()=> {
    return get("https://my-json-server.typicode.com/luribeto/reactjs-course-data/products")
  }

export {getItems}