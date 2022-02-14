import Header from 'components/header'
import Meta from 'components/meta'

const Contact = () => {
  const pageTitle = 'Contact'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description="" />
      <p className='lead'>
        📫 You can reach me on my email id <a href="mailto:melvinjmani@gmail.com"> melvinjmani@gmail.com </a>
      </p>
    </div>
  )
}

export default Contact
