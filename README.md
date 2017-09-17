## Code Challenge

### Instructions
Run `npm install` to build the app

Run `ng serve` and navigate to `http://localhost:4200/` to see the app (`ng serve -o` to launch automatically) 

Run `ng test` to execute the unit tests

### The challenge

Convert the string: 
```
"(id,created,employee(id,firstname,employeeType(id), lastname),location)" 
```
to the following output:
```
id
created
employee
- id
- firstname
- employeeType
-- id
- lastname
location
```

Bonus (output in alphabetical order):
```
created
employee
- employeeType
-- id
- firstname
- id
- lastname
id
location
```

### The pattern
App Module declares AppComponent
AppComponent imports APP_CONFIG, an interface to a group of constants that include the input string, separator characters (the open and close parentheses) and numeric order identifiers that represent a rough template for the final output and sorted output.
 


