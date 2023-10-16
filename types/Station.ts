/**
 * Represents a resource that transforms production entities into different forms or types.
 */
export interface StationDefinition {
  /**
   * Id of the station
   */
  id: string;
  /**
   * This could be used to connect this entity with an external system.
   */
  externalId?: string;
  /**
   * Name of the station
   */
  name: string;
}
