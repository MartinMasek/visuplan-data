import { type ProductionEntityInstance } from "./ProductionEntity";

// Pruvodka
export interface ProductionLog {
  records: ProductionLogRecord[];
}

export interface ProductionLogRecord {
  /**
   * UTC format of the date when the activity described
   * by this log started
   */
  timestampStart: Date;
  /**
   * UTC format of the date when the activity described
   * by this log ended
   */
  timestampEnd: Date;
  machineId: string;
  // TODO User
  input: ProductionEntityInstance[];
  notes?: string;
}
