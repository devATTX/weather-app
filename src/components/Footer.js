import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>&copy;2022 devATTX</p>
      <Link to='/recipeater' className='App-link'>Recipeater</Link>
      <Link to='/resources' className='App-link'>Wonderful Resources</Link>
    </footer>
  )
}

export default Footer
