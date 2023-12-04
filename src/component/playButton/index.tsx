"Use Client";

import Link from "next/link";
import { useState } from "react";

const PlayButton = () => {
  const [loader, setLoader] = useState(false);
  return (
    <>
      {!loader && (
        <Link
          className="playButton"
          href={"/login"}
          onClick={() => setLoader(true)}
        >
          Play
        </Link>
      )}
      {loader && (
        <span className="playButton">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
      )}
    </>
  );
};

export default PlayButton;
