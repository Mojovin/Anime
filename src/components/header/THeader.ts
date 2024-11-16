import { THeaderStyle } from "./THeaderStyles";

export default interface THeader{
    headerProps?: THeaderStyle
    render: () => React.ReactNode;
}