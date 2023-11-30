import Link from "next/link";
import { useState } from "react";
import { css } from "../../../styled-system/css";

import FormStyle from "../components/FormStyle"; //input

import BtnStyle from "../components/BtnStyle"; //ボタンスタイル（共通で使う）
import { Box, Center, Circle, Flex } from "../../../styled-system/jsx";
import { divider } from "../../../styled-system/patterns";

export default function RegistForm() {
  //関数
  // const [state, setState] = useState(CircleAry[0]);
  // const RegisterPage = () => {
  //   console.log("btn click");

  //   // 配列内の要素を条件に基づいて検索し、最初に見つかった要素のインデックスを返す
  //   const currentIndex = CircleAry.findIndex(
  //     (circle) => circle.id === state.id
  //   );

  //   // 次に表示するページのインデックス(配列の番号)
  //   const nextIndex = (currentIndex + 1) % CircleAry.length;

  //   if (state.id === 3) {
  //     console.log("app start");
  //     window.location.href = " /";
  //   } else {
  //     // setStateには次の番号を入れる
  //     setState(CircleAry[nextIndex]);
  //   }
  // };
  return (
    <>
      <div
        className={css({
          position: "relative",
        })}
      >
        <div
          className={css({
            w: "100vw",
            mb: "40px",
          })}
        >
          <div
            className={css({
              w: "250px",
              m: "0 auto",
            })}
          >
            <Flex
              className={css({
                m: "115px  auto 0 ",
                justifyContent: "space-around",
                gap: "-0.5",
                alignItems: "center",
                position: "relative",
              })}
            >
              <line
                className={css({
                  position: "absolute",
                  m: "0 auto",
                  p: " 0 80px ",
                  h: "3px",
                  bg: "#B9DDFF",
                  zIndex: "11",
                })}
              ></line>
              <Circle
                className={css({
                  w: "50px",
                  h: "50px",
                  bg: "#63a6f7",
                  zIndex: "100",
                })}
              ></Circle>
              <Circle
                className={css({
                  w: "20px",
                  h: "20px",
                  bg: "#B9DDFF",
                })}
              ></Circle>
              <Circle
                className={css({
                  w: "20px",
                  h: "20px",
                  bg: "#B9DDFF",
                })}
              ></Circle>
            </Flex>
          </div>
        </div>

        <div
          className={css({
            w: "250px",
            m: "40px auto",
          })}
        >
          <Flex
            className={css({
              justifyContent: "space-between",
              gap: "32px",
            })}
          >
            <FormStyle ttl="名前" placeholder="川島"></FormStyle>
            <FormStyle ttl="ㅤㅤㅤㅤ" placeholder="二郎"></FormStyle>
          </Flex>
          <FormStyle ttl="ユーザー名" placeholder="jiro"></FormStyle>
          <FormStyle ttl="お住まいの都道府県" placeholder="北海道"></FormStyle>
          <FormStyle ttl="生年月日(任意)" placeholder="19990809"></FormStyle>
          <FormStyle ttl="電話番号" placeholder="08012345678"></FormStyle>
          <FormStyle
            ttl="メールアドレス"
            placeholder="iiko_nakanoyuu@gmail.com"
          ></FormStyle>
          <FormStyle
            ttl="パスワード (半角英数字6文字以上)"
            placeholder="kabaokun117"
          ></FormStyle>
          <FormStyle
            ttl="パスワード(確認)"
            placeholder="kabaokun117"
          ></FormStyle>
          <BtnStyle href="./FormCheck" text="確認"></BtnStyle>
        </div>
      </div>
    </>
  );
}
