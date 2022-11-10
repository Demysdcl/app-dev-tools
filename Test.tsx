import React, { useState } from 'react';
import { Text } from 'react-native';
import * as S from './styles';

interface MyComponentProps {
  value: string;
}

export const MyComponent = ({ value }: MyComponentProps) => {
  const [state, setState] = useState();

  return (
    <S.MyComponentRoot>
      <Text>{value}</Text>
    </S.MyComponentRoot>
  );
};
