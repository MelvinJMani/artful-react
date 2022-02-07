import Header from 'components/header'
import Meta from 'components/meta'

const Contact = () => {
  const pageTitle = 'Contact'
  const pageDescription = 'Welcome to artful React Project.'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Contact
