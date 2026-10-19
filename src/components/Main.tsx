import type { ReactNode } from 'react'



//Source on passing components as props
//since its TS, we type it as a ReactNode
//https://react.dev/learn/passing-props-to-a-component
export default function Main({ children }: { children: ReactNode }) {
    return <main>{children}</main>
}