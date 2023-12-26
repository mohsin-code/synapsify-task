import { news, option, boldoption, underlinedoption } from './Newsbar.module.css';

export default function Newsbar() {
  return (
    <div className={news}>
      <div className={option}>
        <span>Limited availabliilty</span>
        <img src="https://datacrunch.io/_next/static/media/Bell.54951cdc.svg" alt="bell" />
      </div>
      <span className={boldoption}>
        H100 virtual machines
      </span>
      <span className={underlinedoption}>
        Deploy now
      </span>
    </div>
  )
}
