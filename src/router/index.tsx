import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoute{
    path:string
    Component:React.ReactNode 
}

export enum RouteNames{
    LOGIN='/CalendarReact/login',
    EVENT='/CalendarReact'
}

export const privateRoutes:IRoute[]=[
    {
        path:RouteNames.EVENT,
        Component:<Event/>
    }
]
export const publicRoutes:IRoute[]=[
    {
        path:RouteNames.LOGIN,
        Component:<Login/>
    }
]