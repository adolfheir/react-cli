import React from 'react';

let LoadingComponent = () => null;

export function setLoadingComponent(cmp) {
  LoadingComponent = cmp;
}

export function createLoadable(loader) {
  const LazyComponet = React.lazy(loader);
  return (props) => (
    <React.Suspense fallback={<LoadingComponent />}>
      <LazyComponet {...props} />
    </React.Suspense>
  );
}
