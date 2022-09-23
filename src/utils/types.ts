/* eslint-disable no-unused-vars */

type RouteProps = {
  name: string;
  path: string;
  index: boolean;
  element: () => JSX.Element;
  childrens: ChildrensProps[];
  icon: (props) => JSX.Element | null;
};

type ChildrensProps = {
  path: string;
  element: () => JSX.Element;
};
type RoutesProps = {
  navbar: RouteProps[];
  footer: RouteProps[];
  default: RouteProps[];
};

export type { RoutesProps, RouteProps };
