import Head from "next/head";
import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { navArray } from "../libs/nav";
import { Box, Center, Flex } from "../../../styled-system/jsx";
import Link from "next/link";
import { link } from "fs";

type insert = {
  text?: string;
};

export default function NewRegist({ text }: insert) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={css({
          bg: "main",
          position: "fixed",
          top: "0",
          w: "100vw",
          h: "72px",
        })}
      ></header>
      <p
        className={css({
          bg: "#D9D9D9",
          fontSize: "20px",
          fontWeight: "bold",
          lineHeight: "41px",
          w: "230px",
          h: "40px",
          m: "388px auto",
          borderRadius: "10px",
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.25)",
          textAlign: "center",
          //   dropShadow: ç
        })}
      >
        <button>
          <Link href={"register/regist-02"}> {text}</Link>
        </button>
      </p>
    </div>
  );
}

// type props = {
//   email?: number;
//   password?: number;
// };
