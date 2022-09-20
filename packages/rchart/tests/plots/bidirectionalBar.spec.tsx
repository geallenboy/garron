import { BidirectionalBarChart } from '@garron/rchart';
import React from 'react';
import { create } from 'react-test-renderer';

describe('BidirectionalBarChart', () => {
  test('渲染BidirectionalBarChart测试', () => {
    const renderer = create(<BidirectionalBarChart data={[]} xField="a" yField={['b', 'c']} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
