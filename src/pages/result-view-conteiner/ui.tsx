import { Skeleton } from "antd";
import React from "react";
import "html5-device-mockups/dist/device-mockups.css";
import { ResultViewContenerProps } from ".";
import { SimpleInlineBanner } from "entities/result-vews";

export const ResultView = ({ bannerImageUrl }: ResultViewContenerProps) => {
  return (
    <div>
      <div className="device-wrapper">
        <div
          className="device"
          data-device="iPhone7"
          data-orientation="portrait"
          data-color="black"
        >
          <div
            className="screen"
            style={{ backgroundColor: "white", padding: "15px 10px" }}
          >
            <Skeleton />

            {bannerImageUrl && <SimpleInlineBanner url={bannerImageUrl} />}
          </div>
          <div className="button">
            {/* <!-- You can hook the "home button" to some JavaScript events or just remove it --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
