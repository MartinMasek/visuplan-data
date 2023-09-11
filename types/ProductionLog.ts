import { type ProductionEntityInstance } from "./ProductionEntity";

// Pruvodka
export interface ProductionLog {
  records: ProductionLogRecord[];
}

export interface ProductionLogRecord {
  timestamp: Date;
  machineId: string;
  input: ProductionEntityInstance[];
  notes?: string;
}
