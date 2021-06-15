import { MDXRemote } from 'next-mdx-remote'
import { Heading, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react"

const components = {
  h1: props => <Heading as="h1" size="xl" {...props} mt="0.5em" mb="0.5em" />,
  h2: props => <Heading as="h2" size="lg" {...props} mt="0.5em" mb="0.5em" />,
  h3: props => <Heading as="h3" size="md" {...props} mt="0.5em" mb="0.5em" />,
  p: props => <Text as="p" {...props} mt="0.5em" mb="0.5em" textAlign={ ['justify'] } />,
  ul: props => <UnorderedList {...props} />,
  li: props => <ListItem {...props} />,
  a: props => <Link color="blue.500" {...props} />
}

export default function Markdown({ source }) {
  return <MDXRemote {...source} components={components} />
}
