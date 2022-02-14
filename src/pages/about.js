import Header from 'components/header'
import Meta from 'components/meta'

const About = () => {
  const pageTitle = 'About'
  const pageDescription = '🎨 A collection of Generative Arts created with React and p5.js'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <p className='lead text-capitalize'>
        If you ask me the reason for creating this project, let me say this, coding is fun so is art.
        Also I must admit, I thought by creating this repo it will look cool on my resume 😉.
        This project was created with react. So as you guessed project was bootstrapped with Create React App.
      </p>
      
    </div>
  )
}

export default About
