import React, { useState } from 'react'
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

const Sort = () => {

    const [sortBy, setSortBy] = useState("newest");

  return (
    <Box display={"flex"} maxW={"20%"} mt={"20px"} mr={"20px"} float={"right"}>
        <FormControl>
          <FormLabel htmlFor="sort-by">Sort By</FormLabel>
          <Select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            border={"1px solid gray"}
          >
            <option value="newest">Newest</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </Select>
        </FormControl>
        {/* <Box w={"20px"} he={"20px"}>
            <Box w={""} h={""}></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Box> */}
      </Box>
  )
}

export default Sort