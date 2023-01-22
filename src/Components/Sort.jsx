import React, { useEffect, useState } from 'react'
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';

const Sort = () => {


  return (
    <Box display={"flex"} maxW={"20%"} mt={"20px"} mr={"20px"} float={"right"}>
        <FormControl>
          <FormLabel htmlFor="sort-by">Sort By</FormLabel>
          <Select
            id="sort-by"
            border={"1px solid gray"}
          >
            <option >Price: Low to High</option>
            <option >Price: High to Low</option>
          </Select>
        </FormControl>
      </Box>
  )
}

export default Sort