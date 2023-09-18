import { TransformationFormula } from "./TransformationFormula";

/**
 * Represents a resource that transforms production entities into different forms or types.
 */
export interface MachineDefinition {
  /**
   * Id of the machine
   */
  id: string;
  /**
   * Name of the machine
   */
  name: string;
  /**
   * An array of transformation formulas specifying how this machine performs transformations.
   *
   * @property {TransformationFormula[]} transformations - An array of transformation formulas.
   */
  transformations: TransformationFormula[];
}
