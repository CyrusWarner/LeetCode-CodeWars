// romanToInt("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCCXLV")

// interface Rn {
//     name: string
//     value: number

// }

// function romanToInt(s: string): number {
//     let stringArr: string[] = s.split("")
//     let romanNums = [
//         {name: 'I', value: 1},
//         {name: 'V', value: 5},
//         {name: 'X', value: 10},
//         {name: 'L', value: 50},
//         {name: 'C', value: 100},
//         {name: 'D', value: 500},
//         {name: 'M', value: 1000}
//     ]
//     let romanNum: Rn | undefined
//     let count: number = 0
//     while (stringArr.length > 0) {
//         if(
//             (stringArr[0] === "I") &&
//             (stringArr[1] === "V" || stringArr[1] === "X" )
//         ) {
//             romanNum = romanNums.find(({name}) => name === stringArr[1].toUpperCase())
//             count = count + (romanNum!.value - 1)
//             stringArr.splice(0, 2)
//         } 
//         else if(
//             (stringArr[0] === "X") &&
//             (stringArr[1] === "C" || stringArr[1] === "L" )
//         ) {
//             romanNum = romanNums.find(({name}) => name === stringArr[1].toUpperCase())
//             count = count + (romanNum!.value - 10)
//             stringArr.splice(0, 2)
//         } 
//         else if(
//             (stringArr[0] === "C") &&
//             (stringArr[1] === "D" || stringArr[1] === "M" )
//         ) {
//             romanNum = romanNums.find(({name}) => name === stringArr[1].toUpperCase())
//             count = count + (romanNum!.value - 100)
//             stringArr.splice(0, 2)
//         } 
//         else {
//             const result = romanNums.find(({name}) => name === stringArr[0].toUpperCase())
//             count += result!.value
//             stringArr.splice(0, 1)
//         }
//     };
//     return count
// }

// let result = longestCommonPrefix(["flower","flow","flight"])

// THIS method is complete needs testing I assumed that this method was to find the most common prefix in an array, but they all need to have this prefix in oredr to pass on leetCOde :( solution works, but not for leetcode as the problem was interpreted incorrectly
// function longestCommonPrefix(strs: string[]): string {
    // if(strs.includes("")){
    //     return ""
    // }
//     if(strs.length === 1) {
//         return strs[0]
//     }

//     let commonPrefixArr: string[] = []
//     let tempArr: string[] = []
//     var commonPrefixObj: any = {}

//     for(let i = 0; i < strs.length; i++) {
//         for(let j = i + 1; j < strs.length; j++ ) {
//             if((strs[i] === "" || strs[j] === "")) {
//                 break
//             }
//             let strOneArr = strs[i].split("")
//             let strTwoArr = strs[j].split("")
//             let arrToLoop: string[]

//             if(strOneArr.length < strTwoArr.length || strOneArr.length === strTwoArr.length) {
//                 arrToLoop = strOneArr.slice()
//             } else {
//                 arrToLoop = strTwoArr.slice()
//             }

//             let count: number = 0

//             while (count < arrToLoop.length) {
//                 let tempString: string;
//                 if(strOneArr[0] !== strTwoArr[0]) {
//                     break
//                 }
//                 if(strOneArr[count] === strTwoArr[count]) {
//                     tempString = strOneArr[count]
//                     tempArr.push(tempString)
//                 } else {
//                     break
//                 }
//                 count++
//             }
//             count = 0
            
//             if (tempArr.length > 0) {
//                 let foundPrefix: string = tempArr.join("")
//                 commonPrefixArr.push(foundPrefix)
//                 tempArr = []

//                 let v = 0
//                 while (v < commonPrefixArr.length) {
//                     // if (commonPrefixArr.includes(foundPrefix)) {
//                         if(foundPrefix in commonPrefixObj) {
//                             commonPrefixObj[foundPrefix].count += 1
//                         } else if (foundPrefix.length > 0) {
//                             commonPrefixObj[foundPrefix] = {count: 1}
//                         }
//                     // }
//                     v ++
//                 }
//             }
//         }
//     }

//     if(Object.keys(commonPrefixObj).length !== 0) {
//         let result = Object.keys(commonPrefixObj).reduce((a, b) => (commonPrefixObj[a] > commonPrefixObj[b]) ? a : b)
//         if(!result){
//             return ""
//         }
//         return result
//     }
//     return ""
// };


// var isValid = function(s: string) {
//     while (
//       s.indexOf("{}") !== -1 || // checks to see if these characters exist in the string
//       s.indexOf("[]") !== -1 ||
//       s.indexOf("()") !== -1
//     ) {
//       s = s.replace("()", ""); //  Replaces the characters with an empty string
//       s = s.replace("{}", "");
//       s = s.replace("[]", "");
//     }
//     return s === ""; // checks to make sure the s is empty and returns a boolean value
// };
  

// let val = isValid("()[]{}")
// console.log(val)
// function isValid(s: string) {
//     let ans = false
//     let sa: string[] = s.split("")
//     let length = sa.length
//     if(sa.length % 2 !== 0) return ans
//     for(let i=0; i < length; i++) {
//         if(sa[0] === "(" && sa[sa.length - 1] === ")") {
//             sa.pop()
//             sa.shift()
//         }
//         if(sa[0] === "{" && sa[sa.length - 1] === "}") {
//             sa.pop()
//             sa.shift()
//         }
        
//         if(sa[0] === "[" && sa[sa.length - 1] === "]") {
//             sa.pop()
//             sa.shift()
//         }
//         if((sa[0] === "(" && sa[0+1] === ")") || (sa[0] === "{" && sa[0+1] === "}") || (sa[0] === "[" && sa[0+1] === "]") ) {
//             sa.splice(0, 2)
//         }

//     }
//     return sa.length === 0

// }

// let nums = [1, 1, 1, 2,3, 4,4,4, 7]

// let val = containsDuplicate(nums)

// function containsDuplicate(nums: number[]): number { //recursively removes duplicates in a number array
//     let length = nums.length
//     for(let i=0; i < length; i++) {
//         for(let j=i+1; j < length; j++){
//             if(nums[i] === nums[j]) {
//                 nums.splice(j, 1)
//                 containsDuplicate(nums)
//             }
//         }
//     }
//     return nums.length
// };

// let numsArr = [1,2,3,4,5,6]
// let result = productExceptSelf(numsArr)
// console.log(result)
// // This method only works on integers above 0
// function productExceptSelf(nums: number[]): number[] {
//     let productArr: number[] = []
//     let prevProduct!: number
//     let productVal!: number
//     let count: number = 0
//     for(let i=0; i < nums.length; i++) {
//         if(nums[i+2] === 0) {
//             continue
//         }
//         if(!prevProduct) {
//             productVal = nums[i] * nums[i+1]
//         }
//         if(i + 2 >= nums.length) {
//             break
//         }
//         prevProduct = productVal
//         productVal = nums[i+2] * prevProduct
//     }

//     while(count < nums.length) {
//         if(nums[count] !== 0 && nums.indexOf(0) !== -1) {
//             productArr.push(0)
//         } else {
//             let num = nums[count]
//             if(num !== 0) {
//                 let val = productVal / num
//                 productArr.push(val)
//             } else {
//                 productArr.push(Math.abs(productVal))
//             }
//         }
//         count++
//     }
// return productArr
// };



//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//      }
//  } 

//  // list Node 1 -> 2 -> ListNOde -> ListNode LinkedList expample
// let head = new ListNode(1)
// let h1 = new ListNode(2)
// let h2 = new ListNode(3)
// let h3 = new ListNode(4)

// head.next = h1
// head.next.next = h2
// head.next.next.next = h3
// let val = reverseList(head)

//  function reverseList(head: ListNode | null): ListNode | null {
//      let prev = null, next = null
//     while(head) {
//      next = head.next // takes the next value
//      head.next = prev // sets the next head as null
//      prev = head //stores the switched around head values from above
//      head = next // sets head as the next value

//     }
// update to return prev
//     return null
// };

// let val = removeElement([0,1,2,2,3,0,4,2], 2)
// console.log(val)
// function removeElement(nums: number[], val: number): number {
//     let len = nums.length
//     let count = 0
//     while (count < len) {
//         if(nums[count] === val){
//             nums.splice(count, 1) // removes that specific element from the array
//             removeElement(nums, val)
//         }
//         count ++
//     }
//     return nums.length
// };


// let s = "   fly me   to   the moon  "
// let res = lengthOfLastWord(s)
// console.log(res)

// First I will trim the string
// Second I will split the string by spaces
// Thirdly attempt to put each word in new string array
// then I will get the last word in the string
// then I will return the length of the string
// function lengthOfLastWord(s: string): number {  
//     let ans = 0
//     let sTrimmed = s.trim() // string is being trimmed
//     let sArr = sTrimmed.split("") // string is then split into an array
//     let wordsArr: string[] = []
//     let word = ""
//     let i = 0 // i short for index
//     while (i < sArr.length) {
//         if(!sArr[i].includes(" ") || !sArr[i].includes("")) {
//             let letter = sArr[i] // if the letter is not an empty string with a space or an empty string we get that letter from the array
//             word = word.concat(letter) // concatenate that letter on to the empty word
//         } else { // else statement runs if at sArr[i] it includes an empty string
//             if(word !== "") { // if the word is not an empty string we push this word to the wordsArr
//                 wordsArr.push(word)
//             }
//             word = "" // reset the word for next iteration. We only want to reset the word if we have hit a space in the array
//         }
//         if(i === sArr.length - 1) { // at the end of the while loop we want to check to make sure the final word is pushed to the words array
//             wordsArr.push(word)
//         }

//         i++
//     }
    
//     ans = wordsArr[wordsArr.length - 1].length // gets the length of the last words value in the array

//     return ans
// };

// if(word === "" || i === sArr.length - 1){
//     wordSarr.push(word)
//     word = ""
// }

// First join the array of digits together COMPLETED
// Secondly change the digits to a number COMPLETED
// Thirdly add one to the digit COMPLETED
// 4th step convert digits to a string COMPLETED
// 5th step split the digits back into an array COMPLETED
// 6th step convert each string back to a number and pass it into a new array COMPLETED
// Lastly convert the string array of digits back to numbers to be returned COMPLETED

// let val = plusOne([9])
// console.log(val)

// function plusOne(digits: number[]): number[] {
//     let ans: number[] = [] // this will hold the answer
//     let digitsString: string = digits.join("") // join the digits together into a string
//     let digitsInt = BigInt(digitsString) // convert the digitsString to a BigInt add 1n to increment the bigint
//     digitsInt += 1n // increment the value
//     let addedDigitsString = digitsInt.toString().split("") // split the digitsInt back into an array
//     for(let i = 0; i < addedDigitsString.length; i++) {
//         ans.push(parseInt(addedDigitsString[i])) // converts each digit in the array back into an int
//     }
//     return ans // returns the new answer
// };

// let haystack = "hello", needle = "ll"
// let res = strStr(haystack, needle)
// console.log(res)

// function strStr(haystack: string, needle: string): number {
//     let ans = 0
//     if(needle === "") return ans

//     let i = haystack.indexOf(needle)
//     ans = i
//     if(i !== -1) {
//         return ans
//     } 

//     return ans
// };

// let nums = [2,3,5,6], target = 1

// let val = searchInsert(nums, target)
// console.log(val)
// function searchInsert(nums: number[], target: number): number {
//     let ans = 0 // default value for index 0 if it is inserted at beginning of array
//     let targetIndex = nums.indexOf(target)
//     if(targetIndex !== -1) {
//         return targetIndex
//     }

//     for(let i=0; i < nums.length; i++) {
//         if (nums[i] < target && target < nums[i+1]) {
//             ans = i+1
//         }
//         if(nums[nums.length -1] < target){
//             ans = nums.length
//         }
//         if(nums[0] > target) {
//             ans = 0
//         }
//     }

//     return ans

// };
// let res = isHappy(7)
// console.log(res)
// function isHappy(n: number): boolean {
//     let ans = false // answer to be returned
//     let set = new Set() // creates a new set to check to make sure a sum is not repeated. If a sum is shown twice in the set it is not a happy number
//     while(!set.has(n)) { // loops as long as a number is not repeated
//         set.add(n) // add the newly added variable n to the set
//         let s = n.toString().split("") // split the string into a string array to loop over
//         let sum = 0 // have a variable hold the sum. reset the sum after each iteration
//         for(let i=0; i < s.length; i++ ) {
//             sum += Math.pow(+s[i], 2) // add the sums together
//             if(i === s.length - 1) { // if we havent reached the end of the loop yet we will not check the sum and we will not call isHappy again
//                 if(sum === 1){
//                     ans = true // if the sum equals one we have reached a happy number
//                     return ans
//                 } else {
//                     n = sum // if the sum is not equal to one we will change the value of n to the new sum and loop again
//                 }
//             }
//         }
//     }
//     return ans
// };


// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

// input  is root = [3,9,20,null,null,15,7] 
// output should equal 3
// first we will have a count = 1 
// second we will have our conditional that returns the count once we have traversed the entire binary tree

// let root = new TreeNode(3)
// root.left = new TreeNode(9)
// root.right = new TreeNode(20)
// root.right.left = new TreeNode(15)
// root.right.right = new TreeNode(7)

// let res = maxDepth(root)
// console.log(res)
// function maxDepth(root: TreeNode | null): number { // used to calculate the max depth of a tree
//     if(root === null) {
//         return 0 // once we have traversed through the entire tree and get to the end we will return 0
//     }
//     let leftDepth = maxDepth(root.left)
//     let rightDepth = maxDepth(root.right)
//     if (leftDepth > rightDepth) {
//         return leftDepth + 1
//     } else {
//         return rightDepth + 1
//     }
// };

// input ->  [4,2,7,1,3,6,9]
// expected output -> [4,7,2,9,6,3,1]
// function invertTree(root: TreeNode | null): TreeNode | null { // how to invert a binary tree
//     if(root === null) return null

//     let left = invertTree(root.left) // Used to visit each node in the binary tree
//     let right = invertTree(root.right)

//     root.right = left; // swap the right node with the left node
//     root.left = right // swap the left node with the right node

//     return root
// };



// input --> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// output --> [1,2,2,3,5,6]
// m is the amount of integers in the nums1 array, n is the amount of integers in the nums2 array

// let res = merge([1,2,3,0,0,0], 3, [2,5,6], 3)
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     let lastIndex = m + n -1 //gets the last index of nums1

//     // merge in reverse order
//     while(m > 0 && n > 0) { // while their are elements in both arrays
//         if(nums1[m-1] > nums2[n-1]) { // if at the last index of the nums1 arr is greater than nums2 at the last index
//             nums1[nums1.length - 1] = nums1[m-1] //
//             m -= 1
//         } else {
//             nums1[nums1.length - 1] = nums2[n-1]
//             n -= 1
//         }
//         lastIndex -= 1
//     }

//         // fill nums1 with leftover nums2 elements
//     while(n > 0) {
//         nums1[nums1.length - 1] = nums2[n - 1]
//         n -=1
//         lastIndex -=1
//     }
// };

// Input --> nums = [2,2,1]
// Output --> 1
// 1st we will create a memo object to check if the number has already been found

// let val = singleNumber([4,1,2,1,2])

// function singleNumber(nums: number[]) : number {
//     let memo: any = {} // instantiate an empty object to store each value looped over
//     for(let i = 0; i < nums.length; i++) {
//         if(memo.hasOwnProperty(nums[i])) { // if this value is already in the memo object we will remove it as it is not the single number we are searching for
//             delete memo[nums[i]] // deleting the repeated key value pair from the memo object
//         } else {
//             memo[nums[i]] = 1 // else we will add the not repeating key to the memo object
//         }
//     }
//     return +Object.keys(memo)[0] //returns the key that is the single number not being repeated
// };

// Input --> pattern = "abba", s = "dog cat cat dog"
// Output -> true

// Input --> pattern = "abba", s = "dog cat cat fish"
// Output -> false

// Input --> pattern = "aaaa", s = "dog cat cat dog"
// Output -> false

// let val = wordPattern("abba", "dog cat cat fish")

// This is a bijection each individual key must be associated with a unique value, so if their is a key d its value canot be dog cat or fish
// KEYS       VALUES
// a    -->   dog    
// b    -->   cat
// c    -->   fish

// function wordPattern(pattern: string, s: string): boolean {
//     const splitStr = s.split(' ');
//     if (splitStr.length !== pattern.length) return false;
//     const memo: any = {};
  
//     for (let i = 0; i < pattern.length; i++) {
//       if (pattern[i] in memo) { 
//         if (memo[pattern[i]] !== splitStr[i]) { // if the value in the stored memo object is not equal to the value at the arr index immediately return false
//           return false;
//         }
//       } else if (Object.values(memo).indexOf(splitStr[i]) > -1) {
//         return false;
//       } else {
//         memo[pattern[i]] = splitStr[i];
//       }  
//     }
//     return true
// };


// "a->b" if a != b
// "a" if a == b

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2", "4->5", "7"]

// master plan 
// iterate through the array
// check if the step to the next index is only +1 if it is not plus one store it in the array as its self ["a"]


// function removeDuplicates(nums: number[]): number {
//     let length = nums.length
//     for(let i=0; i < length; i++) {
//         for(let j=i+1; j < length; j++){
//             if(nums[i] === nums[j]) {
//                 nums.splice(j, 1)
//                 removeDuplicates(nums)
//             }
//         }
//     }
//     return nums.length
// };

// let result = removeDuplicates([1,1,2,2,2,3])
// console.log(result);

// function removeDuplicates(nums: number[]): number {
//     let length = nums.length
//     let memo:any = {}
//     let count = 0
//     for(let i=0; i < length; i++) {
//         if(nums[count] in memo) {
//             nums.splice(count, 1)
//         } else {
//             memo[nums[count]] = nums[count]
//             count++
//         }
//     }
//     return nums.length
// };

//  narcissistic number is a positive number when squared by the amount of digits in the number and added together are equal to the original number
// PSEUDO CODE
// let str = value converted to a string COMPLTED
// let sum = 0 COMPLETED
// for (until we have iterrated through the entire valArr) {
//      sum += Math.pow(current iteration, length of valArr) COMPLETED
//  }
// if(value == sum) {
//  return true
//}
// return false    



// This could be improved by utilizing memoization
// IMPROVE WITH MEMOIZATION
// PSEUDO CODE FOR IMPROVISING
// let str = value.toString()
// let memo: any = {}
// let sum = 0
// for(let i=0; i < str.length; i++) {
//      if(current iteration in memo) {
//          sum += memo[current iteration]
//      } else {
//      sum += Math.pow(+str[i], str.length)
//      memo[current iteration] = sum
//      }
// }
// return sum === value
// MEMOIZATION FINISHED

// let res = narcissistic(1634)
// console.log(res)

// export function narcissistic(value: number): boolean {
//     let str = value.toString()
//     let memo: any = {}
//     let sum = 0
//     for(let i=0; i < str.length; i++) {
//         if(str[i] in memo) {
//             sum += memo[str[i]]
//         } else {
//             let val = Math.pow(+str[i], str.length)
//             sum += val 
//             memo[str[i]] = val
//         }
//     }
//     return sum === value
// }

// Input --> a = [121, 144, 19, 161, 19, 144, 19, 11] 
// Output --> b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// Compare array one to array two
// Ouput explained b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// the first number will always be a[0]
//
// INVALID ARRAYS EXAMPLes
// Input --> a = [121, 144, 19, 161, 19, 144, 19, 11]  
// Output --> b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

// a or b may be an empty array
// a or b may be null if null return false

//PSEUDO CODE
// export function comp(a1: number[] | null, a2: number[] | null): boolean {
//     if(a1 is null or a2 is null) return false
//     let memo = {} // memo object for checking values
//     for(loop through the a1 array and square each value and store it in a set or a memo) {
//          let pow = Math.pow(a1[i], 2) // calculating the power of arr[i]
//          memo[pow] = arr[i] // adding that power as the key and arr[i] as the value
//     }
//     for(loop through the a2 array) {
//          let val = a2[i] 
//          if(!(val in memo)) {
//              return false  
//          }
//      }
//     return true;
//   }

// let res =  comp([121,144,19,161,19,144,19,11], [121,14641,20736,361,25921,361,20736,361])
// console.log(res)

// export function comp(a1: number[] | null, a2: number[] | null): boolean {
//     if(a1 === null || a2 === null) return false
//     let memo: any = {}
//     for(let i=0; i < a1.length; i++) {
//         let pow = Math.pow(a1[i], 2)
//         memo[pow] = a1[i]
//     }
//     for(let j=0; j < a2.length; j++) {
//         let val:number = a2[j]
//         if(!(val in memo)) {
//             return false
//         }
//     }
//     return true;
// }


// Codewars Which are In?
// Input --> a1 = ["arp", "live", "strong"] a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// Output --> returns ["arp", "live", "strong"]
// Output --> if no substring from the a1 mathches a string in the a2 array return []

// PSEUDO CODE
// export class G964 {
//     public static inArray(a1: string[], a2: string[]): string[] {
//          let ans = []
//          for(iterate through a1) {}
//              for(iterate through a2) {}
//                  let index = a2[j].indexOf(a1[i])
//                  if(index > -1) {
//                      ans.push(a1[i])
//                  }
//     }
//      return ans
//   }

// let res = inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])
// console.log(res)

// function inArray(a1: string[], a2: string[]): string[] {
//     let ans = []
//     let memo:any = {}
//     for(let i=0; i < a1.length; i++) {
//         for(let j=0; j < a2.length; j++) {
//             let index = a2[j].indexOf(a1[i])
//             if(index > -1) {
//                 if(!(a1[i] in memo)) {
//                     ans.push(a1[i])
//                     memo[a1[i]] = a1[i]
//                 }
//             }
//         }
//     }
//     ans.sort()
//     return ans
// }

// CodeWars Sums of Parts
// Input --> ls = [0, 1, 3, 6, 10]
// Output --> [20, 20, 19, 16, 10, 0]
// This output is determined by this formula at 0 add itself and everything to the right together so 0 + 1 + 3 + 6 + 10.
// At 1 we would add itself and everything to the right together so 1 + 3 + 6 + 10.

// PSEUDO CODE
// export function partsSums(ls: number[]): number[] {
//      let ans = []
//      while(length of array is greather than 0) {
//          let sum = calculate value in array using javascript reduce method
//          ls.shift()
//      }   
//      if needed here we will do ans.push(0)
//      return ans
// }

// let val = partsSums([0, 1, 3, 6, 10])
// console.log(val);

// export function partsSums(ls: number[]): number[] {
//     if(ls.length === 0) return [0] // if length ===0 do nothing and return [0]
//     let sum = ls.reduce((a, b) => a + b) // calculates the sum
//     let res  = [sum] // res holds the sum at each value starts with the original sum value
//     for (let i = 1; i <= ls.length; i++){
//         sum -= ls[i-1] // calculates the sum at each index by subtracting the previous index from the sum
//         res.push(sum) // pushes the result to the res array
//     }
//     return res
// }

// export const findOdd = (xs: number[]): number => {
//     let memo: any = {}
//     let ans = 0
//     for(let i=0; i < xs.length; i++) {
//       if(memo.hasOwnProperty(xs[i])) {
//         memo[xs[i]] += 1
//       } else {
//         memo[xs[i]] = 1
//       }
//     }
//     let oddNum = Object.values(memo).find((val)=> {
//         let v = val as number;
//         return v % 2 !== 0 ? v : 0
//     })
//     let keyToReturn = Object.keys(memo).find(key => memo[key] === oddNum);
//     if(keyToReturn) ans = +keyToReturn

//     return ans
// };
  
// let res = findOdd([-1,-1,-1,2,2,3,3,4,4,5,5])
// console.log(res);




// PSEUDO CODE
// function ()
//  let s1 = num1.toString()
//  let s2 = num2.toString()
//  let len: number = s2.length
// let ans: string[] = []
//  if (s1.length > s2.length) len = s1.length
//  for(let i=0; i < len; i++) {
//     let sum = +s1[i] + +s1[2]
//    ans.push(string(sum)) 
//}
//  let stringAns = ans.join("")
//  return +stringAns
//

// let res = add(99, 233)
// console.log(res);

// export function add(num1: number, num2: number): number {
//     let s1 = num1.toString()
//     let s2 = num2.toString()
//     let len: number = s2.length
//     let arr: string[] = []
//     if(s1.length > s2.length) len = s1.length

//     for (let i = 0; i < len; i++) {
//         if(s1[i] === undefined) {
//             arr.push(s2[i])
//             break
//         } 
//         if(s2[i] === undefined)   {
//             arr.push(s1[i])
//             break
//         }
//         let sum = +s1[i] + +s2[i]
//         arr.push(sum.toString())
//     }
//     let stringAns = arr.join("")
//     return +stringAns
// }

// const ans = accum('abcd')
// console.log(ans)

// export function accum(s: string): string {
//     const strArr: string[] =[]
    
//     for(let i=0; i < s.length; i++) {
//         strArr.push(s[i].toUpperCase())
//         if(i > 0) {
//             let count = 0
//             while(count < i) {
//                 strArr.push(s[i].toLowerCase())
//                 count++
//                 if(count + 1 === i + 1 && i + 1 !== s.length) strArr.push('-')
//             }
//         } else {strArr.push('-')}
//     }

//     return strArr.join('')
// }

const ans = order('th1s 4you 2is 3for');
console.log(ans)

export function order(words: string): string {
    const arr: string[] = words.split(' ')
    const ans = new Array(arr.length)
    for(let i=0; i < arr.length; i++) {
        for(let j=0; j < arr[i].length; j++) {
            if(!isNaN(+arr[i][j])) {
                const newIndex = +arr[i][j] - 1
                ans.splice(newIndex, 1, arr[i])
            }
        }
    }

    return ans.join(' ')
}