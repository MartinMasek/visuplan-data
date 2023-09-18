import { CustomPropertyType } from "./types/CustomProperties";
import { InventoryTrackingMethod } from "./types/Inventory";
import {
  ProductionEntityInstance,
  UnitOfMeasure,
} from "./types/ProductionEntity";

// ==================================================================
//
// This example show how a production log of a batch of 10 'hammer'
// products could look like
//
// ==================================================================

const hammer: ProductionEntityInstance = {
  id: "1",
  code: "T111",
  name: "hammer",
  unitOfMeasure: UnitOfMeasure.Piece,
  quantity: 10,
  inventoryTracking: InventoryTrackingMethod.Batch,
  log: {
    records: [
      {
        // Assume this machine combined existing wood handle and the head
        machineId: "444",
        timestampStart: new Date("2023-05-10"),
        timestampEnd: new Date("2023-05-10"),
        input: [
          {
            id: "1",
            code: "113",
            name: "Wooden handle",
            unitOfMeasure: UnitOfMeasure.Unit,
            quantity: 10,
            inventoryTracking: InventoryTrackingMethod.Batch,
          },
          {
            id: "2",
            code: "231",
            name: "Hammer head",
            unitOfMeasure: UnitOfMeasure.Unit,
            quantity: 10,
            inventoryTracking: InventoryTrackingMethod.Batch,
          },
        ],
      },
      {
        // Assume this machine cut the steel bar into the hammer head
        machineId: "222",
        timestampStart: new Date("2023-05-10"),
        timestampEnd: new Date("2023-05-10"),
        input: [
          {
            id: "4",
            code: "S111-1",
            name: "Steel",
            unitOfMeasure: UnitOfMeasure.Kilogram,
            quantity: 20,
            inventoryTracking: InventoryTrackingMethod.Batch,
            supplier: { id: "1", name: "Mining company A" },
            customProperties: {
              purity: {
                propertyType: CustomPropertyType.SingleSelect,
                displayName: "Purity",
                propertyDefinitionId: "p1",
                value: "90",
                setting: [
                  { id: "90", displayName: "90%" },
                  { id: "95", displayName: "95%" },
                  { id: "98", displayName: "98%" },
                ],
              },
            },
          },
        ],
      },
      {
        // Assume this machine created the steel bar
        machineId: "123",
        timestampStart: new Date("2023-05-10"),
        timestampEnd: new Date("2023-05-10"),
        input: [
          {
            id: "6",
            code: "O1",
            name: "Ore",
            unitOfMeasure: UnitOfMeasure.Kilogram,
            quantity: 50,
            inventoryTracking: InventoryTrackingMethod.Batch,
            supplier: { id: "1", name: "Mining company A" },
          },
        ],
      },
    ],
  },
};
