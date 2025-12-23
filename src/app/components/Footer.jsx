import React from 'react'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-4'>
        <span className='text-2xl font-bold bg-purple-500 bg-clip-text text-transparent'>
          HELLOWORLD
        </span>
        
        <p className='text-slate-600 text-sm md:text-base text-center'>
          © 2024 Tahirisoa. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer