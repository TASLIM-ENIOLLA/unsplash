import { Fragment } from "react";

import { LayoutProps } from "./types";

export default function Layout({ searchBar, photoGrid, children, searchPhrase }: LayoutProps) {
  return (
    <Fragment>
      {children}
      {searchBar}
      {searchPhrase}
      {photoGrid}
    </Fragment>
  );
}