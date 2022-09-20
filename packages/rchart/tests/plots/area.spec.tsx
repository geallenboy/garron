import React from 'react';
import { create } from 'react-test-renderer';

import { AreaChart } from '@garron/rchart';

describe('AreaChart', () => {
  test('渲染AreaChart测试', () => {
    const renderer = create(<AreaChart data={[]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
