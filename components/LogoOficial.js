import Image from "next/image"

const imageStyle = {
    
    border: '15px solid #000',
    margin:'15px',
    display: 'block',
    margin: '0 auto'
   
   
    
  }

  export default function LogoOficial() {
    return <Image src="/images/logo_oficial.jpg" style={imageStyle} width={500} height={300}/>
  }