import { ProductionEntityInstance } from "./ProductionEntity";

export interface ProductionRun {
  /**
   * Unique id of the run
   */
  runId: string;
  /**
   * This could be used to connect this entity with an external system.
   */
  externalId?: string;
  productionPlanId: string;
  /**
   * Allocation of production entity instances to the transformations for this run.
   */
  transformationAllocation: TransformationAllocation[];
  /**
   *
   */
  transformationOutcome: TransformationOutcome[];
}

/**
 * Represents an allocation of production entity to a real world transformation.
 * This represents something like "We will use 20 kg for the transformation A" but
 * doesn't actually talk about what was the reality
 */
export interface TransformationAllocation {
  transformationId: string;
  /**
   * Assigning the input value for this specific transformation
   * based on the input ID
   */
  inputAllocationsById: {
    [inputId: string]: Omit<ProductionEntityInstance, "log">;
  };
}

/**
 * Represents the result of a real world transformation.
 */
export interface TransformationOutcome {
  transformationId: string;
  /**
   * Holds the specific entities used as inputs for the transformation
   */
  inputsById: {
    [inputId: string]: ProductionEntityInstance;
  };
  /**
   * Holds the specific entities which resulted as an output for the transformation
   */
  outputsById: {
    [inputId: string]: ProductionEntityInstance;
  };
}
