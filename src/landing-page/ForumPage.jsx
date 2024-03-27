import { Card, CardActions, IconButton } from "@mui/material";
import location from "../assets/loc.png";
import people from "../assets/people.png";
import muscat from "../assets/muscat.jpeg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import kawasaki from "../assets/kawasaki.avif";

const ForumPage = () => {
  return (
    <Card
      style={{
        borderRadius: 0,
        padding: "10px 20px 10px 20px",
      }}
    >
      <div style={{ fontSize: 20, fontWeight: "bold", color: "#4267B2" }}>
        {" "}
        Traveller's Forum
      </div>
      <div style={{ marginTop: 20 }}>
        <span>
          <img src={people} style={{ width: "20px", height: "20px" }}></img>
        </span>{" "}
        <span style={{ fontWeight: "bold", color: "#4267B2" }}> Nikitha</span>{" "}
        is Travelling to{" "}
        <span>
          <img src={location} style={{ width: "20px", height: "20px" }}></img>
        </span>{" "}
        <span style={{ fontWeight: "bold", color: "#4267B2" }}>Delhi</span> - 8
        slots left
      </div>
      <img src={muscat} style={{ width: "100%", height: "400px" }}></img>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </CardActions>
      <div style={{ marginTop: 20 }}>
        <span>
          <img src={people} style={{ width: "20px", height: "20px" }}></img>
        </span>{" "}
        <span style={{ fontWeight: "bold", color: "#4267B2" }}> Sachin</span> is
        Seeking Help in
        <span>
          <img src={location} style={{ width: "20px", height: "20px" }}></img>
        </span>{" "}
        <span style={{ fontWeight: "bold", color: "#4267B2" }}>Kerala</span>
      </div>
      <img src={kawasaki} style={{ width: "100%", height: "400px" }}></img>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ForumPage;
