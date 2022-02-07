import Header from 'components/header'
import Meta from 'components/meta'

const About = () => {
  const pageTitle = 'About'
  const pageDescription = 'Welcome to artful React Project.'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default About
