import React from "react"
import { Link } from "gatsby"
import { navigate } from '@reach/router'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* Not great for accessibility, but it works! */}
    <button onClick={ev => {
      ev.preventDefault()
      navigate('#message')
    }} >Go to message</button>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ height: '100vh' }} />
    <Link to="/page-2/">Go to page 2</Link>
    <h1 id="message">Message</h1>
    <div style={{ height: '100vh' }} />
  </Layout>
)

export default IndexPage
