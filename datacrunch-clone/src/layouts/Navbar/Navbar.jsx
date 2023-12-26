import { navbar, navigator, auth } from './Navbar.module.css';

export default function Navbar() {
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
    </div>
  )
}
