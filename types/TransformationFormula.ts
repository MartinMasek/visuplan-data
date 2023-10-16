import { type ProductionEntityInstance } from "./ProductionEntity";
import { TaskDefinition } from "./Task";

export interface EntityInstanceWithRelationships
  extends Omit<ProductionEntityInstance, "log"> {
  /**
   * If present, holds the ID of the production entity instance that was created as an output
   * of a transformation and simultaneously serves as an input. It allows for connecting
   * the output of one machine with the input of another.
   * See more in the README
   */
  sourceOutputId?: string;
  /**
   * If present, holds the ID of the production entity instance that represents an input
   * for a transformation. It allows for connecting the output of one machine to be the input
   * of another.
   * See more in the README
   */
  targetInputId?: string;
}

/**
 * Represents a formula for transforming input entities into output entities.
 * This formula is utilized by various resources in the manufacturing process to create products.
 */
export interface TransformationFormula {
  /**
   * Unique id of the formula
   */
  id: string;
  /**
   * This could be used to connect this entity with an external system.
   */
  externalId?: string;
  /**
   * Name the transformation. E.g. "Cut out steel bars"
   */
  name: string;
  /**
   * An array of input entities required for the transformation. Specific instances are passed
   * to enable the use of custom property values. Quantity is used to represent how many/much
   * of the entity is needed.
   */
  inputs: Omit<EntityInstanceWithRelationships, "log">[];

  /**
   * An array of output entities produced by the transformation. Specific instances are passed
   * to enable the use of custom property values. Quantity is used to represent how many/much
   * of the entity is needed.
   */
  outputs: Omit<EntityInstanceWithRelationships, "log">[];

  /**
   * Station used for the transformation
   */
  stationId: string;

  /**
   * The time it takes to complete a specific production or manufacturing cycle for this transformation,
   * including all the necessary steps and processes
   */
  cycleTimeInSeconds?: number;

  /**
   * Each formula can have notes which are displayed to the users. This could be notes to the operators
   * of the machines.
   */
  notes?: string;

  /**
   * Set of tasks which need to be completed with each cycle of the machine.
   */
  tasksForEachCycle?: TaskDefinition[];

  /**
   * Set of tasks which need to be completed before the transformation starts.
   */
  tasksBeforeStart?: TaskDefinition[];

  /**
   * Set of tasks which need to be completed after the transformation ends.
   */
  tasksAfterEnd?: TaskDefinition[];
}
