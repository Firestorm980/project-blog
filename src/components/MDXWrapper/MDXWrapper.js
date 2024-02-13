import React from "react";
import dynamic from 'next/dynamic'
import CodeSnippet from "../CodeSnippet";
import { MDXRemote } from 'next-mdx-remote/rsc'

const MAPPED_COMPONENTS = {
  pre: CodeSnippet,
  DivisionGroupsDemo: dynamic(() => import('@/components/DivisionGroupsDemo')),
  CircularColorsDemo: dynamic(() => import('@/components/CircularColorsDemo')),
};

function MDXWrapper({ content, children }) {

  return (
    <MDXRemote
        source={content}
        components={MAPPED_COMPONENTS}
    />
  );
}

export default MDXWrapper;
