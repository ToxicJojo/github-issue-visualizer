import { numberTypeAnnotation } from "babel-types";

const DAY_DIVIDER = (1000 * 60 * 60 * 24)

const millisecondsToDays = (milliseconds) => {
  return Number((milliseconds / DAY_DIVIDER).toFixed(2))
}

export default millisecondsToDays