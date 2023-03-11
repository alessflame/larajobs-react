import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Button,
  Card,
} from "@chakra-ui/react";
import { setFilter } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

function CategoryFilter({ categories }) {
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useDispatch();

  return (
    <Card
      mt={3}
      width={"80%"}
      boxShadow={"base"}
      paddingY={5}
      paddingX={10}
      borderRadius={10}
    >
      <form>
        <FormControl width={"100%"} flexDirection={"column"} alignItems={"center"} display={"flex"} >
          <FormLabel>Categorie</FormLabel>
          <Select
            width={  {sm: '90%',
            md: '50%', lg: '60%',}}
            placeholder="Tutte le categorie"
            onChange={(e) => setFilterValue(e.target.value)}
          >
            {categories.length > 0
              ? categories.map((category) => {
                  return (
                    
                    <option key={category.id} value={category.name}>
                        {category.name}
                      
                    </option>
                  );
                })
              : " "}
          </Select>
        </FormControl>

        <Button
          color={"white"}
          bg={"teal"}
          _hover={{ bg: "teal.300" }}
          mt={2}
          onClick={() => dispatch(setFilter(filterValue))}
        >
          Filtra
        </Button>
      </form>
    </Card>
  );
}

export default CategoryFilter;
