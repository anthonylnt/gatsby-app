import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my website</p>
    <p>This is my first Gastby site</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
