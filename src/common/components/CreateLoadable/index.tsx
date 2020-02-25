import React, { ReactNode, FC } from 'react';

let LoadingComponent: FC = () => null;

export function setLoadingComponent(cmp): void {
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
