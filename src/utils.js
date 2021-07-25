import countapi from "countapi-js"
import config from "./config.json"

const { namespace, key } = config;

export const increaseCount = () => {
  return countapi.hit(namespace, key)
}

export const fetchCount = () => {
  return countapi.get(namespace, key)
}