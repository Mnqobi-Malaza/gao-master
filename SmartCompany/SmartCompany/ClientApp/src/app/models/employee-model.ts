import { IPerson } from "./person-model";

export interface IEmployee {
  id: number;
  startDate: string;
  role: string;
  isActive: boolean;
  personId: number;
  person: IPerson;
}
