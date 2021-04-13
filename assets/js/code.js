/*5 Вывести все простые числа от 3 до 1000 включительно. Задача на цикл for в цикле for*/ 

let steps5 = 1000;

let delitel;
/*let i5=3;*/


for ( let i5=3; i5<=steps5; i5++) {
    
    
        for ( delitel=2; delitel<=i5; delitel++)  {

            if (i5%delitel==0 && delitel<i5) {

                break; 
            }
            
            /* после break delitel==3 и далее добавляется еще 1, и опять идет цикл фор внутренний где 
            delitel==4 и это больше , чем i5==3  */
            
            if (i5==delitel) console.log (`Задача №5. Простое число от 3 до 1000 ${i5}`);
    
             

        }
    
       
    

}



/*
while (i5<=steps5) {
    for ( delitel=2; delitel<=i5; delitel++)  {

        if (i5%delitel==0 && delitel<i5) {

            break; 
        }


        if (i5==delitel) console.log (`Задача №5. Простое число от 3 до 1000 ${i5}`);


    }
    
    
    i5++;
    
}
*/











/*1. Выведите числа  от 0до 100 (включительно) */

let steps = 100;

for ( let i=0; i<=steps; i++) {
    
        console.log (`Зачада 1. Число ${i}`)
    
}



/*2. Выведите числа  от 21 до 57 (включительно) */


let steps_2 = 57;

for ( let i_2=21; i_2 <=steps_2; i_2++) {
    
        console.log (`Задача №2. Число ${i_2}`)
    
}


/*3 Выведите четные числа в промежутке от  0 до 100 (включительно)*/ 

let steps_3 = 100;

for ( let i_3=0; i_3 <=steps_3; i_3++) {
    

    if (i_3%2==0){

        console.log (`Задача №3. Число ${i_3}`)
    }    
    
}

/*4 C помощью цикла найдите сумму чисел от 1 до 100 (включительно)*/ 

let steps4 = 100;
let sum = 0;

for ( let i4=1; i4 <=steps4; i4++) {
    

    
    sum= sum+i4;
    
}

console.log (`Задача №4. Сумма чисел от 1 до 100. ${sum}`);


