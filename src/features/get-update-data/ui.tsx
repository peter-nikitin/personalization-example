import { Button } from 'antd'
import React from 'react'
import { GetUpdatedDataProps } from './model'

import { ReloadOutlined } from "@ant-design/icons";


export const GetUpdatedData = ({getUpdatedData}: GetUpdatedDataProps) => {
  return (
    <div>
      <Button onClick={getUpdatedData} icon={<ReloadOutlined />}>Обновить</Button>
    </div>
  );
}
