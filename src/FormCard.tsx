import React, { useEffect, useState } from 'react'
import { FormsEntity } from './forms-declaration';
import determineIsInTargeting from './utils/determineIsInTargeting';
import parseFormInfo from './utils/parseFormInfo';
import checkMindboxSegment from "./checkMindboxSegment";
import { Card, Col } from 'antd';

type FormProps = {
  formInfo: FormsEntity;
};

const FormCard = ({ formInfo }: FormProps) => {

  const [isInTargeting, setIsInTargeting] = useState<boolean>(false)
  const { targeting, views } = parseFormInfo(formInfo);

  useEffect(() => {
     if (targeting) {
       checkMindboxSegment(
         targeting[0].value.segmentation,
         targeting[0].value.operation
       ).then((data) => {
         setIsInTargeting(determineIsInTargeting(targeting[0], data));
         console.log(determineIsInTargeting(targeting[0], data));
       });
     }
   
  }, [formInfo]);

 
  return (
    <Col span={14} key={formInfo.id}>
      <Card title={formInfo.name} bordered={false}>
        Field: {targeting && targeting[0].field} <br />
        Segmentation: {targeting && targeting[0].value.segmentation}
        <br />
        Status: {isInTargeting!.toString()}
      </Card>
    </Col>
  );
};

export default FormCard;

