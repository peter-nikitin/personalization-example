import { Button } from "antd";
import React from "react";
import { getUpdate, GetUpdatedDataProps } from "./model";

import { ReloadOutlined } from "@ant-design/icons";

export const GetUpdatedData = () => {
  return (
    <div>
      <Button onClick={() => getUpdate()} icon={<ReloadOutlined />}>
        Обновить
      </Button>
    </div>
  );
};
