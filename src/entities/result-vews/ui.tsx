import React from "react";
import { SimpleInlineBannerProps } from "./model";

export const SimpleInlineBanner = ({ url }: SimpleInlineBannerProps) => {
  return (
    <div>
      <img src={url} alt="" style={{maxWidth:"100%"}}/>
    </div>
  );
};
