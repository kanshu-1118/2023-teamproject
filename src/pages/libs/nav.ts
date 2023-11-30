import {
  faHouse,
  faPenSquare,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { navType } from "../types/navType";

const navArray: navType = [
  {
    id: "home",
    name: "ホーム",
    link: "#",
    image: faHouse,
  },
  {
    id: "post",
    name: "投稿",
    link: "#",
    image: faPenSquare,
  },
  {
    id: "time",
    name: "時刻表",
    link: "#",
    image: faClock,
  },
  {
    id: "mypage",
    name: "マイページ",
    link: "#",
    image: faUser,
  },
];

export { navArray };
