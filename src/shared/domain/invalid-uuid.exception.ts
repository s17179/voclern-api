export class InvalidUuidException extends Error {
  constructor(uuid: string) {
    super(`Given uuid ${uuid} is invalid`);
  }
}
