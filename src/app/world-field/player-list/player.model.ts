export interface PlayerPrivateDto {
  id: string
  password: string
  name: string
  hexColor: string
}

export interface PlayerPublicDto {
  id: string
  name: string
  hexColor: string
}

export interface PlayerLoginDto {
  name: string
}
