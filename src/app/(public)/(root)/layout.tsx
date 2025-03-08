"use client";

import { motion } from "motion/react";
import { Fragment, Suspense } from "react";

import { LayoutProps } from "./types";

export default function Layout({ searchBar, photoGrid, children, searchPhrase }: LayoutProps) {
  return (
    <motion.section initial={{ opacity: 0, translateY: "5%" }} animate={{ opacity: 1, translateY: 0, transition: { duration: 1 } }}>
      {children}
      <Suspense fallback={null}>
        {searchBar}
        {searchPhrase}
      </Suspense>
      {photoGrid}
    </motion.section>
  );
}