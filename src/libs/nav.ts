import { faHouse,faPenSquare,faClock,faUser } from "@fortawesome/free-solid-svg-icons";
import { navType } from "../pages/types/navType";

const navArray : navType = [
    {   
        id:"home",
        name: "ホーム",
        link : "/",
        image: faHouse,
    },
    {
        id:"post",
        name: "投稿",
        link : "/post",
        image: faPenSquare,
    },
    {
        id:"timetable",
        name: "時刻表",
        link : "/timetable",
        image: faClock,
    },
    {
        id:"mypage",
        name: "マイページ",
        link : "/link",
        image: faUser,
    },
]

export {navArray}