## Code Challenge

### Instructions
Clone this repo or download the zip file  
`cd [***the directory you created***]`    

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
**App Module** declares **AppComponent**

**AppComponent** 

imports APP_CONFIG, an interface to a group of constants that include the input string, separator characters (the open and close parentheses) and numeric order identifiers that represent a rough template for the final output and sorted output.

***buildOutput***  
Create the first version of the array of separate values  
Remove the empty strings created by the split  
Remove the separators  
Store the 'id' string to copy into duplicates  
Insert the 'employee' and 'employeeType' strings in the right place  
Call formatOutput

***formatOutput***  
Add the leading '-'s where necessary

***sort***  
Standard array sort  
Copy the strings with leading '-'  
Copy the 'employee' and '--id' strings  
Copy the modified sort to the master array  

***reset***    
Call buildOutput






 


