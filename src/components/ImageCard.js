import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const cardStyle = {
  width: "60%",
};

const contentStyle = {
  position: "absolute",
  bottom: "1%",
  right: "3%",
};

const cardDetailStyle = {
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

function ImageCard({ title, picture, description, context }) {
  const handleClick = (event) => {
    event.preventDefault();

    console.log("show me");
  };

  const image = <img alt={title} src={picture} />;

  return (
    <Card hoverable style={cardStyle} cover={image} styles={cardDetailStyle}>
      <Meta title={title} description={description} />
      <div style={contentStyle}>
        <a onClick={handleClick} href="/">
          Show more...
        </a>
      </div>
    </Card>
  );
}

export default ImageCard;
