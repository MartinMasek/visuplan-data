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

Jak pripojit k ESO? - Priklad s url + API token

[x] Cloud vs on-premise (cloud by mel byt ok)
[x]Pro v1 dohodnout tok dat pro inicializaci - muzeme udelat pro stanoviste, produkty a transformace zvlast ale NE hybrid (konflikt IDs) - odsouhlaseno
[x] Reseni konfliktu pri importu (napr import planu obsahuje entity, ktere nejsou v DB) - Jednoducha zprava a check idcek
[x] Transakce skrz systemy? (Propagace splneneho tasku do ESO) - Pro ted napr fail log - Pokud ESO odpovida, tak blokujeme UI, pokud neodpovida, tak pokracujeme a logujeme
[x] Zamena produktu je na planu nebo globalne? Globalne
[ ] Budeme modelovat jen vstupy pro production run + pripadna re-definice ve vyrobe? + Moznost definovat az ve vyrobe
[x] v1 neumozni jeste specifikovat tasky a notes pro konkretni run (jen se to dedi) - moznost deaktivovat task + moznost pridat task do konkretniho runu
[x] Jak sofistikovane musi byt planovani kapacity (input + vypocitani casu vs externi casy dodavky a pocitani konkretniho datumu) - planovani kapacity je cele nice to have, ale nemusime se focusovat nutne
[x] Priority - Modelovani -> Management -> auth (pripadne doplnit o sofistikovane planovani kapacity) (kapacita je dobra, kdyz se stihne)
[x] Jsou transformace pro stanoviste definovany implicitne tvorbou diagramu a nebo se definuji na stanovisti a pak jen vybiram v diagramu - ad hoc
[x] Mazani stanoviste - Cascade delete? Nejspis ne, tzn cim nahradit? (muzeme soft delete pokud k tomu jsou relace) - to same mazani produktu - jen soft delete na urovni uzivatele (admin je vzdy vidi) - neaktivni
[x] Pokud zmenim plan, tak to nezmeni runy
[x] Jsou opravdu tasky + notes pro stanoviste dulezite? Jak pak v aplikaci rozlisovat, kdyz nejake tasky nejsou treba na stanoviste - ano potrebujeme
[ ] Jak bude prirazena prace - v planu co nejjednodussi pristup - k vytvorenemu runu assignee (mozna nejaka grupa) a jen trackovat kdo task splnil (zadne rozlisovani na typy tasku urcitym lidem apod)
[ ] Je treba nejaka aktivace planu superviserem?
[ ] Apka na prirazeni prace bude jen responzivni aplikace, ktera na zaklade role skryje vetsinu UI (management stanici apod) pro delnika

## Changelog

1. Timestamp changed for production log
2. Transformation formula
3. Separate transformations from stations, updated example
4. Support material substitution, finished tasks, API "definition"
5. Added external ids everywhere (every mutation takes id from visuplan)

// TODO Dalsi verze umoznuje modelovani na zaklade inventory
// TODO Vyresit runtime a co mame za use cases
// TODO auth
// TODO samostatna screena
// TODO moznost pridat task az pro konkretni run
// TODO zmenit obrazek, ze to bude skrz stanoviste a ne runy na zacatku - moznost barcodu a to rekne co je to za zakazku a vlastne to rovnou nacte + zobrazit zakazky co uz byly a co budou
// 