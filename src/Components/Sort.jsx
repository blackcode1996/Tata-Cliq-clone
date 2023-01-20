import React, { useEffect, useState } from 'react'
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

const Sort = () => {

  const [sortBy, setSortBy] = useState("newest");

  useEffect(()=>{
    const params={
      sortBy
    }
    
  })

  console.log(sortBy)

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
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </Select>
        </FormControl>
      </Box>
  )
}

export default Sort