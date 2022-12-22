import React, { useState, useEffect } from "react";

import Text from "./Text";
import { Lines, Line, LandingImg } from "../Style/ComponentStyle";

const Texts = () => {
  // 문장
  const s1 = "HELLO";
  const s2 = "I'M YOU";
  let idx = 0;

  // 사진
  const [src, setSrc] = useState(
    "https://cdn.pixabay.com/photo/2022/11/30/13/50/winter-7626888_1280.jpg"
  );

  const imgUrl = [
    "https://cdn.pixabay.com/photo/2022/11/30/13/50/winter-7626888_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/11/05/10/bird-7648202_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_1280.jpg",
  ];

  const RandomNumber = (l) => {
    return Math.floor(Math.random() * (l - 1) + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const n = RandomNumber(imgUrl.length);
      setSrc(imgUrl[n - 1]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LandingImg url={src}>
      <Lines>
        <Line>
          {Array.from(s1).map((t) => {
            idx = idx + 1;
            return <Text t={t} key={idx} />;
          })}
        </Line>
        <Line>
          {Array.from(s2).map((t) => {
            idx = idx + 1;
            return <Text t={t} key={idx} />;
          })}
        </Line>
      </Lines>
    </LandingImg>
  );
};

export default Texts;
