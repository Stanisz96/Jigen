import { v4 as uuidv4 } from "uuid";

export function updateTagModelCard(val) {
  let newTags = val
    .filter((t) => typeof t == "string")
    .map(function (n) {
      return { name: n, _id: uuidv4() };
    });

  let tagModel = val
    .filter((t) => typeof t != "string")
    .concat(newTags);

  return [tagModel, newTags]
}