type RouteProps = {
    name: string
    path: string
    index: boolean
    element: () => JSX.Element
    childrens: ChildrensProps[]
}

type ChildrensProps = {
    path: string
    element: () => JSX.Element
}
type RoutesProps = {
    navbar: RouteProps[]
    footer: RouteProps[]
    default: RouteProps[]
}

export type { RoutesProps, RouteProps }