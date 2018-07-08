import { MarkdownHtml } from "./markdown-html";
import g from "glamorous"
import { formatDate } from "../utils/dates"

export const Experience = ({ data }) => (
  <div>
    <h2>Experience</h2>
    {data.edges.map(({ node }) => (
      <div key={node.company}>
        <p>
          <strong>{node.position},</strong> <a href={node.website}>{node.company}</a>
          <br />
          <g.Span color="#999">{formatDate(node.startDate)} &ndash; {formatDate(node.endDate)}</g.Span>
        </p>
        <MarkdownHtml markdown={node.summary} />
        {node.projects && <div>
          <p>My projects at {node.company} {node.endDate ? "included" : "have included"}:</p>
          <MarkdownHtml markdown={node.projects} />
        </div>}
      </div>
    ))}
  </div>
)
