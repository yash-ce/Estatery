import { createContext, useState, useEffect } from 'react';
import { housesData } from '../constant';

export const HouseContext = createContext('');

const HouseProvider = ({children}) =>{

    const [houses, setHouses] = useState(housesData);
    const [moveInDate, setMoveInDate] = useState('Select Date');
    const [country, setCountry] = useState('Select Country');
    const [countries, setCountries] = useState([]);
    const [price, setPrice] = useState('Select Price');
    const [property, setProperty] = useState('Select Type');
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [allDates, setAllDates] = useState([]);
    
    useEffect(() => {
        const allCountries = houses.map(house=>{
            return house.country;
        })
        const uniqueCountries = ['Select Country',...new Set(allCountries)];
        setCountries(uniqueCountries);
    }, []);

    useEffect(() => {
        const allPropertyTypes = houses.map(house=>{
            return house.type;
        })
        const uniquePropertyTypes = ['Select Type', ...new Set(allPropertyTypes)];
        setProperties(uniquePropertyTypes);
    }, []);

    useEffect(() => {
        const allmoveInDates = housesData.map(house=>{
            console.log(house, house.moveInDate);
            return house.moveInDate;
        })
        const uniqueMoveInDates = [ ...new Set(allmoveInDates)];
        setAllDates(uniqueMoveInDates);
    }, []);

   
    const searchHandler=()=>{
        setIsLoading(true);
        
        const selectors = {};
        if(country !== 'Select Country'){
            selectors['country'] = country;
        }
        if(price !== 'Select Price' && price !== ''){
            selectors['price'] = price;
        }
        if(moveInDate !== 'Select Date'){
            selectors['moveInDate'] = moveInDate;
        }
        if(property !== 'Select Type'){
            selectors['type'] = property;
        }

        let minPrice = 0, maxPrice = 0;
        if('price' in  selectors){
            minPrice = parseInt(price.split(' ')[0]);
            maxPrice = parseInt(price.split('- ')[1]);
        }

  
        const filteredHouses = housesData.filter( house => {

            return (
                (!selectors['country'] || house.country === selectors['country']) &&
                (!selectors['type'] || house.type === selectors['type']) &&
                (!selectors['moveInDate'] || house.moveInDate === selectors['moveInDate']) &&
                ((minPrice > 0 && maxPrice > 0) ? (parseInt(house.price) >= minPrice && parseInt(house.price) <= maxPrice) : true)
              );

            
        })

        setTimeout(() => {
            filteredHouses.length>0 ? setHouses(filteredHouses) : setHouses([]);
            setIsLoading(false);
        }, 1000);
    }

    
    
    return(
        <HouseContext.Provider value={{
            houses,
            country,
            setCountry,
            countries,
            price,
            setPrice,
            property,
            setProperty,
            properties,
            searchHandler,
            isLoading,
            moveInDate,
            setMoveInDate,
            allDates
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseProvider;