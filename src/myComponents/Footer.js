import React from 'react'

export default function Footer() {
  let footercss={
    position:'relative',
    top:'10vh',
    width:'100%',
    
  }
  return (
    <footer className='bg-dark text-light py-1' style={footercss}>
     <p className="text-center">Made with ❤️ by Chirag Singhal</p>
    </footer>
  )
}
