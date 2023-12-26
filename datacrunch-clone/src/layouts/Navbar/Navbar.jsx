import { navbar, navigator, auth } from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={navbar}>
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
