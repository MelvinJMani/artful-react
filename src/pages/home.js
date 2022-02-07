import Header from 'components/header'
import Meta from 'components/meta'
import List from 'components/list'

const Home = () => {
  // page content
  const pageTitle = 'Hello!'
  const pageDescription = 'Welcome to artful React Project.'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />

      <List />
    </div>
  )
}

export default Home
