import { Button, PageHeader } from "antd";
import { GetUpdatedData } from "features/get-update-data";
import React from "react";
import { HeaderProps } from "./model";

export const Header = ({getBack, onBtnClick, title} : HeaderProps) => {
  return (
    <PageHeader
      ghost={false}
      onBack={getBack}
      title={title}
      extra={[<GetUpdatedData getUpdatedData={onBtnClick} />]}
    />
  );
};
