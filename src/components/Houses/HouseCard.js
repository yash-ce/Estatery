import {VStack,Divider,Heading,HStack,Image,Stack,Text,Flex,} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const HouseItem = ({ house }) => {
  return (
    <Flex justify='center' align='center'>
        <Stack justify='center' width="300px" bg="white" boxShadow="xl" borderRadius="xl">
        <Image src={house.imageLg} h='170' alt='houses' />

        <VStack p='4' align='left'>
            <Text mt="-1" fontWeight="extrabold" fontSize="18px" color="purple.500">
            ${house.price}
            <span style={{ fontSize: 12, color: "grey", fontWeight: "normal" }}>
                /month
            </span>
            </Text>

            <Heading fontSize="24px" letterSpacing="tight">
            {house.name}
            </Heading>

            <Text fontSize="13px" color="grey">
             {house.address}
            </Text>

            <Divider my="2.5" />

            <HStack spacing="5">
            <HStack>
                <BiBed style={{ color: "#794fdb" }} />
                <Text fontSize="12px">{house.bedrooms}</Text>
            </HStack>

            <HStack>
                <BiBath style={{ color: "#794fdb" }} />
                <Text fontSize="12px">{house.bathrooms}</Text>
            </HStack>

            <HStack>
                <BiArea style={{ color: "#794fdb" }} />
                <Text fontSize="12px">{house.surface}m<sup>2</sup></Text>
            </HStack>
            </HStack>

        </VStack>
        </Stack>
    </Flex>
  );
};

export default HouseItem;
