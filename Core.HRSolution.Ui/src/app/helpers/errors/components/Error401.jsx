import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '@/_metronic/utils';

const Error401 = () => {
  return (
    <>
      {/* begin::Title */}
      <h1 className='fw-bolder fs-2qx text-gray-400 mt-4 text-uppercase'>Unauthorized Access</h1>
      {/* end::Title */}

      {/* begin::Text */}
      <div className='fw-semibold fs-6 text-gray-500 mb-7 text-uppercase'>You need to log in to access this content.</div>
      {/* end::Text */}
     

      {/* begin::Illustration */}
      <div className='mb-3'>
        <img
          src={toAbsoluteUrl('media/error/401.svg')}
          className='mw-100 mh-400px'
          alt=''
        />
      </div>
      {/* end::Illustration */}
      
      

      {/* begin::Link */}
      <div className='mb-0'>
        <Link to='/dashboard' className='btn btn-sm btn-danger'>
          Return Home
        </Link>
      </div>
      {/* end::Link */}
    </>
  )
}

export { Error401 }
