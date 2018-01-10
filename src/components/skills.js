import { MarkdownHtml } from "./markdown-html"
import g from "glamorous"
import { mediaQueries } from "../utils/media-queries";

const Row = g.div({
  display: "flex",
  [mediaQueries.phone]: {
    display: "initial"
  }
})
const Col = g.div({ flex: 1 })

export const Skills = ({ data }) => (
  <div>
    <h2>Skills</h2>
    <Row>
      <Col>
        <h3>Languages</h3>
        <ul>{data.languages.map(language => <li key={language}>{language}</li>)}</ul>
      </Col>
      <Col>
        <h3>Frameworks</h3>
        <ul>{data.frameworks.map(framework => <li key={framework}>{framework}</li>)}</ul>
      </Col>
      <Col>
        <h3>Operations</h3>
        <ul>{data.operations.map(operation => <li key={operation}>{operation}</li>)}</ul>
      </Col>
      <Col>
        <h3>Other</h3>
        <ul>{data.other.map(other => <li key={other}>{other}</li>)}</ul>
      </Col>
    </Row>
  </div>
)
