document.getElementById('btn_click').addEventListener('click', function(){
    
    // function feetToInch(feet){
    //     const inchValue = feet * 12 ;
    //     return inchValue
    // }
    // const feetReult = feetToInch();
    


    const feetInput = document.getElementById('feet_field');
    const feetValue = feetInput.value;
    const feetValueString = parseFloat(feetValue);
    const feetValueToInch = feetValueString * 12;
    
    
    const inchInput = document.getElementById('inch_field');
    const inchValue = inchInput.value;
    const inchValueString = parseFloat(inchValue);

    
    // addition
    const addition = feetValueToInch + inchValueString;
    const additionToMeter = addition * 0.0254;
    const additionToMeterMultiplication = (additionToMeter * additionToMeter);
    
    

    const kgInput = document.getElementById('kg_field');
    const kgValue = kgInput.value;
    const kgValueString = parseFloat(kgValue);
   
   
    // divide
    const divide = kgValueString / additionToMeterMultiplication;
    const divideFixed = divide.toFixed(2)
    
    
    const reultField = document.getElementById('result_field');
    const resultValue = reultField.value;
    const resultValueString = parseFloat(resultValue);

    // set the result
    reultField.value = divideFixed;


    // status of BMI
    const statusField = document.getElementById('status_field');
    const statusFieldValue = statusField.value;
    // statusField.value = resultFinal;
    const statusFieldValueToString = toString(statusFieldValue);
    

// function********************************

    function bmiStatus (result){
        if(result < 18.5){
            return "Underweight";
        }
        else if(result >18.5 &&  result <=24.9){
            return "Normal";
    
        }
        else if(result >=25 && result <=29.9){
            return "Over Weight";
    
        }
        else if(result >=30 && result <=34.9){
            return "Obesity class-I";
    
        }
        else if(result >=35 && result <=39.9){
            return "Obesity class-II";
    
        }
        else{
            return "Extreme Obesity"
        }
              
    }
    const resultFinal = bmiStatus(reultField.value);
    statusField.value = resultFinal;


    // function for medical advice************


    const adviceField = document.getElementById('advice_field');
    const adviceFieldValue = adviceField.value;
    const adviceFieldValueToString = toString(adviceFieldValue);

    function medicalAdvice(result){
        if( result == "Underweight"){
            return "Eat five to six smaller meals during the day rather than two or three large meals.Choose nutrient-rich foods. As part of an overall healthy diet, choose whole-grain breads, pastas and cereals; fruits and vegetables; dairy products; lean protein sources; and nuts and seeds."
           
        }
        else if(result == "Over Weight"){
            return `
            "Healthy eating plan and regular physical activity."
            Dietary changes: Cutting calories. The key to weight loss is reducing how many calories you take in. ...
            Feeling full on less. Some foods — such as desserts, candies, fats and processed foods — contain a lot of calories for a small portion. ...
            Making healthier choices. ...
            Restricting certain foods. ...
            Meal replacements`
        }
        else if(result == "Obesity class-I"){
            return `Healthy eating plan and regular physical activity.
Dietary changes: Cutting calories. The key to weight loss is reducing how many calories you take in. ...
            Feeling full on less. Some foods — such as desserts, candies, fats and processed foods — contain a lot of calories for a small portion. ...
            Making healthier choices. ...
            Restricting certain foods. ...
            Meal replacements`

        }
        else if(result == "Obesity class-II"){
            return `Healthy eating plan and regular physical activity.
Dietary changes: Cutting calories. The key to weight loss is reducing how many calories you take in. ...
            Feeling full on less. Some foods — such as desserts, candies, fats and processed foods — contain a lot of calories for a small portion. ...
            Making healthier choices. ...
            Restricting certain foods. ...
            Meal replacements`

        }
        else if(result == "Extreme Obesity"){
            return `Healthy eating plan and regular physical activity.
Dietary changes: Cutting calories. The key to weight loss is reducing how many calories you take in. ...
            Feeling full on less. Some foods — such as desserts, candies, fats and processed foods — contain a lot of calories for a small portion. ...
            Making healthier choices. ...
            Restricting certain foods. ...
            Meal replacements`

        }
        else{
            return "Good Health";
        }

    }
    const adviceResult = medicalAdvice(statusField.value);
    adviceField.value = adviceResult;
    
    // "Healthy eating plan and regular physical activity."
         
})

// clear all*****************
document.getElementById('clear_btn').addEventListener('click', function(){
    const feetInput = document.getElementById('feet_field');
    const feetValue = feetInput.value;
    const feetValueString = parseFloat(feetValue);
    const feetValueToInch = feetValueString * 12;
    feetInput.value = '';


    const inchInput = document.getElementById('inch_field');
    const inchValue = inchInput.value;
    const inchValueString = parseFloat(inchValue);
    inchInput.value = "";


    const kgInput = document.getElementById('kg_field');
    const kgValue = kgInput.value;
    const kgValueString = parseFloat(kgValue);
    kgInput.value = "";


    const reultField = document.getElementById('result_field');
    const resultValue = reultField.value;
    const resultValueString = parseFloat(resultValue);
    reultField.value = "";


    const statusField = document.getElementById('status_field');
    const statusFieldValue = statusField.value;
    const statusFieldValueToString = toString(statusFieldValue);
    statusField.value = "";
    
    const adviceField = document.getElementById('advice_field');
    const adviceFieldValue = adviceField.value;
    const adviceFieldValueToString = toString(adviceFieldValue);
    adviceField.value = "";
    
})



