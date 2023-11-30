import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { Box, Center, Circle, Flex } from "../../../styled-system/jsx";
import Link from "next/link";
import { link } from "fs";
import { useState, useEffect } from "react";

type Props = {
  ttl: string;
};

export default function FormCheckStyle(props: Props) {
  const [state, setState] = useState<Props>({
    ttl: props.ttl,
  });
  return (
    <div className={css({})}>
      <h2
        className={css({
          fontSize: "12px",
          fontWeight: "bold",
          mb: "7px",
        })}
      >
        {state.ttl}
      </h2>
      <p
        className={css({
          fontSize: "10px",
          fontWeight: "bold",
          w: "100%",
          h: "30px",
          pl: "13px",
        })}
      />
    </div>
  );
}
