import ImageCard from "../components/ImageCard";
import fatherPic from "../picture/father_AD.jpg";
import sunnyPic from "../picture/sunny_AD.jpg";
import napoliPic from "../picture/napoli_AD.jpg";
import Input from "antd/es/input/Input";

const pictures = [
  {
    title: "Father父親節蛋糕滿足",
    pic: fatherPic,
    desc: "這是一個來自測試父親節的小蛋糕",
  },
  {
    title: "Sunny小蛋糕是最佳",
    pic: sunnyPic,
    desc: "這是一個來自測試的小蛋糕",
  },
  {
    title: "Napoli小蛋糕是最妙",
    pic: napoliPic,
    desc: "這是一個來自測試Napoli的小蛋糕",
  },
  {
    title: "Father父親節",
    pic: fatherPic,
    desc: "這是一個來自測試小蛋糕",
  },
  {
    title: "Sunny是最佳",
    pic: sunnyPic,
    desc: "這是一個來自測蛋糕",
  },
  {
    title: "Napoli小最妙",
    pic: napoliPic,
    desc: "這是來自測試Napoli的小蛋糕",
  },
  {
    title: "Father父親節蛋糕滿足",
    pic: fatherPic,
    desc: "這是一個來自測試父親節的小蛋糕",
  },
  {
    title: "Sunny小蛋糕是最佳",
    pic: sunnyPic,
    desc: "這是一個來自測試的小蛋糕",
  },
  {
    title: "Napoli小蛋糕是最妙",
    pic: napoliPic,
    desc: "這是一個來自測試Napoli的小蛋糕",
  },
  {
    title: "Father父親節",
    pic: fatherPic,
    desc: "這是一個來自測試小蛋糕",
  },
  {
    title: "Sunny是最佳",
    pic: sunnyPic,
    desc: "這是一個來自測蛋糕",
  },
  {
    title: "Napoli小最妙",
    pic: napoliPic,
    desc: "這是來自測試Napoli的小蛋糕",
  },
  {
    title: "Father父親節",
    pic: fatherPic,
    desc: "這是一個來自測試小蛋糕",
  },
  {
    title: "Sunny是最佳",
    pic: sunnyPic,
    desc: "這是一個來自測蛋糕",
  },
  {
    title: "Napoli小最妙",
    pic: napoliPic,
    desc: "這是來自測試Napoli的小蛋糕",
  },
  {
    title: "Father父親節",
    pic: fatherPic,
    desc: "這是一個來自測試小蛋糕",
  },
  {
    title: "Sunny是最佳",
    pic: sunnyPic,
    desc: "這是一個來自測蛋糕",
  },
  {
    title: "Napoli小最妙",
    pic: napoliPic,
    desc: "這是來自測試Napoli的小蛋糕",
  },
];

function Dessert() {
  const renderedImage = pictures.map((picture, index) => {
    return (
      <ImageCard
        title={picture.title}
        description={picture.desc}
        context={picture.desc}
        picture={picture.pic}
        key={index}
      />
    );
  });

  return (
    <div>
      <form className="m-4 p-4 flex content-end">
        <label className="text-2xl">搜尋標題</label>
        <Input className="w-1/4" size="large" placeholder="請輸入搜尋文字" />
      </form>
      <div className="grid grid-cols-4 gap-3 place-items-center p-4">
        {renderedImage}
      </div>
    </div>
  );
}

export default Dessert;
