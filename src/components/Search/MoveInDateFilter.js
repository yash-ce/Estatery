import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

function MoveInDateFilter() {
    const {houses } = useContext(HouseContext);

    const MoveInDateHandler = (event)=> {
    //   setMoveIndate(event.target.value);
    }

  
    return (
      <Select placeholder='select Date' onChange={MoveInDateHandler}>
        {
          houses.map((house, index)=> 
            <option key={index}>{house.moveInDate}</option>
          )
        }
      </Select>
  
      
    );
}

export default MoveInDateFilter