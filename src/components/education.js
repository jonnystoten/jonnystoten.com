import { MarkdownHtml } from "./markdown-html";
import { formatDate } from "../utils/dates"
import g from "glamorous"

export const Education = ({ data }) => (
  <div>
    <h2>Education</h2>
    {data.edges.map(({ node }) => (
      <div key={node.institution}>
        <p>
          <strong>{node.level}, {node.area},</strong> {node.institution}
          <br />
          <g.Span color="#999">{formatDate(node.startDate)} &ndash; {formatDate(node.endDate)}</g.Span>
        </p>
      </div>
    ))}
  </div>
)
