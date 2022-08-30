document.getElementById('btn_click').addEventListener('click', function(){
    

    
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

})


    
//    advice btn click*************

document.getElementById('advice_btn').addEventListener('click', function(){
    const adviceField = document.getElementById('advice_field');
    const adviceValue = adviceField.value;
    
    function medicalAdvice(result){
        if( result == "Underweight"){
            return `How to put on weight safely:

--Eating at least 5 portions of a variety of fruit and vegetables every day.

--Basing meals on potatoes, bread, rice, pasta or other starchy carbohydrates.

--Having some dairy or dairy alternatives (such as soya drinks and yoghurts).

--Eating some beans, pulses, fish, eggs, meat and other protein.`
           
        }
        else if(result == "Over Weight"){
            return `
            "Healthy eating plan and regular physical activity."
            
Dietary changes: Cutting calories. The key to weight loss is reducing how many calories you tain. 
Feeling full on less. Some foods — such as desserts, candies, fats and processed foods — containlot of calories for a small portion. 
Making healthier choices.
Restricting certain foods. 
Meal replacements`

        }
        else if(result == "Obesity class-I"){
            return `Healthy eating plan:
            
Choose minimally processed, whole foods-whole grains, vegetables, fruits, nuts, healthful sourcof protein (fish, poultry, beans), and plant oils. Limit sugared beverages, refined grainpotatoes, red and processed meats, and other highly processed foods, such as fast food.`

        }
        else if(result == "Obesity class-II"){
            return `Healthy eating plan and regular physical activity.

Dietary changes: Cutting calories. The key to weight loss is reducing how many calories you take in.
Feeling full on less. Some foods — such as desserts, candies, fats and processed foods — contain a lot of calories for a small portion.
Making healthier choices. 
Restricting certain foods.
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
            return `You can maintain Normal Weight with following some diets:

.Emphasizes fruits
.vegetables
.whole grains  
.fat-free or low-fat milk and milk products. 

--Includes a variety of protein foods such as 
.seafood
.lean meats and poultry
. eggs
.legumes (beans and peas)
.soy products, nuts, and seeds.
.low in added sugars, sodium, saturated fats, trans fats, and cholesterol.`
        }

    }

    const statusField = document.getElementById('status_field');
    const statusFieldValue = statusField.value; 


    const adviceResult = medicalAdvice(statusField.value);
    adviceField.value = adviceResult;


    // adviceField.value = "";
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
    const adviceValue = adviceField.value;
    const adviceValueString = parseFloat(adviceValue);
    adviceField.value = "";
    
})



