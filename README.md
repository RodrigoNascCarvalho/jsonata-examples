# JSONata Examples

## Description
This repository consists of a test suite that tests each one of the cases from [JSONata documentation](http://docs.jsonata.org/simple) and generates output examples in the form of Jest Snapshots.


## How-to-run
In order to run the tests:

All tests:
```
npm install
npm run test
```

Specific case:
```
npm run test:spec -- <<test-code> //E.g., SQ01
```
Running specific cases will add the following properties to the terminal:

* **Input** - JSON input
* **Expr** -  Expression passed to JSONata
* **Output** - JSON output from JSONata

Input: 
```
{
    "Account": {
    "Account Name": "Firefly",
    "Order": [
        {
        "OrderID": "order103",
        "Product": [
            {
            "Product Name": "Bowler Hat",
            "ProductID": 858383,
            "SKU": "0406654608",
            "Description": {
                "Colour": "Purple",
                "Width": 300,
                "Height": 200,
                "Depth": 210,
                "Weight": 0.75
            },
            "Price": 34.45,
            "Quantity": 2
            },
            {
            "Product Name": "Trilby hat",
            "ProductID": 858236,
            "SKU": "0406634348",
            "Description": {
                "Colour": "Orange",
                "Width": 300,
                "Height": 200,
                "Depth": 210,
                "Weight": 0.6
            },
            "Price": 21.67,
            "Quantity": 1
            }
        ]
        },
        {
        "OrderID": "order104",
        "Product": [
            {
            "Product Name": "Bowler Hat",
            "ProductID": 858383,
            "SKU": "040657863",
            "Description": {
                "Colour": "Blue",
                "Width": 300,
                "Height": 200,
                "Depth": 210,
                "Weight": 0.75
            },
            "Price": 34.45,
            "Quantity": 4
            },
            {
            "ProductID": 345664,
            "SKU": "0406654603",
            "Product Name": "Cloak",
            "Description": {
                "Colour": "Black",
                "Width": 30,
                "Height": 20,
                "Depth": 210,
                "Weight": 2
            },
            "Price": 107.99,
            "Quantity": 1
            }
        ]
        },
        {
        "OrderID": "order105",
        "Product": [
            {
            "Product Name": "Bowler Hat",
            "ProductID": 858383,
            "SKU": "0406654608",
            "Description": {
                "Colour": "Yellow",
                "Width": 300,
                "Height": 200,
                "Depth": 210,
                "Weight": 0.75
            },
            "Price": 34.45,
            "Quantity": 2
            },
            {
            "ProductID": 345666,
            "SKU": "0406654604",
            "Product Name": "Cloak Dagger",
            "Description": {
                "Colour": "Green",
                "Width": 30,
                "Height": 100,
                "Depth": 210,
                "Weight": 2
            },
            "Price": 207.99,
            "Quantity": 1
            }
        ]
        }
    ]
    }
}
```

Expr:
```
Account.Order.Product.Description
```

Output:
```
[
    {
    "Colour": "Purple",
    "Width": 300,
    "Height": 200,
    "Depth": 210,
    "Weight": 0.75
    },
    {
    "Colour": "Orange",
    "Width": 300,
    "Height": 200,
    "Depth": 210,
    "Weight": 0.6
    },
    {
    "Colour": "Blue",
    "Width": 300,
    "Height": 200,
    "Depth": 210,
    "Weight": 0.75
    },
    {
    "Colour": "Black",
    "Width": 30,
    "Height": 20,
    "Depth": 210,
    "Weight": 2
    },
    {
    "Colour": "Yellow",
    "Width": 300,
    "Height": 200,
    "Depth": 210,
    "Weight": 0.75
    },
    {
    "Colour": "Green",
    "Width": 30,
    "Height": 100,
    "Depth": 210,
    "Weight": 2
    }
]
```

To regenerate snapshots when data is changed for testing:
```
npm run test:generate-snapshots
```

To run in watch mode while adding new test cases:
```
npm run test:watch
```

## Helpers
A helper for testing is used in:

```
__tests__/jsonata-helper.js
```

to generalize the code used for evaluating the JSONata expression and generating a Jest Snapshot .

## Snapshots
Snapshots can be checked at:

```
__tests__/__snapshots__/ 
```

with the results for each test case

## Mocks
Only one mock is used as a JSON Example, it can be found under:
```
__mocks__/example-json.js
```
