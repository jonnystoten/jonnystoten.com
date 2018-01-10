export const MarkdownHtml = ({ markdown, ...rest }) =>
  <div {...rest} dangerouslySetInnerHTML={{ __html: markdown.childMarkdownRemark.html }} />
