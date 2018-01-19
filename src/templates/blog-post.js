import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'

import Logo from '../components/Logo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    console.log('post.frontmatter.theme')
    return (
      <article className={post.frontmatter.theme}>
        <header>
        <div className="w-60-l center pa4 mb5">
        <Logo />
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <h1 className='lh-copy f1-ns f2 mt6-ns mt5 mb4 tc'>{post.frontmatter.description}</h1>
            <p className='captions tc'>{post.frontmatter.type}<span> • </span> {post.frontmatter.date} <span> • </span> {post.frontmatter.title} </p>
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
