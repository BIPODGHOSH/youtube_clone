import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import React from "react";

const VideoCard = ({ video }) => {
  // console.log(video);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "340px" },
        boxShadow: "none",
        borderRadius: "none",
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <Link to={video.id.videoId && `/video/${video.id.videoId}`}>
        <CardMedia
          component="img"
          alt={video.snippet.title}
          image={video?.snippet?.thumbnails?.high?.url}
          sx={{ width: { xs: "100%", sm: "360px" }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ background: "#1e1e1e", height: "85px", width: "auto" }}
      >
        <Link to={video.id.videoId && `/video/${video.id.videoId}`}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#fff">
            {video.snippet.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            video.snippet?.channelId && `/channel/${video.snippet?.channelId}`
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color="#d0caca">
            {video.snippet?.channelTitle}
            <CheckCircle
              sx={{ fontSize: "12px", marginLeft: "5px", mt: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
