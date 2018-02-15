import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <article className={post.frontmatter.theme}>
        <header>
        <div className="w-70-l ph5-ns ph3 mb5 pv4">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <h1 className='lh-title f1-ns pa1 fw7'>{post.frontmatter.description}</h1>            
          </div>
        </header>
          <div className="center">
            <div className="blogpost" dangerouslySetInnerHTML={{ __html: post.html }}>
              
            </div>
          </div>
      </article>


    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        description
        theme
        type
    }
  }
}`
