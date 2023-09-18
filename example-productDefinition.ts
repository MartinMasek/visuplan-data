import { CustomPropertyType } from "./types/CustomProperties";
import { InventoryTrackingMethod } from "./types/Inventory";
import {
  type ProductionEntityDefinition,
  type ProductionEntityInstance,
  UnitOfMeasure,
} from "./types/ProductionEntity";

// ==================================================================
//
// Example of 2 tenants (companies) and the definitions they have
// Company A does smelting whereas company B does T-shirts
//
// ==================================================================

// ==================================================================
//
// Company A defines steel and adds a custom property to their
// steel bar called purity with 3 possible values to choose from.
// The example shows the material definition and then 2 specific
// instances of steel bars.
//
// ==================================================================

const steelMaterial: ProductionEntityDefinition = {
  id: "1",
  code: "S111",
  name: "Steel",
  unitOfMeasure: UnitOfMeasure.Kilogram,
  inventoryTracking: InventoryTrackingMethod.Serialized,
  supplier: { id: "1", name: "Mining company A" },
  customProperties: {
    purity: {
      propertyType: CustomPropertyType.SingleSelect,
      displayName: "Purity",
      setting: [
        { id: "90", displayName: "90%" },
        { id: "95", displayName: "95%" },
        { id: "98", displayName: "98%" },
      ],
    },
  },
};

// 20kg steel bar with purity 90%
const steelBar1: ProductionEntityInstance = {
  id: "1",
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
};

// 30kg steel bar with purity 98%
const steelBar2: ProductionEntityInstance = {
  id: "2",
  code: "S111-2",
  name: "Steel",
  unitOfMeasure: UnitOfMeasure.Kilogram,
  quantity: 30,
  inventoryTracking: InventoryTrackingMethod.Batch,
  supplier: { id: "1", name: "Mining company A" },
  customProperties: {
    purity: {
      propertyType: CustomPropertyType.SingleSelect,
      displayName: "Purity",
      propertyDefinitionId: "p1",
      value: "98",
      setting: [
        { id: "90", displayName: "90%" },
        { id: "95", displayName: "95%" },
        { id: "98", displayName: "98%" },
      ],
    },
  },
};

// ==================================================================
//
// Company B defines T-shirt and adds a custom property to their
// T-shirt called color which is a free text like 'black', 'white' etc.
// Another custom property is size with values 'S', 'M', 'L' and 'XL'
// The example shows the material definition and then an example
// representing 10 pink t-shirts
//
// ==================================================================

const tshirtDefinition: ProductionEntityDefinition = {
  id: "1",
  code: "T111",
  name: "T-shirt",
  unitOfMeasure: UnitOfMeasure.Piece,
  inventoryTracking: InventoryTrackingMethod.Batch,
  customProperties: {
    size: {
      propertyType: CustomPropertyType.SingleSelect,
      displayName: "Size",
      setting: [
        { id: "S", displayName: "S" },
        { id: "M", displayName: "M" },
        { id: "L", displayName: "L" },
        { id: "XL", displayName: "XL" },
      ],
    },
    color: {
      propertyType: CustomPropertyType.String,
      displayName: "Color",
      setting: null,
    },
  },
};

const pinkShirt: ProductionEntityInstance = {
  id: "1",
  code: "T111",
  name: "T-shirt",
  unitOfMeasure: UnitOfMeasure.Piece,
  quantity: 10,
  inventoryTracking: InventoryTrackingMethod.Batch,
  customProperties: {
    size: {
      propertyType: CustomPropertyType.SingleSelect,
      propertyDefinitionId: "p1",
      displayName: "Size",
      value: "M",
      setting: [
        { id: "S", displayName: "S" },
        { id: "M", displayName: "M" },
        { id: "L", displayName: "L" },
        { id: "XL", displayName: "XL" },
      ],
    },
    color: {
      propertyType: CustomPropertyType.String,
      propertyDefinitionId: "p2",
      displayName: "Color",
      value: "pink",
      setting: null,
    },
  },
};
