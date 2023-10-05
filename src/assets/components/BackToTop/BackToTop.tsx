import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
      }, []);
    
      const handleScroll = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <>
    <Button
         visibility={isVisible ? 'visible' : 'hidden'}
         colorScheme="teal"
         position={"fixed"}
          bottom={"55px"}
          right={'55px'}
          width={'150px'}
          height={'50px'}
          onClick={() => handleScroll()}
        >
          Back To Top
        </Button>
    </>
  )
}

export default BackToTop