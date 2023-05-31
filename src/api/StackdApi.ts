import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getConfig: build.query<GetConfigApiResponse, GetConfigApiArg>({
      query: () => ({ url: `/config` }),
    }),
    getClusters: build.query<GetClustersApiResponse, GetClustersApiArg>({
      query: () => ({ url: `/clusters/` }),
    }),
    buildCluster: build.query<BuildClusterApiResponse, BuildClusterApiArg>({
      query: (queryArg) => ({ url: `/build/${queryArg.clusterName}` }),
    }),
    readCluster: build.query<ReadClusterApiResponse, ReadClusterApiArg>({
      query: (queryArg) => ({ url: `/cluster/${queryArg.clusterName}` }),
    }),
    readClusterStack: build.query<
      ReadClusterStackApiResponse,
      ReadClusterStackApiArg
    >({
      query: (queryArg) => ({
        url: `/stack/${queryArg.clusterName}/${queryArg.stackName}`,
      }),
    }),
    clusterStackModule: build.query<
      ClusterStackModuleApiResponse,
      ClusterStackModuleApiArg
    >({
      query: (queryArg) => ({
        url: `/module/${queryArg.clusterName}/${queryArg.stackName}/${queryArg.moduleName}`,
      }),
    }),
    listModuleSecrets: build.query<
      ListModuleSecretsApiResponse,
      ListModuleSecretsApiArg
    >({
      query: (queryArg) => ({
        url: `/secret/${queryArg.clusterName}/${queryArg.stackName}/${queryArg.moduleName}`,
      }),
    }),
    readModuleSecret: build.query<
      ReadModuleSecretApiResponse,
      ReadModuleSecretApiArg
    >({
      query: (queryArg) => ({
        url: `/secret/${queryArg.clusterName}/${queryArg.stackName}/${queryArg.moduleName}/${queryArg.secretName}`,
      }),
    }),
    writeModuleSecret: build.mutation<
      WriteModuleSecretApiResponse,
      WriteModuleSecretApiArg
    >({
      query: (queryArg) => ({
        url: `/secret/${queryArg.clusterName}/${queryArg.stackName}/${queryArg.moduleName}/${queryArg.secretName}`,
        method: "POST",
        body: queryArg.secret,
      }),
    }),
    getSdSdGet: build.query<GetSdSdGetApiResponse, GetSdSdGetApiArg>({
      query: () => ({ url: `/sd` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as StackdApi };
export type GetConfigApiResponse = /** status 200 Successful Response */ Config;
export type GetConfigApiArg = void;
export type GetClustersApiResponse =
  /** status 200 Successful Response */ ClusterModel[];
export type GetClustersApiArg = void;
export type BuildClusterApiResponse =
  /** status 200 Successful Response */ ClusterModel;
export type BuildClusterApiArg = {
  clusterName: string;
};
export type ReadClusterApiResponse =
  /** status 200 Successful Response */ ClusterModel;
export type ReadClusterApiArg = {
  clusterName: string;
};
export type ReadClusterStackApiResponse =
  /** status 200 Successful Response */ ClusterStackModel;
export type ReadClusterStackApiArg = {
  clusterName: string;
  stackName: string;
};
export type ClusterStackModuleApiResponse =
  /** status 200 Successful Response */ Module;
export type ClusterStackModuleApiArg = {
  clusterName: string;
  stackName: string;
  moduleName: string;
};
export type ListModuleSecretsApiResponse =
  /** status 200 Successful Response */ string[];
export type ListModuleSecretsApiArg = {
  clusterName: string;
  stackName: string;
  moduleName: string;
};
export type ReadModuleSecretApiResponse =
  /** status 200 Successful Response */ Secret;
export type ReadModuleSecretApiArg = {
  clusterName: string;
  stackName: string;
  moduleName: string;
  secretName: string;
};
export type WriteModuleSecretApiResponse =
  /** status 200 Successful Response */ Secret;
export type WriteModuleSecretApiArg = {
  clusterName: string;
  stackName: string;
  moduleName: string;
  secretName: string;
  secret: Secret;
};
export type GetSdSdGetApiResponse =
  /** status 200 Successful Response */ StackdModel;
export type GetSdSdGetApiArg = void;
export type Project = {
  name: string;
  title?: string;
  vault_address?: string;
  domain: string;
};
export type Repo = {
  url: string;
  tag?: string;
  branch?: string;
  name: string;
  local?: boolean;
};
export type Binary = {
  binary?: string;
  url?: string;
  extract?: string;
  version?: string;
};
export type Binaries = {
  terraform?: Binary;
  terragrunt?: Binary;
};
export type Backend = {
  name?: string;
  config?: object;
};
export type Spec = {
  path: string;
  relpath?: string;
  source?: string;
  rendered?: string;
  data?: object;
  jinja_template?: boolean;
  jinja_env?: any;
  merge_from?: any;
};
export type Config = {
  kind?: string;
  project: Project;
  vars?: object;
  clusters_dir?: string;
  repos?: {
    [key: string]: Repo;
  };
  binaries: Binaries;
  backend?: Backend;
  providers?: object;
  spec?: Spec;
};
export type Configuration = {
  title?: string;
  name?: string;
  modules: string[];
  command?: string;
};
export type Operation = {
  configurations?: {
    [key: string]: Configuration;
  };
  configuration?: string;
};
export type ModuleSecretStatus = "unknown" | "not_exists" | "exists" | "valid";
export type ModuleSecret = {
  name?: string;
  secret_type?: string;
  secret_schema?: object;
  required?: boolean;
  status?: ModuleSecretStatus;
};
export type Module = {
  name?: string;
  source?: string;
  src?: string;
  vars?: object;
  built_vars?: object;
  providers?: string[];
  provider_overrides?: object;
  inputs?: string[];
  deps?: string[];
  tf_state_key?: string;
  tf_state_bucket?: string;
  tf_state_bucket_region?: string;
  tf_backend?: string;
  tf_backend_config?: object;
  backend?: Backend;
  secrets?: {
    [key: string]: ModuleSecret;
  };
};
export type SpecModel = {
  path: string;
  relpath?: string;
  source?: string;
  rendered?: string;
  data?: object;
  jinja_template?: boolean;
};
export type StackModel = {
  name?: string;
  src?: string;
  example_vars?: object;
  operations?: {
    [key: string]: Operation;
  };
  modules: {
    [key: string]: Module;
  };
  vars?: object;
  backend?: Backend;
  spec?: SpecModel;
  schema?: any;
};
export type ClusterStackModel = {
  name?: string;
  src?: string;
  vars?: object;
  stack?: StackModel;
  override?: object;
  backend?: Backend;
  operations?: any;
};
export type ClusterModel = {
  name: string;
  vars?: object;
  stacks?: {
    [key: string]: ClusterStackModel;
  };
  backend?: Backend;
  spec?: SpecModel;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type Secret = {
  data?: object;
  metadata?: object;
};
export type ConfigModel = {
  kind?: string;
  project: Project;
  vars?: object;
  clusters_dir?: string;
  repos?: {
    [key: string]: Repo;
  };
  binaries: Binaries;
  backend?: Backend;
  providers?: object;
  spec?: SpecModel;
};
export type Provider = {
  source: string;
  version: string;
  name?: string;
};
export type StackdModel = {
  conf?: ConfigModel;
  root?: string;
  clusters?: {
    [key: string]: ClusterModel;
  };
  providers?: {
    [key: string]: Provider;
  };
};
export const {
  useGetConfigQuery,
  useGetClustersQuery,
  useBuildClusterQuery,
  useReadClusterQuery,
  useReadClusterStackQuery,
  useClusterStackModuleQuery,
  useListModuleSecretsQuery,
  useReadModuleSecretQuery,
  useWriteModuleSecretMutation,
  useGetSdSdGetQuery,
} = injectedRtkApi;
