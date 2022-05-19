//UC1 If else condition
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck = IS_ABSENT){
        console.log("Employee is absent");
    }
    else{
        console.log("Employee is present");
    }
}

//UC3 function
{
    const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

{
    //let empHrs = 0;
    function getWorkingHours(){
        switch(empCheck){
            case IS_PART_TIME :
                return PART_TIME_HOURS;
    
            case IS_FULL_TIME :
                return FULL_TIME_HOURS;
    
            default:
                return 0;
        }
    }
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Hours:" + empHrs + "Emp wage: " + empWage);
    }
}

//UC4 for loop
{
    let EMP_WAGE_PERHOUR = 20;
    const NUM_OF_WORKINGDAYS = 20;
    let totalEmpHrs = 0;
    for(let day = 0; day < NUM_OF_WORKINGDAYS; day++){
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let totalEmpWage = totalEmpHrs * EMP_WAGE_PERHOUR;
    console.log("Hours: " + totalEmpHrs + "Total emp wage is: " + totalEmpWage);
}

//UC5 while loop
{
    let EMP_WAGE_PERHOUR = 20;
    const NUM_OF_WORKINGDAYS = 20;
    const MAX_hOURS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays=0;
    while(totalEmpHrs <= MAX_hOURS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKINGDAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
    }
    totalEmpWage = EMP_WAGE_PERHOUR * totalEmpHrs
    console.log('UC5 Total emp wage is: ' + totalEmpWage);
}
