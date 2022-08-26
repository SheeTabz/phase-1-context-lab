/* Your Code Here */


function createEmployeeRecord(arr){
  const employee ={
   firstName : arr[0],
   familyName : arr[1],
   title : arr[2],
   payPerHour : arr[3],
   timeInEvents :[],
   timeOutEvents : [],
  }
   return employee
}
let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1])
console.log(testEmployee.firstName, testEmployee.familyName, testEmployee.title, testEmployee.payPerHour, testEmployee.firstName)


function createEmployeeRecords(arr){
    for (let item of arr){
        item = createEmployeeRecord(item)
        console.log(item)
    }
}
createEmployeeRecords([])
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

