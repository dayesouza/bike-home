import { Period } from "./enums";

export interface Ride {
  id: string;
  distance: number;
  time: number;
  date: Date;
  user?: string;
  period: Period;
}
