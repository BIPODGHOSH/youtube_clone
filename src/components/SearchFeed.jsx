import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { apiData } from "../utils/apiData";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    apiData(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overFlowY: "auto" }} height="90vh" flex={2}>
      <Typography variant="h4" fontWeight="bold" mb={2} color="white">
        Search result for: <span style={{ color: "red" }}>{searchTerm}</span>{" "}
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
