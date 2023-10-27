import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { Box, Center, Circle, Flex } from "../../../styled-system/jsx";
import Link from "next/link";
import { link } from "fs";
import { registCountArray } from "../libs/registCount";

export default function Form01() {
  return (
    <div>
      <Flex>
        <Circle
          className={css({
            w: "50px",
            h: "50px",
            bg: "main",
          })}
        ></Circle>
      </Flex>
    </div>
  );
}
