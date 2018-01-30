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

                <div className="sec-2">
                  <div className="hl">
                        <p></p>
                  </div>
                  <div className="pr">
                        <p className ='f5'>I work with startups and small teams, helping them craft effective & user-friendly 
                        digital products. My professional experience also allows me to advise product leads and entrepreneurs on 
                        their Product Development and Business Strategy requirements.</p>
                  </div>
                </div>    


                <div className="sec-2">
                  <div className="hl">
                        <p className="heading__gray f5">Featured</p>
                  </div>
                  <div className="pr">
                        <div className = 'cf' > {
                            posts.map(({ node }) => {
                            const title = get(node, 'frontmatter.title') || node.fields.slug
                            const description = get(node, 'frontmatter.description') || node.fields.slug
                            return (

                            <div key = { node.fields.slug } className = "fl w-50-l pr4 pb4 mb4" >
                            <div className = "f5 b mb2 pr3-ns" >
                                <Link to = { node.fields.slug } > { node.frontmatter.description } </Link> 
                            </div> 
                            <div className='captions'>{ node.frontmatter.title } <span> • </span> { node.frontmatter.date }</div>
                            </div>
                            )
                            })
                            } 
                        </div>
                    </div>
                  </div>
                

                <div className="sec-2">
                  <div className="hl">
                        <p className="heading__gray f5">Additional</p>
                  </div>
                  
                  <div className="pr">
                        <p> Prior to my foray into Product Design, I used to be a Business Development Professional in the Video 
                        Collaboration Industry working on technologies like IP Streaming, Video Content Delivery, Digital Signage, Video Conferencing & Telepresence. </p>

                        <p> I hold a degree in Computer Science and Engineering from SASTRA University, and am 
                        currently pursuing an MBA from the Indian School of Business, Hyderabad. </p>

                        <p> I enjoy humour, music and all things food.</p>


                        <a className="f6 link dim br1 ba pa3 mt4 dib black" href="https://www.dropbox.com/s/06a8c27d51deqon/ShreyasAchar_CV2018.pdf?dl=1" download><span className="dib mr2 v-btm icons__pdf">PDF</span> <span className="captions">Download Resume</span></a>

                    </div> 
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