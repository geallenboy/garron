import React from 'react';

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    // 这个方法呢是 React 官方定义的
    return { error }; // 自动返回一个值以更新 state
  }

  render() {
    const { error } = this.state;
    const { children, fallbackRender } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
