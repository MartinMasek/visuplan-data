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

#### MUTATE (ignores externalId - everything is based on the VisuPlan id)

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

[x] Cloud vs on-premise (cloud by mel byt ok)
[x]Pro v1 dohodnout tok dat pro inicializaci - muzeme udelat pro stanoviste, produkty a transformace zvlast ale NE hybrid (konflikt IDs) - odsouhlaseno
[x] Reseni konfliktu pri importu (napr import planu obsahuje entity, ktere nejsou v DB) - Jednoducha zprava a check idcek
[x] Transakce skrz systemy? (Propagace splneneho tasku do ESO) - Pro ted napr fail log - Pokud ESO odpovida, tak blokujeme UI, pokud neodpovida, tak pokracujeme a logujeme
[ ] Budeme modelovat jen vstupy pro production run + pripadna re-definice ve vyrobe? + Moznost definovat az ve vyrobe
[ ] v1 neumozni jeste specifikovat tasky a notes pro konkretni run (jen se to dedi)
[ ] Jak sofistikovane musi byt planovani kapacity - input + vypocitani casu vs externi casy dodavky a pocitani konkretniho datumu
[ ] Priority - Modelovani -> Management -> auth (pripadne doplnit o sofistikovane planovani kapacity)


## Changelog

1. Timestamp changed for production log
2. Transformation formula
3. Separate transformations from stations, updated example
4. Support material substitution, finished tasks, API "definition"
5. Added external ids everywhere (every mutation takes id from visuplan)

// TODO Dalsi verze umoznuje modelovani na zaklade inventory
// TODO Vyresit runtime a co mame za use cases
// TODO auth
// TODO mazani
