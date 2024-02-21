import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetails, marginTop }) => {
  // console.log(channelDetails);
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "350px", md: "320px" },
        margin: "auto",
        height: "320px",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetails?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetails?.snippet?.thumbnails?.high.url}
            alt={channelDetails?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: "12px", marginLeft: "5px", mt: "5px" }}
            />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
