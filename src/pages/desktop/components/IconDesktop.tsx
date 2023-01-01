import {IconDesk} from '../../../components/Icon'
import Container from '../../../components/Container'

interface Props {
  className?: string
  classNameContainer?: string
  name?: string
  img?: boolean
}

const IconDesktop = ({className, classNameContainer, name, img}: Props)=>{
  
  return(
    <Container className={classNameContainer}>
      <IconDesk name={name} className={className} img={img}/>
    </Container>
  )

}
export default IconDesktop