import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  // console.log(videos);
  // if (!videos) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="space-around"
      gap={2}
    >
      {videos?.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
