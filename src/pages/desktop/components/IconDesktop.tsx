import Container from "../../../components/Container";
import Text from '../../../components/Text'
import Icon from "../../../components/Icon";
interface Props {
  className?: string;
  classNameContainer?: string | undefined;
  classNameText?: string
  filesDesktop: {
      id: string, 
      type: string, 
      text: string,
      hover: any,
      active: any
    }[]
  isHover?: any
  isActive?: any
}

/**
* @example <IconDesktop id={string | number} classNameContainer={string} filesDesktop={object[]}/>
* @param Props
* @returns JSX:Element
*/

const IconDesktop = ({
  className,
  classNameContainer,
  classNameText,
  filesDesktop,
  isHover,
  isActive
}: Props) => {


  return (
    <>
      {
        filesDesktop.map((e, i) => (
          <Container 
            id={`${e.id} ${i}`}
            className={`${classNameContainer} ${e.active ? ' iconDesktopActive'
              : e.hover && !e.active ? ' iconDesktopHover' 
              : ''
            }` }
            onClick={()=>isActive(e.id)}
            onMouseOver={()=>isHover(true, e.id)}
            onMouseLeave={()=>isHover(false, e.id)}
              >
            <Icon name={e.type} className={className} />
            <Text 
              className={classNameText} 
              >{e.text}</Text>
          </Container>
        ))
      }
    </>
  )

};
export default IconDesktop;