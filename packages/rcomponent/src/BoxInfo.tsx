import Icon from '@ant-design/icons';
import { formatNumber } from '@garron/utils';
import { Tooltip } from 'antd';
import React, { memo } from 'react';
import { TableArrows } from './TableArrows';

interface boxInfoType {
  name?: string;
  dateMode?: string; //比较显示
  pers?: string; //上下箭头
  type?: number; //处理的数据类型
  title?: string; //鼠标放到问号的提示文字
  circle?: boolean; //是否展示问号
  number?: number; //显示中间数字
}

export const BoxInfo = memo(
  ({
    name,
    pers = '',
    type = 1,
    title = 'info',
    circle = false,
    number = 1,
    dateMode = 'day'
  }: boxInfoType) => {
    const dom: any = () => {
      switch (dateMode) {
        case 'day':
          return (
            <div className="tableArrows">
              <TableArrows title="较前一天" number={pers} />
            </div>
          );
        case 'week':
          return (
            <div className="tableArrows">
              <TableArrows title="较前一周" number={pers} />
            </div>
          );
        case 'month':
          return (
            <div className="tableArrows">
              <TableArrows title="较前一月" number={pers} />
            </div>
          );
        case 'L1D' || 'L7D' || 'L15D' || 'L30D':
          return (
            <div className="tableArrows">
              <TableArrows title="较前一周期" number={pers} />
            </div>
          );
        case 'LAST_DIY':
          return null;
        default:
          return '';
      }
    };

    return (
      <div className="boxInfo">
        <p className="font1">
          {name}
          {circle ? (
            <Tooltip title={title}>
              <Icon style={{ fontSize: '14px', marginLeft: '5px' }} type="question-circle-o" />
            </Tooltip>
          ) : (
            ''
          )}
        </p>
        <h3>{formatNumber(type, number)}</h3>
        {dom()}
      </div>
    );
  }
);
