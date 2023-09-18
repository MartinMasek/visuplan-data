import { MachineDefinition } from "./Machine";
import { ProductionEntityDefinition } from "./ProductionEntity";

export interface ManufacturingPlan {
  machineDefinitions: MachineDefinition[];
  productionEntityDefinitionsById: { [id: string]: ProductionEntityDefinition };
  productionEntityInstancesById: { [id: string]: ProductionEntityDefinition };
}
