import React, { useState, useEffect } from "react";

import Text from "./Text";
import { Lines, Line, LandingImg } from "../Style/LandingStyle";
import TextsData from "../Data/Texts.json";

const Texts = () => {
  // 문장
  const s1 = "I'M DevWho";
  const s2 = "FRONTEND";
  const s3 = "DEVELOPER";
  let idx = 0;

  // 사진
  const imgUrl = TextsData.imgUrl;
  const [src, setSrc] = useState(imgUrl[0]);

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
        </Line>{" "}
        <Line>
          {Array.from(s3).map((t) => {
            idx = idx + 1;
            return <Text t={t} key={idx} />;
          })}
        </Line>
      </Lines>
    </LandingImg>
  );
};

export default Texts;
