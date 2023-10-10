# visuplan-data

### Custom properties

Documentation about how custom props work is in a
[separate README](./CUSTOM_PROPS.md)

### Transformation of material

Documentation about how the material transformation works is in a
[separate README](./TRANSFORMATION.md)

### Public APIs

#### QUERY

- GetAllManufacturingPlansMetadata - returns all definitions of manufacturing plans in the system with metadata like name
- GetManufacturingPlan (id: string) - returns a specific manufacturing plan based on its id
- GetAllStationDefinitions - returns all station definitions
- GetAllProductionEntityDefinitions - returns all production entity definitions

#### MUTATE

- ImportStations (stations: Station[]) - clears stations in the system and adds the passed ones 
- ImportManufacturingPlans (plans: ManufacturingPlan[]) - Replaces all plans by the imported ones
- ImportProductionEntityDefinitions (definitions: ProductionEntityDefinition[]) - 

### Callback APIs
- /export-stations - POST api called when stations are exported. All stations are passed
- /export-production-entity-definitions - POST api called when all production entity definitions are exported.
- /export-manufacturing-plans - POST api called when all manufacturing plans are exported

??
/task-completed

## Questions

Jak pripojit k ESO? 
1. Cloud vs on-premise
2. Pro v1 dohodnout tok dat pro inicializaci - muzeme udelat pro stanoviste, produkty a transformace zvlast ale NE hybrid (konflikt IDs)
3. Reseni konfliktu pri importu (napr import planu obsahuje entity, ktere nejsou v DB)
4. Transakce skrz systemy? (Propagace splneneho tasku do ESO) - Pro ted napr fail log

Vyresit jak se bude SW pouzivat (data flow pro import + runtime) napr zobrazeni pruvodky, zaplanovani konkretni vyroby (pocet kusu)

## Changelog

1. Timestamp changed for production log
2. Transformation formula
3. Separate transformations from stations, updated example
4. Support material substitution, finished tasks, API "definition"

// TODO Dalsi verze umoznuje modelovani na zaklade inventory
// TODO Vyresit runtime a co mame za use cases 
