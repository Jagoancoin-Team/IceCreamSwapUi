import Image, { ImageProps } from 'next/image'
import ice from '../../../../public/images/dynasty.png'

const GradientLogo: React.FC<Omit<ImageProps, 'src' | 'alt'>> = (props) => {
  return <Image src={ice} alt="IceCreamSwap" {...props} />
}

export default GradientLogo
