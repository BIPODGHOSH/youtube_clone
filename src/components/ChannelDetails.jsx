import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../utils/apiData";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import SideBar from "./SideBar";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    apiData(`channels?part=snippet&id=${id}`).then((data) => {
      // console.log(data.items[0]);
      setChannelDetail(data?.items[0]);
    });

    apiData(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      // console.log(data);
      setVideos(data?.items);
    });
    console.log(channelDetail);
  }, []);

  return (
    <Box display="flex">
      {/* <Box width="10%">
        <SideBar />
      </Box> */}
      <Box minHeight="95vh" width="100%">
        <div
          style={{
            height: "250px",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            // paddingBottom: "10px",
          }}
        >
          <img
            src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <ChannelCard channelDetails={channelDetail} marginTop="-120px" />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
