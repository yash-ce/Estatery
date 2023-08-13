import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const PriceFilter = () => {
  const { setPrice} = useContext(HouseContext);

  const prices = [
    { value: "10000 - 20000" },
    { value: "20000 - 30000" },
    { value: "30000 - 40000" },
    { value: "40000 - 50000" },
    { value: "50000 - 60000" },
    { value: "100000 - 200000" },
    { value: "200000 - 290000" },
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  

  return (
    <Select placeholder="Select Price" onChange={priceHandler}>
      {prices.map((price, index) =>
          <option key={index}>{price.value}</option>
        )
      }
    </Select>
  );
};

export default PriceFilter;