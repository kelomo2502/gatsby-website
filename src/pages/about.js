import * as React from "react"
import Layout from '../components/Layout'

const About = () => {
  return (
    <main>
      <Layout pageTitle='About Me'>
        <p>My name is Gbenga from Lagos Nigeria and I am a software developer. I have my background in real estate and construction management</p>
      </Layout>
    </main>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="My name is Gbenga from Lagos Nigeria and I am a software developer. I have my background in real estate and construction management" />
  </>
)

export default About