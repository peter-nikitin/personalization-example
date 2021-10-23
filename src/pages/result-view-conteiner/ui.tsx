import { Skeleton } from "antd";
import "html5-device-mockups/dist/device-mockups.css";
import { $resultBanner } from ".";
import { SimpleInlineBanner } from "entities/result-vews";
import { useStore } from "effector-react";

export const ResultView = () => {

  const bannerUrl = useStore($resultBanner); 

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

            {bannerUrl && <SimpleInlineBanner url={bannerUrl} />}
          </div>
          <div className="button">
            {/* <!-- You can hook the "home button" to some JavaScript events or just remove it --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
