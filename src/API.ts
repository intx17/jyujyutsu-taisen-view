/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCovid19PositiveInput = {
  id?: string | null,
  content: string,
  date: string,
};

export type ModelCovid19PositiveConditionInput = {
  content?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelCovid19PositiveConditionInput | null > | null,
  or?: Array< ModelCovid19PositiveConditionInput | null > | null,
  not?: ModelCovid19PositiveConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateCovid19PositiveInput = {
  id: string,
  content?: string | null,
  date?: string | null,
};

export type DeleteCovid19PositiveInput = {
  id?: string | null,
};

export type ModelCovid19PositiveFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelCovid19PositiveFilterInput | null > | null,
  or?: Array< ModelCovid19PositiveFilterInput | null > | null,
  not?: ModelCovid19PositiveFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateCovid19PositiveMutationVariables = {
  input: CreateCovid19PositiveInput,
  condition?: ModelCovid19PositiveConditionInput | null,
};

export type CreateCovid19PositiveMutation = {
  createCovid19Positive:  {
    __typename: "Covid19Positive",
    id: string,
    content: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCovid19PositiveMutationVariables = {
  input: UpdateCovid19PositiveInput,
  condition?: ModelCovid19PositiveConditionInput | null,
};

export type UpdateCovid19PositiveMutation = {
  updateCovid19Positive:  {
    __typename: "Covid19Positive",
    id: string,
    content: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCovid19PositiveMutationVariables = {
  input: DeleteCovid19PositiveInput,
  condition?: ModelCovid19PositiveConditionInput | null,
};

export type DeleteCovid19PositiveMutation = {
  deleteCovid19Positive:  {
    __typename: "Covid19Positive",
    id: string,
    content: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCovid19PositiveQueryVariables = {
  id: string,
};

export type GetCovid19PositiveQuery = {
  getCovid19Positive:  {
    __typename: "Covid19Positive",
    id: string,
    content: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCovid19PositivesQueryVariables = {
  filter?: ModelCovid19PositiveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCovid19PositivesQuery = {
  listCovid19Positives:  {
    __typename: "ModelCovid19PositiveConnection",
    items:  Array< {
      __typename: "Covid19Positive",
      id: string,
      content: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCovid19PositiveSubscription = {
  onCreateCovid19Positive:  {
    __typename: "Covid19Positive",
    id: string,
    content: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCovid19PositiveSubscription = {
  onUpdateCovid19Positive:  {
    __typename: "Covid19Positive",
    id: string,
    content: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCovid19PositiveSubscription = {
  onDeleteCovid19Positive:  {
    __typename: "Covid19Positive",
    id: string,
    content: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
