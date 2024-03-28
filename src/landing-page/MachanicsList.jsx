import { Card, Typography } from "@mui/material";
import driver from "../assets/img4.jpg";

const machanicsList = [
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
  {
    name: "asd",
    age: "39",
    sex: "male",
    shopName: "shop",
    exprience: "1",
    shopImage: driver,
  },
];
function Mechanics(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", background: "white" }}>
      {machanicsList.map(
        ({ name, age, sex, shopName, exprience, shopImage }) => (
          <>
            <Card sx={{ margin: "20px" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "13px",
                }}
              >
                {shopName}
              </Typography>
              <Card sx={{ width: "300px", height: "200px" }}>
                <img
                  src={shopImage}
                  alt="img"
                  style={{ width: "300px", height: "200px", margin: "10px" }}
                />
              </Card>
              <div style={{ margin: "10px" }}>
                {" "}
                <Typography>Name:{name}</Typography>
                <Typography>Exprience:{exprience}</Typography>
                <Typography>Age:{age}</Typography>
                <Typography>Sex:{sex}</Typography>
                <a href="">View Shop Location</a>
              </div>
            </Card>
          </>
        )
      )}
    </div>
  );
}

export default Mechanics;
