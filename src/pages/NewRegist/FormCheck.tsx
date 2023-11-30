import Link from "next/link";
import { css } from "../../../styled-system/css";

import FormStyle from "../components/FormStyle"; //input

import BtnStyle from "../components/BtnStyle"; //ボタンスタイル（共通で使う）
import PageMoveBar from "../components/RegistPageCount";
import { Box, Center, Circle, Flex } from "../../../styled-system/jsx";
import FormCheckStyle from "../components/FormCheckStyle";

export default function FormCheck() {
  return (
    <>
      <div>
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
                  zIndex: "100",
                })}
              ></line>
              <Circle
                className={css({
                  w: "20px",
                  h: "20px",
                  bg: "#B9DDFF",
                  zIndex: "100",
                })}
              ></Circle>
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
            </Flex>
          </div>
        </div>

        <div
          className={css({
            w: "338px",
            border: "1px solid #187DF8",
            m: "0 auto",
            p: "14px 0 0 44px",
          })}
        >
          <FormCheckStyle ttl="名前"></FormCheckStyle>
          <FormCheckStyle ttl="ユーザー名"></FormCheckStyle>
          <FormCheckStyle ttl="お住まいの都道府県"></FormCheckStyle>
          <FormCheckStyle ttl="生年月日(任意)"></FormCheckStyle>
          <FormCheckStyle ttl="電話番号"></FormCheckStyle>
          <FormCheckStyle ttl="メールアドレス"></FormCheckStyle>
          <FormCheckStyle ttl="パスワード(半角英字6文字以上)"></FormCheckStyle>
          <FormCheckStyle ttl="パスワード(確認)"></FormCheckStyle>
        </div>
        <Flex
          className={css({
            justifyContent: "center",
            gap: "10px",
          })}
        >
          <BtnStyle href="./RegistForm" text="編集"></BtnStyle>
          <BtnStyle href="./MyRoot" text="送信"></BtnStyle>
        </Flex>
      </div>
    </>
  );
}
//BtnStyleのコンポーネント無視してbtn作る。(hrefのpropsでの使い方がよくわからん)
