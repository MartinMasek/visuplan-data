export enum CustomPropertyType {
  String = "string",
  Number = "number",
  SingleSelect = "singleSelect",
  MultiSelect = "multiSelect",
}

/**
 * Defines the properties and settings of a custom property.
 */
export interface CustomPropertyDefinition {
  id: string;
  /**
   * Display name for the custom property (e.g., "Color").
   */
  displayName: string;
  propertyType: CustomPropertyType;
  /**
   * Settings specific to the property type, or null if none. E.g. list of options for the SingleSelect.
   */
  setting: null | ListOption[];
}

export interface ListOption {
  id: string;
  displayName: string;
}

/**
 * Represents a specific instance of the custom property which also has a value.
 */
export interface CustomPropertyWithValue extends CustomPropertyDefinition {
  /**
   * Custom property definition this instance is derived from
   */
  propertyDefinitionId: string;
  /**
   * Value of the property. The format is specific to the property type.
   */
  value: string | ListOption;
}

// ===============================================================
//
// Below are typed versions so we can cast the types from the
// above to these types during the runtime and have type safety
// for code development.
// See the parsing functions at the end
//
// ===============================================================

/**
 * Represents the typed version of {@link CustomPropertyDefinition}
 */
export interface CustomPropertyDefinitionTyped<
  TType extends CustomPropertyType,
  TSetting extends null | ListOption[]
> extends Omit<CustomPropertyDefinition, "propertyType" | "setting"> {
  propertyType: TType;
  /**
   * Settings specific to the property type, or null if none.
   */
  setting: TSetting;
}

/**
 * Represents the typed version of {@link CustomPropertyValue}
 */
export interface CustomPropertyWithValueTyped<
  TType extends CustomPropertyType,
  TSetting extends null | ListOption[],
  TValue extends string[] | string | number
> extends Omit<CustomPropertyDefinitionTyped<TType, TSetting>, "value"> {
  propertyDefinitionId: string;
  value: TValue;
}

//  ====================================
//
//  Below are nice names without generic
//
//  ====================================

export interface StringCustomProperty
  extends CustomPropertyWithValueTyped<
    CustomPropertyType.String,
    null,
    string
  > {}

export interface NumberCustomProperty
  extends CustomPropertyWithValueTyped<
    CustomPropertyType.Number,
    null,
    number
  > {}

/**
 * The selected option id is represented in the value property
 */
export interface SingleSelectCustomProperty
  extends CustomPropertyWithValueTyped<
    CustomPropertyType.SingleSelect,
    ListOption[],
    string
  > {}

/**
 * The selected option ids are represented by the array in the value property
 */
export interface MultiSelectCustomProperty
  extends CustomPropertyWithValueTyped<
    CustomPropertyType.SingleSelect,
    ListOption[],
    string[]
  > {}

export type CustomPropertyVariant =
  | StringCustomProperty
  | NumberCustomProperty
  | SingleSelectCustomProperty
  | MultiSelectCustomProperty;

// Parser for custom properties
// It receives the non-typed version and automatically
// checks whether the object has correct properties
// and returns the typed version so it can be
// conveniently used by the developer.
// If parsing fails, returns the error in the error prop.

// TODO
