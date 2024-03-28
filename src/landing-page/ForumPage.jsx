import { Card, CardActions, IconButton } from "@mui/material";
import location from "../assets/loc.png";
import people from "../assets/people.png";
import muscat from "../assets/muscat.jpeg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import kawasaki from "../assets/kawasaki.avif";

const forum = [
  {
    name: "Nikitha",
    reson: "is Travelling to",
    goingTo: "Delhi",
    slate: " 8 slots left",
    img: muscat,
    description:
      "Book your tickets now to explore the stunning scenaries of Delhi",
  },
  {
    name: "",
    reson: "is Seeking Help in",
    goingTo: "Kerala",
    slate: "",
    img: kawasaki,
    description: "",
  },
];

const ForumPage = () => {
  return (
    <Card
      style={{
        borderRadius: 0,
        padding: " 86px 66px 29px",
      }}
    >
      <div style={{ fontSize: 20, fontWeight: "bold", color: "#4267B2" }}>
        {" "}
        Traveller's Forum
      </div>
      {forum.map((item) => (
        <>
          <Card
            style={{
              padding: "2px 25px",
              boxShadow: " 10px 9px 8px -10px",
              width: "96%",
              display: "flex",
              margin: "20px",
            }}
          >
            <div>
              <div style={{ marginTop: 20 }}>
                <span>
                  <img src={people} style={{ width: "20px", height: "20px" }} />
                </span>{" "}
                <span style={{ fontWeight: "bold", color: "#4267B2" }}>
                  {" "}
                  {item.name}
                </span>{" "}
                {item.reson}{" "}
                <span>
                  <img
                    src={location}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>{" "}
                <span style={{ fontWeight: "bold", color: "#4267B2" }}>
                  {item.goingTo}
                </span>{" "}
                {item.slate}
              </div>
              <img
                src={item.img}
                style={{
                  width: "900px",
                  height: "490px",
                  margin: "10px",
                }}
              ></img>
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
            </div>
            <div style={{ margin: "auto", padding: "95px" }}>
              <p>{item.description}</p>
            </div>
          </Card>
        </>
      ))}
      {/* <div style={{ marginTop: 20 }}>
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
      <img src={kawasaki} style={{ width: "60%", height: "490px" }}></img>
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
      </CardActions> */}
    </Card>
  );
};

export default ForumPage;
