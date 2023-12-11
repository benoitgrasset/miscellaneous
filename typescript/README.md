## Typescript

```
type ReactText = string | number;

type ReactChild = ReactElement | string | number;

type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined

JSX.Element

ReactElement

FC (FunctionComponent)

```

```
const roles = ['user', 'admin'] as const
type RolesArray = typeof roles
type Roles = RolesArray[number]
```

Autocomplétion sur un type string:
```
"application" | "settings" | "user" | (string & {} )
```

```
typeof [] === 'object'
type CurrencyValidationSchemaType = InferType<typeof currencyValidationSchema>;
type FormWizardType = ReturnType<typeof useFormWizard>;
Awaited<ReturnType<typeof func>>
key: string -> keyof Campaignoffer
satisfies || as || type
keyof typeof
<input /> "onChange()" event type: `const onChange: React.ComponentProps<"input">["onChange"]`
type Handlers = keyof HTMLElement & `on${string}`; -> filtre les clés de HTMLElement qui commencent par 'on'
```

|           | \|\|  | ??        |
|-----------|-------|-----------|
| 0         | false | true      |
| " "       | false | true      |
| false     | false | true      |
| null      | false | **false** |
| undefined | false | **false** |
| [ ]       | true  | true      |


## Useful functions

Pick - Omit - Exclude - Partial - Record - Required

## Mapped object

```
{ [key in QueryKey]?: string }
```

## TS Config

https://www.totaltypescript.com/tsconfig-cheat-sheet

## Mutability

| mutable    | immutable   |
|------------|-------------|
| .push()    | .concat()   |
| .pop()     | .slice()    |
| .shift()   | .map()      |
| .unshift() | .filter()   |
| .reverse() | ... spread  |
| .splice()  |             |
| .sort()    | .toSorted() |
|            |             |
