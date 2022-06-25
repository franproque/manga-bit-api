export class ProblemCompletingError extends Error {
  constructor (paramName?: string) {
    super('Problem completing')
    this.name = 'ProblemCompletingError'
  }
}
