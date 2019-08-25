import { AxiosRequestConfig, AxiosResponse } from './../types/index'

export class AxiosError extends Error {
  // 定义类变量类型
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    // 定义传入参数类型
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
