import { Card, Typography } from "@mui/material";
import driver from "../assets/img3.jpg";

const machanicsList = [
  {
    name: "Prabaharan",
    age: "39",
    sex: "male",
    shopName: "Madurai",
    exprience: "5",
    shopImage: driver,
  },
  {
    name: "Shiva",
    age: "39",
    sex: "male",
    shopName: "Theni",
    exprience: "3",
    shopImage: driver,
  },
  {
    name: "Dervin",
    age: "35",
    sex: "male",
    shopName: "Kanyakumari",
    exprience: "3",
    shopImage: driver,
  },
  {
    name: "Babin",
    age: "39",
    sex: "male",
    shopName: "Tirunelveli",
    exprience: "3",
    shopImage: driver,
  },
  {
    name: "Shiva",
    age: "39",
    sex: "male",
    shopName: "Theni",
    exprience: "3",
    shopImage: driver,
  },
  {
    name: "Lokesh",
    age: "39",
    sex: "male",
    shopName: "Chennai",
    exprience: "11",
    shopImage: driver,
  },
  {
    name: "Sachin",
    age: "45",
    sex: "male",
    shopName: "Ariyalur",
    exprience: "3",
    shopImage: driver,
  },
  {
    name: "Jadeja",
    age: "39",
    sex: "male",
    shopName: "Gujarath",
    exprience: "7",
    shopImage: driver,
  },
];
function Mechanics(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "white",
        padding: "70px 20px",
      }}
    >
      {machanicsList.map(
        ({ name, age, contact, shopName, exprience, shopImage }) => (
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
                <Typography>Name:{name}</Typography>
                <Typography>Exprience:{exprience}</Typography>
                <Typography>Age:{age}</Typography>
                <Typography>Contact:{contact}</Typography>
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
