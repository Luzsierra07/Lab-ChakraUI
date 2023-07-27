import { ChakraProvider, Box, Image, Flex,Button } from "@chakra-ui/react";

const Header = () => {
    return (
        <ChakraProvider>
            <Flex>
                <Box boxSize= "md" w="1300px" flex="1" marginTop="50px">
                    <Image src='https://media.istockphoto.com/id/177426570/es/foto/deportivo-par.jpg?s=612x612&w=0&k=20&c=pUtBbMK1cQ3BCoah0Nb6Jn2ir2eTRqwDBVt67rZNRTk='
                    alt='Ciclista-atardecer'
                    boxSize="500px"
                    w="1300px"
                    h="300px"
                    p={2} />
                    <Box
        position="absolute"
        top="180px"
        bottom="20px"
        left="600px"
        color="white"
        fontSize="30px"
        fontWeight="thin"
      >
        DOMINA EL TERRENO
      </Box>
      <Button
        top="250px"
        position="absolute"
        bottom="20px"
        right="770px"
        color="white"
        variant='outline'
        fontWeight="thin"
        borderRadius="2px"
      >
        VER DETALLES
      </Button>
      <Button
      top="250px"
        position="absolute"
        bottom="20px"
        right="640px"
        color="whiteAlpha.800"
        textColor="black"
        fontWeight="thin"
        borderRadius="2px"
      >
        VER VIDEOS
      </Button>
      <Box>
      <Image src='https://media.istockphoto.com/id/177426570/es/foto/deportivo-par.jpg?s=612x612&w=0&k=20&c=pUtBbMK1cQ3BCoah0Nb6Jn2ir2eTRqwDBVt67rZNRTk='
                    alt='Ciclista-atardecer'
                    boxSize="300px"
                    p={2}
                    position="absolute"
                    top="420"
                    left="150px" />
        <Box
        position="absolute"
        top="500px"
        bottom="20px"
        left="190px"
        color="white"
        fontSize="25px"
        fontWeight="thin"
        
      >
        DOMINA EL TERRENO
      </Box>
      <Button
        top="550px"
        position="absolute"
        bottom="20px"
        right="1090px"
        color="white"
        variant='outline'
        fontWeight="thin"
        size='md'
        height='48px'
        width='250px'
        borderRadius="2px"
      >
        VER DETALLES
      </Button>
      <Button
      top="610px"
      position="absolute"
      bottom="20px"
      right="1090px"
      color="white"
      variant='outline'
      fontWeight="thin"
      size='md'
      height='48px'
      width='250px'
      borderRadius="2px"
      
      >
        VER VIDEOS
      </Button>
      </Box>
      
                </Box>
           
            </Flex>
            
        </ChakraProvider>
        
    )
}

export default Header;