import { StationDefinition } from "./Station";
import { ProductionEntityDefinition } from "./ProductionEntity";
import { TransformationFormula } from "./TransformationFormula";

export interface ManufacturingPlan {
  /**
   * Unique of the plan
   */
  id: string;
  /**
   * This could be used to connect this entity with an external system.
   */
  externalId?: string;
  stationDefinitionsById: { [id: string]: StationDefinition };
  productionEntityDefinitionsById: { [id: string]: ProductionEntityDefinition };
  productionEntityInstancesById: { [id: string]: ProductionEntityDefinition };
  transformations: TransformationFormula[];
}
