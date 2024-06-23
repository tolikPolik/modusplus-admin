export const API_STR = 'https://modusplus-api-production.up.railway.app'
// export const API_STR = 'http://localhost:80'
export const AUTH_TYPE = 'Bearer'

export interface IUser {
  login: string
  role: string
}

export const signIn = async (login: string, password: string): Promise<string> => {
  console.log('q' + login, 'w' + password)
  return await (
    await (
      await fetch(API_STR + '/login', {
        body: JSON.stringify({
          login,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    ).json()
  ).access_token
}

export const getUserInfo = async (token: string): Promise<IUser> => {
  const authorization = `${AUTH_TYPE} ${token}`
  return (await (
    await fetch(API_STR + '/user-data', { headers: { authorization } })
  ).json()) as IUser
}

export interface Application {
  id: number
  filling: Date
  senderId: number
  description: string
  status: string
  specialist: string
  refusedDescription: string
}

export interface User {
  id: string
  login: string
  password: string
  role: string
  profileId: string
}

export const getUserById = async (id: number): Promise<IUser> => {
  return await (await fetch(`${API_STR}/users/${id}`)).json()
}
