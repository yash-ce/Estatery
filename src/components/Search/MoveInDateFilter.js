import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

function MoveInDateFilter() {

    const {setMoveInDate, allDates } = useContext(HouseContext);

    const MoveInDateHandler = (event)=> {
      setMoveInDate(event.target.value);
    }

  
    return (
      <Select onChange={MoveInDateHandler}>
        {
            allDates.map((date, index)=> 
          
            <option key={index}>{date}</option>
          )
        }
      </Select>
  
      
    );
}

export default MoveInDateFilter