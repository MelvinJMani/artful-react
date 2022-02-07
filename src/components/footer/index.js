const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize'>
        copyright Artful React &copy; {year}
      </footer>
    </>
  )
}

export default Footer
