import { StationDefinition } from "./Station";
import { ProductionEntityDefinition } from "./ProductionEntity";
import { TransformationFormula } from "./TransformationFormula";

export interface ManufacturingPlan {
  stationDefinitionsById: { [id: string]: StationDefinition };
  productionEntityDefinitionsById: { [id: string]: ProductionEntityDefinition };
  productionEntityInstancesById: { [id: string]: ProductionEntityDefinition };
  transformations: TransformationFormula[];
}
