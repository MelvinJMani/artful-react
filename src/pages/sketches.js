import React, { Suspense } from "react";
import Header from 'components/header';
import Meta from 'components/meta';
import ErrorBoundary from 'components/error';

import { useParams } from "react-router-dom";
import arts from "data/arts-list.json";

function loadComponent(name) {
  const Component = React.lazy(() =>
    import(`sketches/${name}.js`)
  );
  return Component;
}

const Sketches = () => {
  const { id } = useParams();
  const art = arts.find(a => a.slug === id)

  //Dynamic Import the art component based on the selected art
  const Sketch = loadComponent(art.component);

  const pageTitle = `${art.name}`
  const pageDescription = `${art.sub}`

  return (
    <>
      <Meta title={`Sketches | ${pageTitle}`}/>
      <Header head={pageTitle} description={pageDescription} />
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <Sketch />
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default Sketches
