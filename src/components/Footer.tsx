import Signature from './icons/Signature'

const Footer = () => {
  return (
    <footer>
      <div className='container flex flex-col items-center gap-6 py-8'>
        <p>&copy; {new Date().getFullYear()} Jesse Ajioh.</p>
        <Signature className='w-[140px] transition-colors hover:text-primary' />
      </div>
    </footer>
  )
}

export default Footer
