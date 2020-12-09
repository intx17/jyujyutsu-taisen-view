export interface ICommand {
  id: string
  name: string
  description: string
  attack: number
  criticalRate: number
  isOutdoor: boolean
  inSelectedCommandList: boolean
}
