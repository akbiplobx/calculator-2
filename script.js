let resultField = $('#result')

function insertNumber(number){
  
    let existingNumber =  resultField.val()

    resultField.val(existingNumber + number)
}
function clearResult(){
    resultField.val('')
}
function calculate(){
   let result = eval(resultField.val()) 
   resultField.val(result)
}
function deleteNumbers(){
   let presentValue = resultField.val()
   if(presentValue!=''){
    resultField.val(resultField.val().slice(0, -1)) 
   }
}