import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copywrite &copy;2022 devATTX</p>
      <Link to='/resources' className='App-link'>Wonderful Resources</Link>
    </footer>
  )
}

export default Footer
