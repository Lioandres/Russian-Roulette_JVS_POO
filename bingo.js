function getTable(){
    let spanOK
    let fisrthirdLine
    do{
        fisrthirdLine=[]
        let repetedNumber=false

     

            for (let i=1;i<=5;i++){
                do{
                repetedNumber=false
                number=Math.ceil((Math.random() * 90))          
                    for (let position=0;position<=(fisrthirdLine.length-1);position++){
                            if (number===fisrthirdLine[position]) repetedNumber=true     
                    }
                
                }
                while (repetedNumber===true)  
                fisrthirdLine.push(number)
            }
            console.log(fisrthirdLine)
        

            let span1=0
            let span2=0
            let span3=0
            let span4=0
            let span5=0
            let span6=0
            let span7=0
            let span8=0
            let span9=0


            for (let i=0;i<=5;i++){
                if (fisrthirdLine[i]>=1 && fisrthirdLine[i]<=9)  span1++ 
                if (fisrthirdLine[i]>=10 && fisrthirdLine[i]<=19) span2++
                if (fisrthirdLine[i]>=20 && fisrthirdLine[i]<=29) span3++
                if (fisrthirdLine[i]>=30 && fisrthirdLine[i]<=39) span4++
                if (fisrthirdLine[i]>=40 && fisrthirdLine[i]<=49) span5++
                if (fisrthirdLine[i]>=50 && fisrthirdLine[i]<=59) span6++
                if (fisrthirdLine[i]>=60 && fisrthirdLine[i]<=69) span7++
                if (fisrthirdLine[i]>=70 && fisrthirdLine[i]<=79) span8++
                if (fisrthirdLine[i]>=80 && fisrthirdLine[i]<=90) span9++  
            } 

        spanOK=(span1<=1 && span2<=1 && span3<=1 && span4<=1 && span5<=1 && span6<=1 && span7<=1 && span8<=1 &&span9<=1)
        console.log(spanOK)
    } 

    while(!spanOK)  


        let a=fisrthirdLine.sort(function(a,b){return a-b})
  
    //////////////////////////////////////////////////////////////////////////////
    spanOK=false
    let secondLine
    do{
        secondLine=[]
        let repetedNumber=false

     

            for (let i=1;i<=5;i++){
                do{
                repetedNumber=false
                number=Math.ceil((Math.random() * 90))          
                    for (let position=0;position<=(secondLine.length-1);position++){
                            if (number===secondLine[position] && number===fisrthirdLine[position]) repetedNumber=true  
                            for(element of fisrthirdLine) if (element===number)    repetedNumber=true 
                                
                            
                    }
                
                }
                while (repetedNumber===true)  
                secondLine.push(number)
            }
            console.log(secondLine)
        

            let span1=0
            let span2=0
            let span3=0
            let span4=0
            let span5=0
            let span6=0
            let span7=0
            let span8=0
            let span9=0


            for (let i=0;i<=5;i++){
                if (secondLine[i]>=1 && secondLine[i]<=9)  span1++ 
                if (secondLine[i]>=10 && secondLine[i]<=19) span2++
                if (secondLine[i]>=20 && secondLine[i]<=29) span3++
                if (secondLine[i]>=30 && secondLine[i]<=39) span4++
                if (secondLine[i]>=40 && secondLine[i]<=49) span5++
                if (secondLine[i]>=50 && secondLine[i]<=59) span6++
                if (secondLine[i]>=60 && secondLine[i]<=69) span7++
                if (secondLine[i]>=70 && secondLine[i]<=79) span8++
                if (secondLine[i]>=80 && secondLine[i]<=90) span9++  
            } 

        spanOK=(span1<=1 && span2<=1 && span3<=1 && span4<=1 && span5<=1 && span6<=1 && span7<=1 && span8<=1 &&span9<=1)
        console.log(spanOK)
    } 

    while(!spanOK)  


        let b=secondLine.sort(function(a,b){return a-b})
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
spanOK=false
let thirdLine
do{
    thirdLine=[]
    let repetedNumber=false

 

        for (let i=1;i<=5;i++){
            do{
            repetedNumber=false
            number=Math.ceil((Math.random() * 90))          
                for (let position=0;position<=(thirdLine.length-1);position++){
                        if (number===thirdLine[position] && number===secondLine[position] && number===fisrthirdLine[position]) repetedNumber=true     
                        for(element of fisrthirdLine) if (element===number)    repetedNumber=true 
                        for(element of secondLine) if (element===number)    repetedNumber=true 
                }
            
            }
            while (repetedNumber===true)  
            thirdLine.push(number)
        }
        console.log(thirdLine)
    

        let span1=0
        let span2=0
        let span3=0
        let span4=0
        let span5=0
        let span6=0
        let span7=0
        let span8=0
        let span9=0


        for (let i=0;i<=5;i++){
            if (thirdLine[i]>=1 && thirdLine[i]<=9)  span1++ 
            if (thirdLine[i]>=10 && thirdLine[i]<=19) span2++
            if (thirdLine[i]>=20 && thirdLine[i]<=29) span3++
            if (thirdLine[i]>=30 && thirdLine[i]<=39) span4++
            if (thirdLine[i]>=40 && thirdLine[i]<=49) span5++
            if (thirdLine[i]>=50 && thirdLine[i]<=59) span6++
            if (thirdLine[i]>=60 && thirdLine[i]<=69) span7++
            if (thirdLine[i]>=70 && thirdLine[i]<=79) span8++
            if (thirdLine[i]>=80 && thirdLine[i]<=90) span9++  
        } 

    spanOK=(span1<=1 && span2<=1 && span3<=1 && span4<=1 && span5<=1 && span6<=1 && span7<=1 && span8<=1 &&span9<=1)
    console.log(spanOK)
} 

while(!spanOK)  


    let c=thirdLine.sort(function(a,b){return a-b})


console.log(a)
console.log(b)
console.log(c)


let table1
let table2
let table3
let textBox=document.getElementById("table")    
        table1=document.createElement("h2")
        table1.innerHTML=a
        textBox.appendChild(table1)
        table2=document.createElement("h2")
        table2.innerHTML=b
        textBox.appendChild(table2)
        table3=document.createElement("h2")
        table3.innerHTML=c
        textBox.appendChild(table3)
}

function getANumber(){
    number=Math.ceil((Math.random() * 90))
    let randomNumber=document.getElementById("number")    
        x=document.createElement("h2")
        x.innerHTML=number
        randomNumber.appendChild()

}



    // let ordenedTable=fisrthirdLine.sort()




    
    //     let firstColumn=[]
    //     for (i=0;i<=14;i++){
    //         if (ordenedTable[i]>=1 && ordenedTable[i]<=9) firstColumn.push(ordenedTable[i])
    //     }
    //     for (j=0;j<=2;j++){
    //         if (!firstColumn[j]) firstColumn[j]=""
    //     }
                
            
        
            
       



    //     let firsthirdLine=[]
    //     for (let i=0;i<=4;i++){
    //         if (fisrthirdLine[i]>=1 && fisrthirdLine[i]<=9) firsthirdLine[0]=fisrthirdLine[i] 
    //         if (fisrthirdLine[i]>=10 && fisrthirdLine[i]<=19) firsthirdLine[1]=fisrthirdLine[i]
    //         if (fisrthirdLine[i]>=20 && fisrthirdLine[i]<=29) firsthirdLine[2]=fisrthirdLine[i]
    //         if (fisrthirdLine[i]>=30 && fisrthirdLine[i]<=39) firsthirdLine[3]=fisrthirdLine[i]
    //         if (fisrthirdLine[i]>=40 && fisrthirdLine[i]<=49) firsthirdLine[4]=fisrthirdLine[i]
    //         if (fisrthirdLine[i]>=50 && fisrthirdLine[i]<=59) firsthirdLine[5]=fisrthirdLine[i]
    //         if (fisrthirdLine[i]>=60 && fisrthirdLine[i]<=69) firsthirdLine[6]=fisrthirdLine[i]
    //         if (fisrthirdLine[i]>=70 && fisrthirdLine[i]<=79) firsthirdLine[7]=fisrthirdLine[i]
    //         if (fisrthirdLine[i]>=80 && fisrthirdLine[i]<=90) firsthirdLine[8]=fisrthirdLine[i]  
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





       
