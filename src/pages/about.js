import * as React from "react"
import Layout from '../components/Layout'
import Seo from "../components/seo"

const About = () => {
  return (
    <main>
      <Layout pageTitle='About Me'>
        <p>My name is Gbenga from Lagos Nigeria and I am a software developer. I have my background in real estate and construction management</p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="About Me"/>

export default About