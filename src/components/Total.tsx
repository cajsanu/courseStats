interface TotalProp {
    total: number
}

export const Total = (props: TotalProp) => {
    return <>Total amount of exercises {props.total}</>
}