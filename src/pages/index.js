import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'


class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')
         
         return ( 
            <div className="indexpage">
                <Helmet title = { siteTitle }/> 

          <div className="w-60-l ph5-ns ph3 mb5 pv2"> 
          <p className="lh-copy f4 pa1 fw5">Hello, I'm Shreyas — a Product Design and Marketing 
          professional living in Bengaluru, IN. I currently work as a Product Marketing Manager 
          at <a href="https://www.razorpay.com" target="_blank">Razorpay</a>.</p> 

          <p className="lh-copy f4 pa1 fw5">Previously, I ran a product design and strategy 
          consulting firm called <a href="https://doer.studio" target="_blank">doer.studio</a>, where 
          I got to work with some amazing startups and small companies on their design systems and marketing strategies.</p> 

          <p className="lh-copy f4 pa1 fw5">Prior to my foray into Product Design, I worked as a Business Development Manager at <a href="https://www.shellnetworks.com" target="_blank">Shell Networks & Solutions Ltd.</a>, working on Enterprise Business Video Solutions like IP Streaming, Telepresence, etc.</p>

          <p className="lh-copy f4 pa1 fw5">I hold a degree in Computer Science and Engineering, and an MBA from the Indian School of Business, Hyderabad. </p>

          <p className="lh-copy f4 pa1 fw5">Feel free to <a href="https://www.linkedin.com/in/shreyas-achar-392b94134/" target="_blank">connect</a> with me, <a href="https://medium.com/@shreyasachar" target="_blank">read</a> a few of my thoughts, or <a href="mailto:mail@shreyasachar.com">send me</a> some of your own. Bonus points for humour. </p>

          <p className="lh-copy f4 pa1 fw5">Cheers!</p>

          </div>     
          </div>
            )

    }
}


export default BlogIndex

export const pageQuery = graphql `
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY")
            title
            description
            theme
          }
        }
      }
    }
  }
`

