import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
export const Home = () => {
  return (
    <div>
      <Card
        style={{
          background: "linear-gradient(to right, gray, black)",
          width: "30rem",
          padding: "10px",
          margin: "auto",
          color: "white",
        }}
      >
        <CardMedia
          image="/images/bank_heist1.jpg"
          title="bank heist"
          sx={{ height: 500 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Welcome to Bad Bank!
          </Typography>
          <Typography>
            A really bad bank. We practically invite robbers to steal from you.
            What? Not a fan of a good heist?
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
