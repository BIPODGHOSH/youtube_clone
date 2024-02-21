import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import { apiData } from "../utils/apiData";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    apiData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    apiData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  const theme = useTheme();
  if (!videoDetails) return "Loading....";

  const {
    snippet: { title, channelId, channelTitle, publishedAt },
    statistics: { likeCount, viewCount },
  } = videoDetails;

  return (
    <Box minHeight={"95vh"} ml={{ md: "20px" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} mb={{ xs: "30px", sm: "20px" }} borderRadius={"20%"}>
          <Box width="100%" position="sticky" top="80px" bgcolor={"#373535"}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
              width={"100%"}
            />
            <Typography
              variant={theme.breakpoints.down("sm") ? "subtitle1" : "h6"}
              color="white"
              fontWeight="bold"
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              color={"#fff"}
              pl={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle1" color={"#fff"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "14px", color: "#c0b3b3", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Stack
                direction="row"
                gap="25px"
                alignItems="center"
                color="#fff"
              >
                <Typography variant="subtitle2">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="subtitle2">
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, sm: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {relatedVideos && (
            <Videos videos={relatedVideos} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
