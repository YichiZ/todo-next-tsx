import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

export function getLocation(
  context: GetServerSidePropsContext<ParsedUrlQuery>
): string {
  return `${context.req.headers.referer?.split(":")[0]}://${
    context.req.headers.host
  }`;
}
