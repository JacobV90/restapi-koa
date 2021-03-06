export type CreateUser = {
  email: string;
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  // For increasing test coverage
  error?: boolean;
}

export type DeleteUser = {
  id: string;
}

export type DeleteUserResponse = {
  result: boolean;
}

export type GetUser = {
  id: string;
}

export type UpdateUser = {
  id: string
  email?: string;
  firstName?: string;
  lastName?: string;
}
