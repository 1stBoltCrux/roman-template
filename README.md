# **Roman Numerals**

#### By William Chu and Luke Stockburger

## Description

Convert number to Roman numerals

## Specifications

| Specification | Input | Output
| --- | --- | --- |
| Convert number to symbol | Number [1,5,10,50,100,500,1000] | Symbol [I,V,X,L,C,D,M] |
| If symbol is next to same symbol, add them, unless they add up to next symbol denomination | Input [2,200,2000, 100] | Output [II,CC,MM,C(not LL)]|
| Same symbols cannot be more than 3 in a row | Input [IIII, CCCC, MMMM] | Not Valid |
| If symbol is preceded by a lesser value symbol, subtract lesser symbol from greater value symbol it precedes | Input [IV, IX, XIV] | Output [4, 9, 14] |
| Convert single digit numbers | Input [1,2,4,5,9] | Output [I, II, IV,V,IX] |
|Convert multi-digit numbers | Input [20, 40, 90] | Output [XX, XL, XC] |

## Setup/Installation Requirements

* To view project code, _clone repository from_
* To view project, _open in web browser_

## Technologies Used

* HTML
* CSS _(Bootstrap)_
* JavaScript _(jQuery)_

## License

* GPL

Copyright (c) 2018 **_William Chu Luke Stockburger_**
