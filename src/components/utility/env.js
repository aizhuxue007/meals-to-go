export const localHost = 'https://5b2d-2601-18d-4a7f-d8c0-b08d-77ca-7533-b36.ngrok-free.app'
export const liveHost = 'https://geocode-lskqsnyqga-uc.a.run.app/meals-to-go-38736'

export const isDevelopment = process.env.NODE_ENV === 'development'

export const host = isDevelopment ? localHost : liveHost