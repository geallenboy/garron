import { ArrowDownOutlined, ArrowUpOutlined, MinusOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';
import React, { memo } from 'react';

interface TableArrowsType {
  number: string;
  title?: string; //数值的标题
  suffix?: string; //设置数值的前缀
  precision?: any; //数值精度
  isDecimal?: boolean; //数值是否为小数，小数则乘100转百分比
}

export const TableArrows = memo(
  ({
    number = '0',
    title = '',
    precision = 2,
    suffix = '%',
    isDecimal = true
  }: TableArrowsType) => {
    const dom: any = () => {
      if (number === '0') {
        return (
          <div className="col666 h20">
            <span className="col999 mr10">{title}</span>
            <span>持平</span>
          </div>
        );
      } else if (number === '-') {
        return (
          <div style={{ height: 20 }}>
            <span className="col999 mr10">{title}</span>
            <MinusOutlined style={{ margin: 0 }} />
          </div>
        );
      } else if (number.toString().indexOf('-') === 0) {
        if (number.toString().replace('-', '') === 'null') {
          return (
            <Statistic
              title={<span className="col999">{title}</span>}
              value={'-'}
              formatter={() => <MinusOutlined style={{ margin: 0, color: '#000' }} />}
              valueStyle={{ color: '#59d14c' }}
            />
          );
        } else {
          return (
            <Statistic
              title={<span className="col999">{title}</span>}
              value={
                isDecimal
                  ? (parseFloat(number.toString().replace('-', '')) * 100).toFixed(2)
                  : parseFloat(number.toString().replace('-', ''))
              }
              precision={precision}
              valueStyle={{ color: '#59d14c' }}
              prefix={<ArrowDownOutlined style={{ margin: 0 }} />}
              suffix={suffix}
            />
          );
        }
      } else {
        return (
          <Statistic
            title={<span className="col999">{title}</span>}
            value={isDecimal ? (parseFloat(number) * 100).toFixed(2) : parseFloat(number)}
            precision={precision}
            valueStyle={{ color: '#ff4e5a' }}
            prefix={<ArrowUpOutlined style={{ margin: 0 }} />}
            suffix={suffix}
          />
        );
      }
    };

    return <div className="tableArrow">{dom()}</div>;
  }
);
