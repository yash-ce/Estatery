import { Flex, Heading, Button,  HStack, chakra, ButtonGroup, useBreakpointValue, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <chakra.header id="header" borderBottom='1px solid rgb(0,0,0,0.3)'>
      <Flex w='100%' py='5' align='center' justify='space-between'>
        <Link to='/'>
          <Heading fontSize='3xl' color='purple.700'>Estatery</Heading>
        </Link>
        {
           isDesktop ?
          (
          <>
            <ButtonGroup as='nav' variant='ghost' spacing='5' isActive>
                {
                  ['Rent', 'Buy', 'Sell', 'Manage Property', 'Resources'].map((item)=>(
                    <Link to={"/rent"}><Button fontSize='16px' key={item}>{item}</Button></Link>
                    ))
                }
            </ButtonGroup>
           

            <HStack>
              <Button size='sm' variant='outline'>Login</Button>
              <Button size='sm' variant='solid'>Sign up</Button>
            </HStack>
          </>
          ) : (
            <NavMobile />
          )
        }
      </Flex>
    </chakra.header>
  )
}

export default Header