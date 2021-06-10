export interface Body {

  "order":string[],
  "lifecycle":string[]
  "scope" :string[],
  "userProfile": userProfile,
  "merchNbr": string;
  "period" : period
}
export interface period {
  settlement:settlement
}
export interface settlement{
  start:string,
  end:string
}
export interface userProfile{
  representing : representing
}

export interface representing{
  issuers: string[],
  acquirers: string[]
}
