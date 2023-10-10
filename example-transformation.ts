import { CustomPropertyType } from "./types/CustomProperties";
import { InventoryTrackingMethod } from "./types/Inventory";
import {
  ProductionEntityDefinition,
  UnitOfMeasure,
} from "./types/ProductionEntity";
import { ManufacturingPlan } from "./types/ProductionPlan";
import { EntityInstanceWithRelationships } from "./types/TransformationFormula";

// ==================================================================
//
// Example showing 2 stations.
// Station 1 doing transformation of a wooden handle
// and an iron head to a hammer product.
// It can also transform a iron rod and plastic handle to
// create a screwdriver.
//
// Station 2 cuts iron bars to hammer heads
//
// ==================================================================

// ==================================================================
//
// Declare the product definitions
//
// ==================================================================
const woodenHandle: ProductionEntityDefinition = {
  id: "100",
  code: "T111",
  name: "Wooden handle",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
};

const hammerHead: ProductionEntityDefinition = {
  id: "200",
  code: "H111",
  name: "Hammer head",
  unitOfMeasure: UnitOfMeasure.Kilogram,
  inventoryTracking: InventoryTrackingMethod.Batch,
};

const hammer: ProductionEntityDefinition = {
  id: "300",
  code: "H122",
  name: "Hammer",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
};

const plasticHandle: ProductionEntityDefinition = {
  id: "220",
  code: "S01",
  name: "Plastic handle",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
};

const ironRod: ProductionEntityDefinition = {
  id: "210",
  code: "S02",
  name: "Iron rod",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  customProperties: {
    length_cm: {
      displayName: "Rod length (cm)",
      propertyType: CustomPropertyType.Number,
      setting: null,
    },
  },
  substitution: [
    {
      id: "215",
      code: "S02B",
      name: "Iron rod",
      unitOfMeasure: UnitOfMeasure.Unit,
      inventoryTracking: InventoryTrackingMethod.Batch,
      customProperties: {
        length_cm: {
          displayName: "Rod length (cm)",
          propertyType: CustomPropertyType.Number,
          setting: null,
        },
      },
    },
  ],
};

const screwDriver: ProductionEntityDefinition = {
  id: "650",
  code: "S2",
  name: "Screwdriver",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
};

const ironBar: ProductionEntityDefinition = {
  id: "500",
  code: "BAR-1",
  name: "Iron bar",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
};

// ==================================================================
//
// Declare the products for machine definition
//
// ==================================================================
const woodenHandle_s1: EntityInstanceWithRelationships = {
  id: "1",
  code: "T111",
  name: "Wooden handle",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  definitionId: "100",
};

const hammerHead_s1: EntityInstanceWithRelationships = {
  id: "2",
  code: "H111",
  name: "Hammer head",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  sourceOutputId: "30", // Connecting output of the previous machine
  definitionId: "200",
};

const hammer_s1: EntityInstanceWithRelationships = {
  id: "3",
  code: "H122",
  name: "Hammer",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  definitionId: "300",
};

const plasticHandle_s1: EntityInstanceWithRelationships = {
  id: "20",
  code: "S01",
  name: "Plastic handle",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  definitionId: "220",
};

const ironRod_s1: EntityInstanceWithRelationships = {
  id: "21",
  code: "S02",
  name: "Iron rod",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  definitionId: "210",
  quantity: 1,
  customProperties: {
    length_cm: {
      displayName: "Rod length (cm)",
      propertyDefinitionId: "1",
      propertyType: CustomPropertyType.Number,
      value: 15,
      setting: null,
    },
  },
};

const screwDriver_s1: EntityInstanceWithRelationships = {
  id: "65",
  code: "S2",
  name: "Screwdriver",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  definitionId: "650",
};

const ironBar_s2: EntityInstanceWithRelationships = {
  id: "50",
  code: "BAR-1",
  name: "Iron bar",
  unitOfMeasure: UnitOfMeasure.Kilogram,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 0.2,
  definitionId: "500",
};

const hammerHead_s2: EntityInstanceWithRelationships = {
  id: "30",
  code: "H111",
  name: "Hammer head",
  unitOfMeasure: UnitOfMeasure.Unit,
  inventoryTracking: InventoryTrackingMethod.Batch,
  quantity: 1,
  targetInputId: "2", // Connecting input of the next machine
  definitionId: "200",
};

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
  stationDefinitionsById: {
    Station_1: {
      id: "Station_1",
      name: "Tool builder",
    },
    Station_2: {
      id: "Station_2",
      name: "Cutting machine",
    },
  },
  // Assume product definitions for hammer, hammer head, iron bar, wooden handle
  productionEntityDefinitionsById: {
    [woodenHandle.id]: woodenHandle,
    [hammerHead.id]: hammerHead,
    [hammer.id]: hammer,
    [plasticHandle.id]: plasticHandle,
    [ironRod.id]: ironRod,
    [screwDriver.id]: screwDriver,
    [ironBar.id]: ironBar,
  },
  productionEntityInstancesById: {
    [woodenHandle_s1.id]: woodenHandle_s1,
    [hammerHead_s1.id]: hammerHead_s1,
    [hammer_s1.id]: hammer_s1,
    [plasticHandle_s1.id]: plasticHandle_s1,
    [ironRod_s1.id]: ironRod_s1,
    [screwDriver_s1.id]: screwDriver_s1,
    [ironBar_s2.id]: ironBar_s2,
    [hammerHead_s2.id]: hammerHead_s2,
  },
  transformations: [
    {
      id: "1",
      name: "Assemble hammer",
      inputs: [woodenHandle_s1, hammerHead_s1],
      outputs: [hammer_s1],
      stationId: "Station_1",
      cycleTimeInSeconds: 30,
      notes: "Note 1 -A -B",
      tasksBeforeStart: [
        {
          title: "Task before start",
        },
      ],
    },
    {
      id: "2",
      name: "Assemble screwdriver",
      inputs: [plasticHandle_s1, ironRod_s1],
      outputs: [screwDriver_s1],
      stationId: "Station_1",
      cycleTimeInSeconds: 30,
      tasksAfterEnd: [
        {
          title: "Task after end",
          estimatedTimeInSeconds: 120,
        },
      ],
    },
    {
      id: "4",
      name: "Cut hammer head",
      inputs: [ironBar_s2],
      outputs: [hammerHead_s2],
      stationId: "Station_2",
      cycleTimeInSeconds: 30,
      tasksForEachCycle: [
        {
          title: "Cycle Task 1",
          dependentTasks: [
            {
              title: "Cycle Task 2",
            },
            {
              title: "Cycle Task 3",
            },
          ],
        },
        {
          title: "Cycle Task 4",
        },
      ],
    },
  ],
};

console.log(JSON.stringify(plan));
