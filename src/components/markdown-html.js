export const MarkdownHtml = ({ markdown, ...rest }) =>
  <div {...rest} dangerouslySetInnerHTML={{ __html: markdown ? markdown.childMarkdownRemark.html : null }} />
