import { navbar, navigator, auth, hamburg } from './Navbar.module.css';
import hamburgIcon from '../../assets/hamburg.svg';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={navbar}>
      <img src="https://datacrunch.io/_next/static/media/Logo.99886008.svg" alt="logo" />
      <div className={navigator}>
        <span>GPU Instances</span>
        <span>Clusters</span>
        <span>Inference</span>
        <span>API</span>
        <span>Docs</span>
      </div>
      <div className={auth}>
        <span>Login</span>
        <button>Signup</button>
      </div>
      <img src={hamburgIcon} alt="hamburg" className={hamburg} onClick={() => setMobileMenu(true)} />
    </div>
  )
}
