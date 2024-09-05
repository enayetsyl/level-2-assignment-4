
import { Link } from 'react-router-dom'
import Button from '../../components/main/Button'

const Success = () => {
  return (
    <div className='min-h-[70vh] flex flex-col justify-center items-center'>
      <h1 className='font-bold text-4xl items-center pb-5'>You have successfully placed order.</h1>
      <Link to="/products">
      <Button className='' variant='primary' size='large' type='button'>
          Go to Products

      </Button>
      </Link>
    </div>
  )
}

export default Success