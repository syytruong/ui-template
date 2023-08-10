export interface User {
  username: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: string;
  editing: boolean;
  levelValue: number;
}
