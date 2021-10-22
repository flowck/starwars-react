import { Helmet } from "react-helmet-async";

interface Props {
  name: string;
}

export function Title({ name }: Props) {
  return <Helmet title={name} />;
}
