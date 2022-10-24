1. 3. Because the var initially is set to be 0, and after the for loop, it is incremented to 3 because the price length is 3.
2. 150. Because the last value in price is 300, and discountedPrice = 300*(1-0.5) = 150.
3. 150. Because final is rounding discountedPrice*100 and divided by 100, therefore it is 150*100=15000, after rounding it is 15000, and final price = 15000/100 = 150.
4. [50, 100, 150]. It will return a list of three values, and each value is the final price after discount.
5. Error. Because it is out of scope (it is not defined in this scope).
6. Error. Because it is out of scope (it is not defined in this scope).
7. 150. Because final price is defined in this scope, its value will be rounding discountedPrice*100 and divided by 100, therefore it is 150*100=15000, after rounding it is 15000, and final price = 15000/100 = 150.
8. [50, 100, 150]. Because discounted is defined in this scope, it will return a list of three values, and each value is the final price after discount.
9. Error. Because it is out of scope (it is not defined in this scope).
10. 3. Because the length is initialized to be constant with the value of the length of the price list.
11. [50, 100, 150]. This does work because the value pushed in the array does not change the address of the array in the memory, therefore it will not produce an error.
12. 
- (a) student.name
- (b) student['Grad Year']
- (c) student.greeting()
- (d) student['Favorite Teacher'].name
- (e) student.courseLoad[0]

13.
- (a) 32
- (b) 1
- (c) 3
- (d) 3null
- (e) 4
- (f) 0
- (g) 3undefined
- (h) NaN

14.
- (a) true
- (b) true
- (c) true
- (d) false
- (e) false
- (f) true

15. The difference between == and === is that == will do type conversion before the comparison, but === will compare both the values and the data types.
17. The result will be [2, 4, 6]. At line 13, we call the function modifyArray() and pass in two arguments. The first is an array and the second is a callback function. It will go to the line 1 and iterate through the array. The value pushed into the newArr is the modified value after doSomething, since we call it to modify the value in the for loop and push the new value in. doSomething will accept the value in the array and times 2 and return this new value.

19.
1
4
3
2

