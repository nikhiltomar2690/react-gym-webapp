import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  // categories fetching using useeffect becoz they will not change so we get them at start
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exercisesData);

      const searchedExercises = exercisesData.filter((exercise) => {
        exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search);
      });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div
      display="flex"
      margin="auto"
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <div className="search-bar-box">
        <TextField
          className="search"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search"
          sx={{
            bgcolor: "#2A3950",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            mx: "1",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchExercises;
