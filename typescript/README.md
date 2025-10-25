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
typeof [] === 'object' || typeof null === 'object'
type CurrencyValidationSchemaType = InferType<typeof currencyValidationSchema>;
type FormWizardType = ReturnType<typeof useFormWizard>;
Awaited<ReturnType<typeof func>>
key: string -> keyof Campaignoffer
satisfies || as || type
keyof typeof
<input /> "onChange()" event type: `const onChange: React.ComponentProps<"input">["onChange"]`
```
```
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

**Falsy values in JS:**

- false
- 0 (including negative zero)
- "" (empty string)
- null
- undefined
- NaN (Not a Number)

- Nullish Coalescing Operator (??): Checks if the left operand is null or undefined (nullish values)
- Logical OR (||): Returns the first truthy value it encounters, any falsy value (including 0, "") will trigger the right operand

## Useful functions

Pick - Omit - Exclude - Partial - Record - Required - Extract

- **Pick / Omit**: object type or interfaces
- **Extract / Exclude**: union types

## Prettify

```
type Prettify<T> = {
        [K in keyof T]: T[K]
        } & {};
```

## Ref

const audioRef = useRef<ElementRef<"audio">>(null);
<audio ref={audioRef} />

## NoInfer

```
type NoInfer<T> = [T][T extends any ? 0 : never];
```
```
function createFSM<TState extends string>(config: {
  initial: NoInfer<TState>;
  states: TState[];
}): TState;
```
```
const example1 = createFSM({
  initial: "idle", -> cannot be "not-allowed"
  states: ["idle", "loading", "success", "error"],
});
```

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


## Ref

`Object.is()` - Determines whether two values are the same value.

Object, Array, function -> ref are different, needs to be wrapped by `useCallback()`

The difference between primitive and non-primitive data types is that:

- primitive data types are compared by value.
- non-primitive data types are compared by reference.

## Async loops

- Promise.all() pour exécuter plusieurs promesses en parallèle.
- Promise.allSettled() si tu veux attendre toutes les promesses, même celles qui échouent.
- Promise.any() si tu veux juste la première qui réussit.
- Promise.race() si tu veux la plus rapide, quelle que soit son issue.

- [Rethinking async loops in JavaScript](https://allthingssmitty.com/2025/10/20/rethinking-async-loops-in-javascript/)

## Generators

https://www.reactsquad.io/blog/understanding-generators-in-javascript

## URLs

```js
const url = new URL(url)
```

## Pipe

```js
const pipe = (...fns) => input => fns.reduce(
  (acc, fn) => fn(acc), input
)

pipe(toUpperCase, removeSpaces, addExclamation)
```

## Other

const capitalize = ([firstLetter, ...restOfWord]) => {
  return firstLetter.toUpperCase() + restOfWord.join('')
}
