import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      name
      email
      createdAt
      photo
    }
  }
`;

export const GET_BUDGETS = gql`
  query {
    getBudgets {
      id
      title
      budgetCost
      createdBy
      expenses {
        id
        name
        cost
      }
      createdAt
    }
  }
`;

export const NEW_BUDGET = gql`
  mutation createBudget($title: String!, $budgetCost: String!) {
    createBudget(title: $title, budgetCost: $budgetCost) {
      id
      title
      budgetCost
      createdBy
      expenses {
        id
        name
        cost
      }
      createdAt
    }
  }
`;

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

export const USER_REGISTRATION = gql`
  mutation register(
    $name: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        name: $name
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      createdAt
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense(
    $name: String!
    $cost: String!
    $budgetId: ID!
  ) {
    addExpense(name: $name, cost: $cost, budgetId: $budgetId) {
      id
      title
      budgetCost
      createdBy
      expenses {
        id
        name
        cost
      }
      createdAt
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $name: String!
    $email: String!
    $photo: Upload!
  ) {
    updateProfile(
      id: $id
      name: $name
      email: $email
      photo: $photo
    ) {
      id
      name
      email
      photo
    }
  }
`;
