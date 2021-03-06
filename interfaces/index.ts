// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Props = {
  title?: string
  id?: string
  className?: string
  error?: string
  label?: string
}

export interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
  title?: string
  id?: string
  className?: string
  error?: string
  label?: string
}