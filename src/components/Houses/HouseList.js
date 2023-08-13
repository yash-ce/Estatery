import { Center, Grid, HStack, Heading, Spinner, Stack } from '@chakra-ui/react';
import { useContext } from "react";
import { Link } from 'react-router-dom';

import { HouseContext } from "../../context/HouseContext";
import HouseItem from './HouseCard';
import Shimer from '../Shimer';

const HouseList = () => {
  const { houses, isLoading } = useContext(HouseContext);
  if(isLoading){
    return (
      // <Center>
      //   {/* <Spinner align='center' color='purple.500' /> */}
      //   <Shimer/>
      // </Center>
      <>
      <HStack>
        <Shimer/>
        <Shimer/>
        <Shimer/>
     </HStack>
      <HStack>
      <Shimer/>
      <Shimer/>
      <Shimer/>
   </HStack>
    <HStack>
    <Shimer/>
    <Shimer/>
    <Shimer/>
 </HStack>
 </>
    )
  }

  if (houses.length === 0) {
    return (
      <Stack maxH='400px'>
        <Heading size="lg" p={{base: '6', md: '10'}} align="center">
          Oops... Can try another one?
        </Heading>
      </Stack>
    );
  }

  return (
    <Grid my='3' rowGap='4' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' 
    >
      {
        houses.sort((a, b) => a.price - b.price).map(item=>
          <Link to={`/property-details/${item.id}`} key={item.id}>
            <HouseItem key={item.id} house={item} />
          </Link>
        )
      }
    </Grid>
  )
}

export default HouseList