import { BarChart } from '@garron/rchart';
import React from 'react';
import { create } from 'react-test-renderer';

describe('BarChart', () => {
  test('渲染BarChart测试', () => {
    const renderer = create(<BarChart data={[]} xField="x" yField="y" />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
