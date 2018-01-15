import { MarkdownHtml } from "./markdown-html"
import g from "glamorous"
import { mediaQueries } from "../utils/media-queries";

const Row = g.div({
  [mediaQueries.supportsGrid]: {
    display: "grid",
    gridTemplateAreas: `
      "languages frameworks operations other"
    `,
    [mediaQueries.phone]: {
      gridTemplateAreas: `
        "languages"
        "frameworks"
        "operations"
        "other"
      `,
    }
  },
})

export const Skills = ({ data }) => (
  <div>
    <h2>Skills</h2>
    <Row>
      <g.Div gridArea="languages">
        <h3>Languages</h3>
        <ul>{data.languages.map(language => <li key={language}>{language}</li>)}</ul>
      </g.Div>
      <g.Div gridArea="frameworks">
        <h3>Frameworks</h3>
        <ul>{data.frameworks.map(framework => <li key={framework}>{framework}</li>)}</ul>
      </g.Div>
      <g.Div gridArea="operations">
        <h3>Operations</h3>
        <ul>{data.operations.map(operation => <li key={operation}>{operation}</li>)}</ul>
      </g.Div>
      <g.Div gridArea="other">
        <h3>Other</h3>
        <ul>{data.other.map(other => <li key={other}>{other}</li>)}</ul>
      </g.Div>
    </Row>
  </div>
)
