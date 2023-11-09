import React, { lazy, Suspense } from 'react';

/*
    LazyLoad la 1 function
        + Nhan vao 1 doi so duy nhat (import Func)
*/
const LazyLoad = (importFunc) => {
//   const LazyComponent = lazy(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(importFunc());
//       }, 2000);
//     });
//   });
  //const LazyComponent = lazy(importFunc);
  
  return () => (
    <Suspense fallback={<>Loading...</>}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoad;