# TypeScript

## Mandatory

***Note: Skipped tasks 9 and 10 for task_4/***

### task_0/

#### 0
- Basic interface to declare shape of object (can be used for multiple objects)
    - Interfaces also used for functions, classes, whereas simple types like "const" don't need interface
- Render table and append new rows with JS (meaning use object/interface)
    - Note: Very simple table
    - Found in:
        - task_0

### task_1/

#### 1
- Define object using interface with optional elements
    - Found in:
        - task_1

#### 2
- Extend object using interface
    - Found in:
        - task_1

#### 3
- Define function interface using instance (of specific type) as argument
    - Found in:
        - task_1

#### 4
- Define class with interface (including constructor and methods)
    - Found in:
        - task_1

### task_2/

#### 5
- Define class method that returns different instance (of different type) based on argument
- Write function based on type of class instance
    - Found in:
        - task_2

#### 6
- Define function with type guard and type predicate
    - Guard - Expression performed at runtime to guarantee type (typically in/typeof/instanceof)
    - Predicate - Special return type that signals type of specific value (specified type)
        - Meaning returns boolean-- but boolean specifically signals whether type is what is defined
        - As in, is something that has numberOfLives property a Cat type? Notice casting with "as"!
            ```
            function isCat(animal: Cat | Dog): animal is Cat {
                return (animal as Cat).numberOfLives !== undefined;
            }

            console.log(isCat({ numberOfLives: 9 }));
            Output: true
            ```
    - Found in:
        - task_2

#### 7
- Define string literal type - not string, number, etc - the type is an exact string/number
    - Note: const cat = 'Shadow' IS a string literal with type Shadow
    - Can have multiple options - but nothing besides the defined values
    - Found in:
        - task_2

### task_3/

#### 8
- Using "ambient namespaces" to type functions in .js file
- Ensure type safety/intellisense while using imported files or third-party libraries (maybe even jquery/angularjs/nodejs)
    - Files:
        - crud.js
            - Normal .js file with functions that can't/shouldn't be refactored to TypeScript
        - crud.d.ts
            - Ambient file containing type declarations from crud.js
            - .d.ts indicates to compiler that declaring types for .js file (aka typing functions/implementations declared in different file)
        - interface.js
            - Normal interfaces used in main.js and crud.d.ts
        - main.ts
            - Example code (no errors with npm run build)
            - Indicates ambient file with:
                - /// \<reference path = "\<name>.d.ts" />
    - Found in:
        - task_3

### task_5/

#### 11
- Define objects with branded interfaces to uniquely identify type
-  Brand is string literal type added to non-existing property
when two objects have same shape
    - As in, need to differentiate between objects like High vs Low - is day.temp the High or Low temp?
        ```
        interface High {
            temp: number;
        }
        interface Low {
            temp: number;
        }
        ```
    - Found in:
        - task_5

## Learning Objectives
- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript
