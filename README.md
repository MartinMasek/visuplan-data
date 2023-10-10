# visuplan-data

### Custom properties

Documentation about how custom props work is in a
[separate README](./CUSTOM_PROPS.md)

### Transformation of material

Documentation about how the material transformation works is in a
[separate README](./TRANSFORMATION.md)

## Questions

1. Budeme modelovat na obecne urovni (tzn mame ocel a ta je vstup) ci trackovat konkretni instance (20 kg oceli). Dohodnuto, ze je modelovani delane pomoci definice kolik je treba na jednotku.
2. Jak modelovat tasky? Dat je primo k transformation formula, co maji obsahovat?
3. Definice produktu a pouziti skrz ruzne transformace vs definice ad-hoc (id pro stejnou vec pak budou jine)
4. Modelujeme proces s variantou custom property ci definici (smysl dava varianta). Priklad, kdy definice rika, ze je ocel s cistotou 95, 98, 99 a varianta ma konkretni hodnotu (napr 98)
5. Modelovani podminek pro tasky - netreba

## Changelog

1. Timestamp changed for production log
2. Transformation formula
3. Separate transformations from stations, updated example
4. Support material substitution, finished tasks

// TODO Dalsi verze umoznuje modelovani na zaklade inventory
// TODO dokoncit tasky, zacit se venovat runtime
// Architecture picture