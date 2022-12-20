import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: "https://api-sa-east-1.hygraph.com/v2/cl4te22tl011m01t790l01q6c/master",
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: 3,
        withComponents: false
      },
    }
  }
}

export default config