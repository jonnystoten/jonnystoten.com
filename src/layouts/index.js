import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";
import { mediaQueries } from "../utils/media-queries";

const Container = g.div({
  margin: `0 auto 0 20vw`,
  maxWidth: 800,
  padding: rhythm(2),
  paddingTop: rhythm(1.5),
  [mediaQueries.small]: {
    margin: `0 auto`,
    paddingLeft: rhythm(1),
    paddingRight: rhythm(1)
  },
  [mediaQueries.print]: {
    margin: 0,
    padding: 0,
    width: "100%",
    fontSize: "12pt"
  }
})

export default ({ children }) => (
  <Container>{children()}</Container>
);
