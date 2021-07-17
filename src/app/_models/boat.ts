import { Shipyard, BoatType, BoatModel } from '.';

export class Boat {
  id: string;
  name: string;
  shipyard: Shipyard;
  model: BoatModel;
  size: number;
  type: BoatType;
}
