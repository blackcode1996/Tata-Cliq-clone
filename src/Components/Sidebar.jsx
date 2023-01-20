import { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";

const Sidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <Box>
      <FormControl>
        <FormLabel>Filters</FormLabel>
        <Stack>
          <Button
            variant={selectedFilters.includes("red") ? "solid" : "outline"}
            onClick={() => {
              if (selectedFilters.includes("red")) {
                setSelectedFilters(selectedFilters.filter(f => f !== "red"));
              } else {
                setSelectedFilters([...selectedFilters, "red"]);
              }
            }}
          >
            Red
          </Button>
          <Button
            variant={selectedFilters.includes("green") ? "solid" : "outline"}
            onClick={() => {
              if (selectedFilters.includes("green")) {
                setSelectedFilters(selectedFilters.filter(f => f !== "green"));
              } else {
                setSelectedFilters([...selectedFilters, "green"]);
              }
            }}
          >
            Green
          </Button>
          <Button
            variant={selectedFilters.includes("blue") ? "solid" : "outline"}
            onClick={() => {
              if (selectedFilters.includes("blue")) {
                setSelectedFilters(selectedFilters.filter(f => f !== "blue"));
              } else {
                setSelectedFilters([...selectedFilters, "blue"]);
              }
            }}
          >
            Blue
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Sidebar;