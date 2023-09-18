import { CustomPropertyType } from "./types/CustomProperties";
import { InventoryTrackingMethod } from "./types/Inventory";
import { MachineDefinition } from "./types/Machine";
import { UnitOfMeasure } from "./types/ProductionEntity";
import { ManufacturingPlan } from "./types/ProductionPlan";
import { EntityInstanceWithRelationships } from "./types/TransformationFormula";

// ==================================================================
//
// Example showing 2 machines.
// Machine 1 doing transformation of a wooden handle
// and an iron head to a hammer product.
// It can also transform a iron rod and plastic handle to
// create a screw driver.
//
// Machine 2 cuts iron bars to hammer heads
//
// ==================================================================

// ==================================================================
//
// Declare the products for machine definition
//
// ==================================================================
const woodenHandle_m1: EntityInstanceWithRelationships = {
  id: "1",
  code: "T111",
  name: "Wooden handle",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
};

const hammerHead_m1: EntityInstanceWithRelationships = {
  id: "2",
  code: "H111",
  name: "Hammer head",
  unitOfMeasure: UnitOfMeasure.Kilogram,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 0.5,
  sourceOutputId: "30", // Connecting output of the previous machine
};

const hammer_m1: EntityInstanceWithRelationships = {
  id: "3",
  code: "H111",
  name: "Hammer",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
};

const plasticHandle_m1: EntityInstanceWithRelationships = {
  id: "20",
  code: "S01",
  name: "Plastic handle",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  customProperties: {
    length_cm: {
      displayName: "Rod length",
      propertyDefinitionId: "1",
      propertyType: CustomPropertyType.Number,
      value: 15,
      setting: null,
    },
  },
};

const ironRod_m1: EntityInstanceWithRelationships = {
  id: "21",
  code: "S02",
  name: "Iron rod",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
};

const screwDriver_m1: EntityInstanceWithRelationships = {
  id: "65",
  code: "S2",
  name: "Screwdriver",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
};

const ironBar_m2: EntityInstanceWithRelationships = {
  id: "50",
  code: "T111",
  name: "Iron bar",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
};

const hammerHead_m2: EntityInstanceWithRelationships = {
  id: "30",
  code: "H111",
  name: "Hammer head",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  targetInputId: "2", // Connecting input of the next machine
};

// ==================================================================

const machineDefinitions: MachineDefinition[] = [
  {
    id: "Machine_1",
    name: "Tool builder",
    transformations: [
      {
        id: "1",
        name: "Assemble hammer",
        inputs: [woodenHandle_m1, hammerHead_m1],
        outputs: [hammer_m1],
      },
      {
        id: "2",
        name: "Assemble screw driver",
        inputs: [plasticHandle_m1, ironRod_m1],
        outputs: [screwDriver_m1],
      },
    ],
  },
  {
    id: "Machine_2",
    name: "Cutting machine",
    transformations: [
      {
        id: "4",
        name: "Cut hammer head",
        inputs: [ironBar_m2],
        outputs: [hammerHead_m2],
      },
    ],
  },
];

// ==================================================================
//
// Example showing how the production plan is created.
// It uses the machine 2 to create hammer heads.
// Then it uses the machine 1 to create the hammers.
// Wooden handles come externally to the machines (so they are not
// an output of other machines)
//
// ==================================================================

const plan: ManufacturingPlan = {
  machineDefinitions: machineDefinitions,
  // Assume product definitions for hammer, hammer head, iron bar, wooden handle
  productionEntityDefinitionsById: {},
  productionEntityInstancesById: {
    woodenHandle_m1: woodenHandle_m1,
    hammerHead_m1: hammerHead_m1,
    // ...
    // Etc.
  },
};
