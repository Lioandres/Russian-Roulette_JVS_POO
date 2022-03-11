function getTable(){
let spanOK
    let bingoNumbers
    do{
        bingoNumbers=[]
        let repetedNumber=false

     

            for (let i=1;i<=15;i++){
                do{
                repetedNumber=false
                number=Math.ceil((Math.random() * 90))          
                    for (let position=0;position<bingoNumbers.length;position++){
                            if (number===bingoNumbers[position]) repetedNumber=true     
                    }
                
                }
                while (repetedNumber===true)  
                bingoNumbers.push(number)
            }
            console.log(bingoNumbers)
        

            let span1=0
            let span2=0
            let span3=0
            let span4=0
            let span5=0
            let span6=0
            let span7=0
            let span8=0
            let span9=0


            for (let i=0;i<=15;i++){
                if (bingoNumbers[i]>=1 && bingoNumbers[i]<=9)  span1++ 
                if (bingoNumbers[i]>=10 && bingoNumbers[i]<=19) span2++
                if (bingoNumbers[i]>=20 && bingoNumbers[i]<=29) span3++
                if (bingoNumbers[i]>=30 && bingoNumbers[i]<=39) span4++
                if (bingoNumbers[i]>=40 && bingoNumbers[i]<=49) span5++
                if (bingoNumbers[i]>=50 && bingoNumbers[i]<=59) span6++
                if (bingoNumbers[i]>=60 && bingoNumbers[i]<=69) span7++
                if (bingoNumbers[i]>=70 && bingoNumbers[i]<=79) span8++
                if (bingoNumbers[i]>=80 && bingoNumbers[i]<=90) span9++  
            } 

        spanOK=(span1<=3 && span2<=3 && span3<=3 && span4<=3 && span5<=3 && span6<=3 && span7<=3 && span8<=3 &&span9<=3)
        console.log(spanOK)
    } 

    while(!spanOK)  


        let bingoNumbersOrdered=bingoNumbers.sort(function(a,b){return a-b})

    let firstLine=[]
    let secondLine=[]
    let thirdLine=[]

    
    for (let i=0;i<=15;i+=3){
                if (bingoNumbersOrdered[i]>=1 &&  bingoNumbersOrdered[i]<=9)  firstLine[0]=bingoNumbersOrdered[i] 
                if (!(bingoNumbersOrdered[i]>=1 &&  bingoNumbersOrdered[i]<=9))  firstLine[0]="" 
                if (bingoNumbersOrdered[i+1]>=1 &&  bingoNumbersOrdered[i+1]<=9)  secondLine[0]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=1 &&  bingoNumbersOrdered[i+1]<=9))  secondLine[0]=""
                if (bingoNumbersOrdered[i+2]>=1 &&  bingoNumbersOrdered[i+2]<=9)  thirdLine[0]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=1 &&  bingoNumbersOrdered[i+2]<=9))  thirdLine[0]=""
    

                if (bingoNumbersOrdered[i]>=10 &&  bingoNumbersOrdered[i]<=19)  firstLine[1]=bingoNumbersOrdered[i] 
                if (!(bingoNumbersOrdered[i]>=10 &&  bingoNumbersOrdered[i]<=19))  firstLine[1]==""
                if (bingoNumbersOrdered[i+1]>=10 &&  bingoNumbersOrdered[i+1]<=19)  secondLine[1]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=10 &&  bingoNumbersOrdered[i+1]<=19))  secondLine[1]=""
                if (bingoNumbersOrdered[i+2]>=10 &&  bingoNumbersOrdered[i+2]<=19)  thirdLine[1]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=10 &&  bingoNumbersOrdered[i+2]<=19))  thirdLine[1]=""

                if (bingoNumbersOrdered[i]>=20 &&  bingoNumbersOrdered[i]<=29)  firstLine[2]=bingoNumbersOrdered[i] 
                if (!(bingoNumbersOrdered[i]>=20 &&  bingoNumbersOrdered[i]<=29))  firstLine[2]=""
                if (bingoNumbersOrdered[i+1]>=20 &&  bingoNumbersOrdered[i+1]<=29)  secondLine[2]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=20 &&  bingoNumbersOrdered[i+1]<=29))  secondLine[2]=""
                if (bingoNumbersOrdered[i+2]>=20 &&  bingoNumbersOrdered[i+2]<=29)  thirdLine[2]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=20 &&  bingoNumbersOrdered[i+2]<=29))  thirdLine[2]=""

                if (bingoNumbersOrdered[i]>=30 &&  bingoNumbersOrdered[i]<=39)  firstLine[3]=bingoNumbersOrdered[i] 
                if (!(bingoNumbersOrdered[i]>=30 &&  bingoNumbersOrdered[i]<=39))  firstLine[3]=""
                if (bingoNumbersOrdered[i+1]>=30 &&  bingoNumbersOrdered[i+1]<=39)  secondLine[3]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=30 &&  bingoNumbersOrdered[i+1]<=39))  secondLine[3]=""
                if (bingoNumbersOrdered[i+2]>=30 &&  bingoNumbersOrdered[i+2]<=39)  thirdLine[3]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=30 &&  bingoNumbersOrdered[i+2]<=39))  thirdLine[3]=""

                if (bingoNumbersOrdered[i]>=40 &&  bingoNumbersOrdered[i]<=49)  firstLine[4]=bingoNumbersOrdered[i] 
                if (!(bingoNumbersOrdered[i]>=40 &&  bingoNumbersOrdered[i]<=49))  firstLine[4]=""
                if (bingoNumbersOrdered[i+1]>=40 &&  bingoNumbersOrdered[i+1]<=49)  secondLine[4]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=40 &&  bingoNumbersOrdered[i+1]<=49))  secondLine[4]=""
                if (bingoNumbersOrdered[i+2]>=40 &&  bingoNumbersOrdered[i+2]<=49)  thirdLine[4]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=40 &&  bingoNumbersOrdered[i+2]<=49))  thirdLine[4]=""

                if (bingoNumbersOrdered[i]>=50 &&  bingoNumbersOrdered[i]<=59)  firstLine[5]=bingoNumbersOrdered[i]
                if (!(bingoNumbersOrdered[i]>=50 &&  bingoNumbersOrdered[i]<=59))  firstLine[5]=""
                if (bingoNumbersOrdered[i+1]>=50 &&  bingoNumbersOrdered[i+1]<=59)  secondLine[5]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=50 &&  bingoNumbersOrdered[i+1]<=59))  secondLine[5]=""
                if (bingoNumbersOrdered[i+2]>=50 &&  bingoNumbersOrdered[i+2]<=59)  thirdLine[5]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=50 &&  bingoNumbersOrdered[i+2]<=59))  thirdLine[5]=""

                if (bingoNumbersOrdered[i]>=60 &&  bingoNumbersOrdered[i]<=69)  firstLine[6]=bingoNumbersOrdered[i] 
                if (!(bingoNumbersOrdered[i]>=60 &&  bingoNumbersOrdered[i]<=69))  firstLine[6]=""
                if (bingoNumbersOrdered[i+1]>=60 &&  bingoNumbersOrdered[i+1]<=69)  secondLine[6]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=60 &&  bingoNumbersOrdered[i+1]<=69))  secondLine[6]=""
                if (bingoNumbersOrdered[i+2]>=60 &&  bingoNumbersOrdered[i+2]<=69)  thirdLine[6]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=60 &&  bingoNumbersOrdered[i+2]<=69))  thirdLine[6]=""

                if (bingoNumbersOrdered[i]>=70 &&  bingoNumbersOrdered[i]<=79)  firstLine[7]=bingoNumbersOrdered[i]
                if (!(bingoNumbersOrdered[i]>=70 &&  bingoNumbersOrdered[i]<=79))  firstLine[7]=""
                if (bingoNumbersOrdered[i+1]>=70 &&  bingoNumbersOrdered[i+1]<=79)  secondLine[7]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=70 &&  bingoNumbersOrdered[i+1]<=79))  secondLine[7]=""
                if (bingoNumbersOrdered[i+2]>=70 &&  bingoNumbersOrdered[i+2]<=79)  thirdLine[7]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=70 &&  bingoNumbersOrdered[i+2]<=79))  thirdLine[7]=""

                if (bingoNumbersOrdered[i]>=80 &&  bingoNumbersOrdered[i]<=90)  firstLine[8]=bingoNumbersOrdered[i]
                if (!(bingoNumbersOrdered[i]>=80 &&  bingoNumbersOrdered[i]<=90))  firstLine[8]="" 
                if (bingoNumbersOrdered[i+1]>=80 &&  bingoNumbersOrdered[i+1]<=90)  secondLine[8]=bingoNumbersOrdered[i+1]
                if (!(bingoNumbersOrdered[i+1]>=80 &&  bingoNumbersOrdered[i+1]<=90))  secondLine[8]=""
                if (bingoNumbersOrdered[i+2]>=80 &&  bingoNumbersOrdered[i+2]<=90)  thirdLine[8]=bingoNumbersOrdered[i+2]
                if (!(bingoNumbersOrdered[i+2]>=80 &&  bingoNumbersOrdered[i+2]<=90))  thirdLine[8]=""
    }

  
console.log(firstLine)
console.log(secondLine)
console.log(thirdLine)
  
   
let table
let table1
let table2
let table3

let textBox=document.getElementById("table")    
        table=document.createElement("h2")
        table.innerHTML=bingoNumbersOrdered
        textBox.appendChild(table)
        table1=document.createElement("h2")
        table1.innerHTML=firstLine
        textBox.appendChild(table1)
        table2=document.createElement("h2")
        table2.innerHTML=secondLine
        textBox.appendChild(table2)
        table3=document.createElement("h2")
        table3.innerHTML=thirdLine
        textBox.appendChild(table3)
        
}


function getANumber(){
    number=Math.ceil((Math.random() * 90))
    let randomNumber=document.getElementById("number")    
        x=document.createElement("h2")
        x.innerHTML=number
        randomNumber.appendChild()

}



    // let ordenedTable=bingoNumbers.sort()




    
    //     let firstColumn=[]
    //     for (i=0;i<=14;i++){
    //         if (ordenedTable[i]>=1 && ordenedTable[i]<=9) firstColumn.push(ordenedTable[i])
    //     }
    //     for (j=0;j<=2;j++){
    //         if (!firstColumn[j]) firstColumn[j]=""
    //     }
                
            
        
            
       



    //     let firsthirdLine=[]
    //     for (let i=0;i<=4;i++){
    //         if (bingoNumbers[i]>=1 && bingoNumbers[i]<=9) firsthirdLine[0]=bingoNumbers[i] 
    //         if (bingoNumbers[i]>=10 && bingoNumbers[i]<=19) firsthirdLine[1]=bingoNumbers[i]
    //         if (bingoNumbers[i]>=20 && bingoNumbers[i]<=29) firsthirdLine[2]=bingoNumbers[i]
    //         if (bingoNumbers[i]>=30 && bingoNumbers[i]<=39) firsthirdLine[3]=bingoNumbers[i]
    //         if (bingoNumbers[i]>=40 && bingoNumbers[i]<=49) firsthirdLine[4]=bingoNumbers[i]
    //         if (bingoNumbers[i]>=50 && bingoNumbers[i]<=59) firsthirdLine[5]=bingoNumbers[i]
    //         if (bingoNumbers[i]>=60 && bingoNumbers[i]<=69) firsthirdLine[6]=bingoNumbers[i]
    //         if (bingoNumbers[i]>=70 && bingoNumbers[i]<=79) firsthirdLine[7]=bingoNumbers[i]
    //         if (bingoNumbers[i]>=80 && bingoNumbers[i]<=90) firsthirdLine[8]=bingoNumbers[i]  
    //     }

    //     console.log(firsthirdLine)
    //     let firsthirdLineContent="|"
    //     for(let k=0;k<=8;k++){
    //         if (firsthirdLine[k]) firsthirdLineContent=`${firsthirdLineContent}${firsthirdLine[k]}|<br>`
    //         if (!firsthirdLine[k]) firsthirdLineContent=`${firsthirdLineContent}   |<br>`
    //     }
    //     console.log(firsthirdLineContent)
    //     let table
    //     let textBox=document.getElementById("table")    
    //         table=document.createElement("h2")
    //         table.innerHTML=firsthirdLineContent
    //         textBox.appendChild(table)
    
    
    // for(j=1;j<=10;j++){
    //     table=document.createElement("span")
    //         table.textContent=firsthirdLineContent
    //         textBox.appendChild(table)



    // }
        
















function checkNumber(){

}


function checkLine(){

}

function checkBingo(){

}








// function getTable(){

// }



// function checkNumber(){

// }


// function checkLine(){

// }

// function checkBingo(){
    
// }





       
