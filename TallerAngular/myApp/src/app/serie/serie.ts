export class Serie {
  constructor(
    public readonly id: number,
    public name: string,
    public channel: string,
    public seasons: number,
    public description: string,
    public webpage: string,
    public poster: string
  ) {}

  get titleWithSeasons(): string {
    return `${this.name} (${this.seasons} temporadas)`;
  }
}
