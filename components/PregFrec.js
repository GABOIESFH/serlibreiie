import Image from "next/image"

const imageStyle = {
    
    border: '15px solid #000',
    margin:'15px'
    
  }

  export default function ProfileImage() {
    return <Image src="/images/preg_frec.webp" style={imageStyle} width={500} height={300}/>
  }