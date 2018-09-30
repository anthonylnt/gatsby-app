import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => (
  <Layout>
    <div>
      <h1>About us</h1>
      <p>Welcome on the about page lorem</p>
      <Link to="/">Homepage</Link>
    </div>
  </Layout>
  )

export default AboutPage;
