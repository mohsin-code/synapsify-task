import { main, left, right, box } from './Main.module.css';

export default function Main() {
  return (
    <div className={main}>
      <div className={left}>
        <div className={box}>
          <img src="https://datacrunch.io/_next/static/media/psychiatry.aeeabb53.svg" alt="leaf" />
          <p>Utilizing 100% renewable energy <span>View more</span></p>
        </div>
        <h1>The ML Cloud</h1>
        <h3>Premium dedicated GPU servers and clusters<br/>Model inference services</h3>
        <button>
          Get Started
          <img src="https://datacrunch.io/_next/static/media/arrow_right.3111ff70.svg" alt="arrow" />
        </button>
        <p>Easy sign up · Pay as you go</p>
      </div>
      <div className={right}>
        <img src="https://datacrunch.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FH100_hero.36b224a9.png&w=640&q=75" alt="gpu" />
      </div>
    </div>
  )
}
