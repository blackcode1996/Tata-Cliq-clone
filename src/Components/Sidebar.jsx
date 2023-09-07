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
import "./Single.css";


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
    <Box className="Sidebar" border={"1px solid red"} bg={"#fff"} maxW={250} borderRadius={"10px"}>
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
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"The Indian Garage Co"} defaultChecked={brand.includes("The Indian Garage Co")}>The Indian Garage Co</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"LOCOMOTIVE"} defaultChecked={brand.includes("LOCOMOTIVE")}>Locomotive</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"Dennis Lingo"} defaultChecked={brand.includes("Dennis Lingo")}>Dennis Lingo</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"HRX by Hrithik Roshan"} defaultChecked={brand.includes("HRX by Hrithik Roshan")}>HRX</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"United Colors of Benetton"} defaultChecked={brand.includes("United Colors of Benetton")}>United Colors of Benetton</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"IVOC"} defaultChecked={brand.includes("IVOC")}>IVOC</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"Mast & Harbour"} defaultChecked={brand.includes("Mast & Harbour")}>Mast & Harbour</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"Lee"} defaultChecked={brand.includes("Lee")}>Lee</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"DENNISON"} defaultChecked={brand.includes("DENNISON")}>Dennision</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"HERE&NOW"} defaultChecked={brand.includes("HERE&NOW")}>Here & Now</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"Levis"} defaultChecked={brand.includes("Levis")}>Levis</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"WROGN"} defaultChecked={brand.includes("WROGN")}>WROGN</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"Urbano Fashion"} defaultChecked={brand.includes("Urbano Fashion")}>Urbano Fashion</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"High Star"} defaultChecked={brand.includes("High Star")}>High Star</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"KRA"} defaultChecked={brand.includes("KRA")}>KRA</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"Blackberrys"} defaultChecked={brand.includes("Blackberrys")}>Blackberrys</Checkbox>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Type
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2> 
                <AccordionPanel pb={4} onChange={handleFilter}>
                 <Checkbox value={"Men Slim Fit Casual Shirt"} defaultChecked={brand.includes("Men Slim Fit Casual Shirt")}>Shirt</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox value={"Men Slim Fit Jeans"} defaultChecked={brand.includes("Men Slim Fit Jeans")}>Jeans</Checkbox>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Size
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2> 
                <AccordionPanel pb={4} onChange={handleFilter}>
                 <Checkbox defaultChecked={brand.includes("Men Slim Fit Casual Shirt")}>Small</Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} onChange={handleFilter} >
                 <Checkbox defaultChecked={brand.includes("Men Slim Fit Jeans")}>Large</Checkbox>
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
