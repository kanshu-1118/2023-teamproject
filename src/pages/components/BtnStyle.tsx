import Head from "next/head";
import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { navArray } from "../libs/nav";
import { Box, Center, Flex } from "../../../styled-system/jsx";
import Link from "next/link";
import { link } from "fs";
import { useState, useEffect } from "react";
import React from "react";

type Props = {
  text?: string;
  href: string;
};

// type onClick = {
//   onClick: any;
// };

//ボタンスタイル（通常）
export default function BtnStyle(props: Props) {
  const [state, setState] = useState<Props>({
    text: props.text,
    href: props.href,
  });

  return (
    <Flex
      className={css({
        justifyContent: "center",
        mt: "40px",
      })}
    >
      <p
        className={css({
          textAlign: "center",
          fontWeight: "bold",
          bg: "#63A6F7",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          p: "8px 66px ",
          w: "fit-content",
          borderRadius: "10px",
        })}
      >
        <button>
          <Link
            href={state.href}
            className={css({
              color: "#FAFCFF",
            })}
          >
            {state.text}
          </Link>
        </button>
      </p>
    </Flex>
  );
}
