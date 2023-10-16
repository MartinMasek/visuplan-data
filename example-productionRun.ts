import { InventoryTrackingMethod } from "./types/Inventory";
import { UnitOfMeasure } from "./types/ProductionEntity";
import { ProductionRun } from "./types/ProductionRun";

const run: ProductionRun = {
  runId: "12",
  productionPlanId: "1",
  transformationAllocation: [
    {
      transformationId: "4",
      inputAllocationsById: {
        "50": {
          id: "544",
          code: "BAR-1",
          name: "Iron bar",
          unitOfMeasure: UnitOfMeasure.Kilogram,
          inventoryTracking: InventoryTrackingMethod.Batch,
          quantity: 10,
          definitionId: "500",
        },
      },
    },
  ],
  transformationOutcome: [
    {
      transformationId: "4",
      inputsById: {
        "50": {
          id: "544",
          code: "BAR-1",
          name: "Iron bar",
          unitOfMeasure: UnitOfMeasure.Kilogram,
          inventoryTracking: InventoryTrackingMethod.Batch,
          quantity: 10,
          definitionId: "500",
        },
      },
      outputsById: {
        "30": {
          id: "3012",
          code: "H111",
          name: "Hammer head",
          unitOfMeasure: UnitOfMeasure.Unit,
          inventoryTracking: InventoryTrackingMethod.Batch,
          quantity: 48,
          definitionId: "200",
          log: {
            records: [
              {
                machineId: "2",
                timestampStart: new Date("2023-10-23T11:50:00"),
                timestampEnd: new Date("2023-10-23T14:00:00"),
                input: [
                  {
                    id: "544",
                    code: "BAR-1",
                    name: "Iron bar",
                    unitOfMeasure: UnitOfMeasure.Kilogram,
                    inventoryTracking: InventoryTrackingMethod.Batch,
                    quantity: 10,
                    definitionId: "500",
                  },
                ],
              },
            ],
          },
        },
      },
    },
  ],
};
