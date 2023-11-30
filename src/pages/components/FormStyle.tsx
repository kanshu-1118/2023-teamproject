import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { Box, Center, Circle, Flex } from "../../../styled-system/jsx";
import Link from "next/link";
import { link } from "fs";
import { useState, useEffect } from "react";

type Props = {
  ttl: string;
  placeholder: string;
  // name: string;
  // username: string;
  // prefectures: any;
  // birth: number;
  // tel: number;
  // email: number;
  // password: any;
};

export default function FormStyle(props: Props) {
  const [state, setState] = useState<Props>({
    ttl: props.ttl,
    placeholder: props.placeholder,
  });
  return (
    <div
      className={css({
        m: "0 0 44px 0 ",
      })}
    >
      <h2
        className={css({
          fontSize: "12px",
          fontWeight: "bold",
          mb: "4px",
        })}
      >
        {state.ttl}
      </h2>
      <input
        type="text"
        className={css({
          fontSize: "10px",
          fontWeight: "bold",
          w: "100%",
          h: "30px",
          pl: "13px",

          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
        })}
        placeholder={state.placeholder}
      />
    </div>
  );
}
