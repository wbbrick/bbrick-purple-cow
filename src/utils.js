import countapi from "countapi-js";
import config from "./config.json";

const { namespace, key } = config;

export const increaseCount = () => {
  return countapi.hit(namespace, key).catch(e => {
    throw new Error("Looks like we're out of cows!")
  });
};

export const fetchCount = () => {
  return countapi.get(namespace, key).catch(e => {
    throw new Error("We lost count of how many cows there are.")
  });
};