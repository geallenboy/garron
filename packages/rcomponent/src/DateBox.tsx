import { Col, DatePicker, Row, Select } from 'antd';
import moment, { Moment } from 'moment';
import React, { memo, useState } from 'react';
import { dateType, timeType } from './config';
import './style.less';
const { Option } = Select;
const { RangePicker } = DatePicker;

interface fwValType {
  type: number;
  range: any;
  model: string;
}
interface listTypeValType {
  name: string;
  value: string;
}

interface paramsType {
  begDate: string;
  endDate: string;
  showDate: string;
  date: [string, string];
  dateMode: string;
}

export interface dateBoxType {
  defValue?: string;
  curTime?: string;
  listTypeVal?: listTypeValType[];
  dayfwVal?: fwValType;
  dweekfwVal?: fwValType;
  monthfwVal?: fwValType;
  customfwVal?: fwValType;
  dateModeVal?: string;
  onDateBoxChange: any;
}

export const DateBox = memo(
  ({
    defValue = moment().format(dateType),
    curTime = moment().format(dateType),
    dateModeVal = 'day',
    listTypeVal = [
      { name: '实时', value: 'RT' },
      { name: '1天', value: 'L1D' },
      { name: '7天', value: 'L7D' },
      { name: '15天', value: 'L15D' },
      { name: '30天', value: 'L30D' },
      { name: '45天', value: 'L45D' },
      { name: '日', value: 'day' },
      { name: '周', value: 'week' },
      { name: '月', value: 'month' },
      { name: '自定义', value: 'LAST_DIY' }
    ],
    dayfwVal = { type: 0, range: 1, model: 'year' },
    dweekfwVal = { type: 0, range: 1, model: 'year' },
    monthfwVal = { type: 0, range: 1, model: 'year' },
    customfwVal = { type: 0, range: 1, model: 'year' },
    onDateBoxChange
  }: dateBoxType) => {
    const [listTyp] = useState<listTypeValType[]>(listTypeVal);
    const [dayfw] = useState<fwValType>(dayfwVal);
    const [weekfw] = useState<fwValType>(dweekfwVal);
    const [monthfw] = useState<fwValType>(monthfwVal);
    const [customfw] = useState<fwValType>(customfwVal);
    const [defaultValue] = useState<string>(defValue);
    const [currentTime, setCurrentTime] = useState<[Moment, Moment]>([
      moment(curTime),
      moment(curTime)
    ]);
    const [params, setParams] = useState<paramsType>({
      begDate: curTime,
      endDate: curTime,
      showDate: curTime,
      date: [curTime, curTime],
      dateMode: dateModeVal
    });

    const selOnChange = (val: string) => {
      const changeVal = { ...showDate(val, currentTime), dateMode: val };
      setParams(changeVal);
      onDateBoxChange(changeVal);
    };

    const onDatePickChange: any = (date: Moment) => {
      const changeVal = { ...params, ...showDate(params.dateMode, [date, date]) };
      setCurrentTime([date, date]);
      setParams(changeVal);
      onDateBoxChange(changeVal);
    };

    const onRangeChange: any = (
      dates: [Moment, Moment],
      dateStrings: [string, string],
      info: { range: 'start' | 'end' }
    ) => {
      if (info.range === 'end') {
        const changeVal = { ...params, ...showDate(params.dateMode, dates) };
        setCurrentTime(dates);
        setParams(changeVal);
        onDateBoxChange(changeVal);
      }
    };

    //日时间控件选择范围
    const dayDisabledDater = (current: Moment) => {
      if (!current) {
        return false;
      }
      const date = moment(defaultValue).add(dayfw.type, 'day');
      return (
        current.isAfter(date, 'day') ||
        current.isBefore(moment(defaultValue).subtract(dayfw.range, dayfw.model), 'day')
      );
    };
    //周时间控件选择范围
    const weekDisabledDate = (current: Moment) => {
      if (!current) {
        return false;
      }
      const date = moment(defaultValue).add(weekfw.type, 'week');
      return (
        current.isAfter(date, 'week') ||
        current.isBefore(moment(defaultValue).subtract(weekfw.range, weekfw.model), 'week')
      );
    };

    //月时间控件选择范围
    const monthDisabledDate = (current: Moment) => {
      if (!current) {
        return false;
      }
      const date = moment(defaultValue).add(monthfw.type, 'months');
      return (
        current.isAfter(date, 'month') ||
        current.isBefore(moment(defaultValue).subtract(monthfw.range, monthfw.model), 'month')
      );
    };
    //自定义时间控件选择范围
    const customDisabledDater = (current: any) => {
      if (!current) {
        return false;
      }
      const date = moment(defaultValue).add(customfw.type, 'day');
      return (
        current.isAfter(date, 'day') ||
        current.isBefore(moment(defaultValue).subtract(customfw.range, customfw.model), 'day')
      );
    };

    const showDate: any = (val: string, date: any[]) => {
      const dateBeg = moment(date[0]).format('YYYY-MM-DD'),
        dateEnd = moment(date[1]).format('YYYY-MM-DD');
      switch (val) {
        case 'RT': {
          const _newDate = moment(defaultValue).add(1, 'day').format('YYYY-MM-DD');
          const _newDateRT = moment(defaultValue).add(1, 'day').format('YYYY-MM-DD HH:mm:ss');
          return { begDate: _newDate, endDate: _newDate, showDate: _newDate, date: _newDateRT };
        }
        case 'L1D': {
          const begd0 = moment(defaultValue).format('YYYY-MM-DD');
          return { begDate: begd0, endDate: begd0, showDate: begd0, date: begd0 };
        }

        case 'L7D': {
          const begd1 = moment(defaultValue).subtract(6, 'day').format('YYYY-MM-DD'),
            endg1 = moment(defaultValue).format('YYYY-MM-DD');
          return {
            begDate: begd1,
            endDate: endg1,
            showDate: `${begd1} ~ ${endg1}`,
            date: [begd1, endg1]
          };
        }

        case 'L15D': {
          const begd2 = moment(defaultValue).subtract(14, 'day').format('YYYY-MM-DD'),
            endg2 = moment(defaultValue).format('YYYY-MM-DD');
          return {
            begDate: begd2,
            endDate: endg2,
            showDate: `${begd2} ~ ${endg2}`,
            date: [begd2, endg2]
          };
        }

        case 'L30D': {
          const begd3 = moment(defaultValue).subtract(29, 'day').format('YYYY-MM-DD'),
            endg3 = moment(defaultValue).format('YYYY-MM-DD');
          return {
            begDate: begd3,
            endDate: endg3,
            showDate: `${begd3} ~ ${endg3}`,
            date: [begd3, endg3]
          };
        }
        case 'L45D': {
          const begd4 = moment(defaultValue).subtract(44, 'day').format('YYYY-MM-DD'),
            endg4 = moment(defaultValue).format('YYYY-MM-DD');
          return {
            begDate: begd4,
            endDate: endg4,
            showDate: `${begd4} ~ ${endg4}`,
            date: [begd4, endg4]
          };
        }

        case 'day':
          return {
            begDate: dateBeg,
            endDate: dateEnd,
            showDate: dateBeg,
            date: [dateBeg, dateEnd]
          };
        case 'week':
          return {
            begDate: dateBeg,
            endDate: dateEnd,
            showDate: `${dateBeg} 第${moment(date[0]).week()}周`,
            date: `${dateBeg} 第${moment(date[0]).week()}周`
          };
        case 'month': {
          const _newDate2 = moment(date[0]).format('YYYY-MM');
          return { begDate: _newDate2, endDate: _newDate2, showDate: _newDate2, date: _newDate2 };
        }

        case 'LAST_DIY':
          return {
            begDate: dateBeg,
            endDate: dateEnd,
            showDate: dateBeg,
            date: [dateBeg, dateEnd]
          };
        default:
          return null;
      }
    };
    const popCont = (): any => {
      return document.querySelector('.datebox');
    };

    const PickerWithType = ({ type }: { type: string }) => {
      switch (type) {
        case 'RT':
          return <p className="link-p">{moment(defaultValue).format(timeType)}</p>;
        case 'L1D':
          return <p className="link-p">{moment(defaultValue).format(dateType)}</p>;
        case 'L7D':
          return (
            <p className="link-p">{`${moment(defaultValue)
              .subtract(6, 'day')
              .format('YYYY-MM-DD')}~~${moment(defaultValue).format(dateType)}`}</p>
          );
        case 'L15D':
          return (
            <p className="link-p">{`${moment(defaultValue)
              .subtract(14, 'day')
              .format('YYYY-MM-DD')}~~${moment(defaultValue).format(dateType)}`}</p>
          );
        case 'L30D':
          return (
            <p className="link-p">{`${moment(defaultValue)
              .subtract(29, 'day')
              .format('YYYY-MM-DD')}~~${moment(defaultValue).format(dateType)}`}</p>
          );
        case 'L45D':
          return (
            <p className="link-p">{`${moment(defaultValue)
              .subtract(44, 'day')
              .format('YYYY-MM-DD')}~~${moment(defaultValue).format(dateType)}`}</p>
          );
        case 'day':
          return (
            <DatePicker
              showToday={false}
              getPopupContainer={popCont}
              onChange={onDatePickChange}
              allowClear={false}
              disabledDate={dayDisabledDater}
              value={moment(currentTime[0])}
            />
          );
        case 'week':
          return (
            <DatePicker
              onChange={onDatePickChange}
              allowClear={false}
              disabledDate={weekDisabledDate}
              value={moment(currentTime[0])}
              picker="week"
            />
          );
        case 'month':
          return (
            <DatePicker
              onChange={onDatePickChange}
              allowClear={false}
              disabledDate={monthDisabledDate}
              value={moment(currentTime[0])}
              picker="month"
            />
          );
        case 'LAST_DIY':
          return (
            <RangePicker
              onCalendarChange={onRangeChange}
              allowClear={false}
              disabledDate={customDisabledDater}
              value={[moment(currentTime[0]), moment(currentTime[1])]}
            />
          );
        default:
          return null;
      }
    };
    console.log('dateBox');
    return (
      <Row className="datebox">
        <Col span={10}>
          <Select value={params.dateMode} onChange={selOnChange} style={{ width: 80 }}>
            {listTyp.map((k: any) => {
              return (
                <Option key={k.value} value={k.value}>
                  {k.name}
                </Option>
              );
            })}
          </Select>
        </Col>
        <Col span={14} className="text-l">
          <PickerWithType type={params.dateMode} />
        </Col>
      </Row>
    );
  }
);
