import ImageCard from "../components/ImageCard";
import Input from "antd/es/input/Input";
import BerryPie from "../picture/pie_Berry.jpg";
import ChocoPie from "../picture/pie_Choco.jpg";
import EarlyPie from "../picture/pie_Early.jpg";
import MatchaPie from "../picture/pie_Matcha.jpg";
import TaroPie from "../picture/pie_Taro.jpg";

const pictures = [
  {
    title: "藍莓蛋糕",
    pic: BerryPie,
    desc: "簡易藍莓蛋糕最對味",
  },
  {
    title: "巧克力蛋糕",
    pic: ChocoPie,
    desc: "巧克力蛋糕濃醇香最對味",
  },
  {
    title: "切層蛋糕",
    pic: EarlyPie,
    desc: "蛋糕精緻最香",
  },
  {
    title: "瑪哈奇蛋糕",
    pic: MatchaPie,
    desc: "不尋常的口味最香噴噴",
  },
  {
    title: "芋頭蛋糕",
    pic: TaroPie,
    desc: "芋頭控的最愛",
  },
  {
    title: "藍莓蛋糕",
    pic: BerryPie,
    desc: "簡易藍莓蛋糕最對味",
  },
  {
    title: "巧克力蛋糕",
    pic: ChocoPie,
    desc: "巧克力蛋糕濃醇香最對味",
  },
  {
    title: "切層蛋糕",
    pic: EarlyPie,
    desc: "蛋糕精緻最香",
  },
  {
    title: "瑪哈奇蛋糕",
    pic: MatchaPie,
    desc: "不尋常的口味最香噴噴",
  },
  {
    title: "芋頭蛋糕",
    pic: TaroPie,
    desc: "芋頭控的最愛",
  },
  {
    title: "藍莓蛋糕",
    pic: BerryPie,
    desc: "簡易藍莓蛋糕最對味",
  },
  {
    title: "巧克力蛋糕",
    pic: ChocoPie,
    desc: "巧克力蛋糕濃醇香最對味",
  },
  {
    title: "切層蛋糕",
    pic: EarlyPie,
    desc: "蛋糕精緻最香",
  },
  {
    title: "瑪哈奇蛋糕",
    pic: MatchaPie,
    desc: "不尋常的口味最香噴噴",
  },
  {
    title: "芋頭蛋糕",
    pic: TaroPie,
    desc: "芋頭控的最愛",
  },
];

function Pie() {
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

export default Pie;
