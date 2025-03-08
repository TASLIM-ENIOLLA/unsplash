import { Fragment, Suspense } from "react";

import { LayoutProps } from "./types";

export default function Layout({ searchBar, photoGrid, children, searchPhrase }: LayoutProps) {
  return (
    <Fragment>
      {children}
      <Suspense fallback={null}>
        {searchBar}
        {searchPhrase}
      </Suspense>
      {photoGrid}
    </Fragment>
  );
}