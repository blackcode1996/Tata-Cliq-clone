import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Text
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {

  const [searchParams,setSearchParams]=useSearchParams();

  const inittialState=searchParams.getAll("brand")

  const [brand, setBrand] = useState(inittialState||[]);

  

  const handleFilter=(e)=>{

    let newBrand=[...brand]

    if(newBrand.includes(e.target.value)){
      newBrand.splice(newBrand.indexOf(e.target.value),1)
    }else{
      newBrand.push(e.target.value)
    }
    setBrand(newBrand);

  }

  useEffect(()=>{
    const params={
      brand
    }
    setSearchParams(params)
  },[brand])


  return (
    <Box bg={"#fff"} maxW={300} borderRadius={"10px"}>
      <FormControl>
        <FormLabel w={"100%"} display={"flex"}  bg={"#f5f5f5"} justifyContent={"space-between"}>
          <Text padding={"10px"}>Filter</Text>
          <Text padding={"10px"} color={"red"}>Clear All</Text>
        </FormLabel>
        <Accordion allowMultiple >
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Brand
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2> 
                <AccordionPanel pb={4} onChange={handleFilter}>
                 <Checkbox value={"Roadster"} defaultChecked={brand.includes("Roadster")}>Roadster</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"HIGHLANDER"} defaultChecked={brand.includes("HIGHLANDER")}>Highlander</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"H&M"} defaultChecked={brand.includes("H&M")}>H&M</Checkbox>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </FormControl>
    </Box>
  );
};

export default Sidebar;
