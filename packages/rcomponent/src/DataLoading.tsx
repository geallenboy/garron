import { Empty, Spin } from 'antd';
import React, { memo } from 'react';

interface dataLoadingTyep {
  result: any;
  width?: string;
  height?: string;
  children: any;
}

export const DataLoading = memo(
  ({ result, width = '100%', height = '100%', children }: dataLoadingTyep) => {
    const LoadingDom: any = () => {
      if (result.status === 200 && result.content !== null) {
        return <div>{children}</div>;
      } else if (result.status === 0 && result.loading) {
        return (
          <Spin tip="数据加载中...">
            <div style={{ width: width, height: height }} />
          </Spin>
        );
      } else if (result.status === 200 && result.content === null) {
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'暂无数据'} />;
      } else if (result.status == 500) {
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'数据返回失败'} />;
      } else if (result.status == 101) {
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'暂无权限'} />;
      }
    };

    return <>{LoadingDom()}</>;
  }
);
