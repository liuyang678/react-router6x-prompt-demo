import * as React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Back() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return <Button onClick={onClick}>Back</Button>;
}
