import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { channelId } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [channelId]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(342deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 48%, rgba(224,149,231,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
