import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";

import rehypePrettyCode from "rehype-pretty-code";

import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { Options } from "rehype-pretty-code";

export default async function MDXContent({ source }: MDXRemoteProps) {
  const rehypePrettyCodeOptions: Options = {
    defaultLang: {
      block: "plaintext",
      inline: "plaintext",
    },
    theme: "github-light",
  };
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          // @ts-ignore
          remarkPlugins: [remarkGfm, remarkEmoji],
          // @ts-ignore
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }}
    />
  );
}
