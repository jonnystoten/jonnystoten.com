import g from "glamorous"
import { mediaQueries } from "./media-queries";

export const PrintOnly = g.div({
  display: "none",
  [mediaQueries.print]: {
    display: "initial"
  }
})
