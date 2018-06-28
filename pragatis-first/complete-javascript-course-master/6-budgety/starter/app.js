/*
//for the calculation part of the budget app
var budgetController =(function(){
    
    var x=23;
    
    var add=function(a){
        return a+x;
    }
    
    return{
        publicTest:function(b){
            return add(b);
        }
    }
})();

//for the User Interface controlling
var  UIController=(function(){
    //code
})();

//for controlling both budgetController and UIController
var controller=(function(budgetctrl,UIctrl){
    //code
    
    var z= budgetctrlscription.publicTest(5);
    return {
        antherPublic : function(){
             console.log(z);
        }
    }
  
})(budgetController,UIController);
*/


//BUDGET CONTROLLER
var budgetController =(function(){
    
    //CODE
    var Income = function(id,description,value)
    {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    
    var Expense = function(id,description,value)
    {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    var data = {
        allItems :{
            inc:[],
            exp:[]
        },
        total:{
            inc:0,
            exp:0
        }
    };
    return { 
        addItem:function(type,des,val){
            var newItem,ID;
           
            //ID=[0,1,2,3] then nex id will be 4
            //ID=[1,3,5,6,7] then id=8
            //ID=lastId +1
            
            //create new ID
          //  console.log(data.allItems[type]);
            if(data.allItems[type].length >0){
                ID=(data.allItems[type][data.allItems[type].length-1].id)+1;

            }else{
            ID=0;       
            }
            
            //create new item
            if(type==='inc'){
                newItem=new Income(ID,des,val);    
            }
            else if(type==='exp'){
                newItem=new Expense(ID,des,val);    
            }
            
            //push the new item into new array
            data.allItems[type].push(newItem);
            
            return newItem;
        },
        testing:function(){
           
            console.log(data);
        }
        
    }; 
})();



//UI CONTROLLER
var  UIController=(function(){
    var DOMstrings={
        inputType:'.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn:'.add__btn',
        incomeContainer:'.income__list',
        expenseContainer:'.expenses__list'
    }
    return {
        getInput:function(){
            return{
            type : document.querySelector(DOMstrings.inputType).value,
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value,
            };
        },
        
        addListItem:function(obj,type){
            var html,newHTML,element;
            //1.create html string with placeholders
            if(type==='inc'){
            
            element=DOMstrings.incomeContainer;        
                
            html='<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type==='exp'){
                
            element = DOMstrings.expenseContainer;    
                
            html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%/div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //2.replace the placeholder text with actual data
            newHTML=html.replace('%id%',obj.id);
            newHTML=newHTML.replace("%description%",obj.description);
            newHTML=newHTML.replace('%value%',obj.value);
            
            
            //3.insert the HTML INTO DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
        },
        clearFields:function(){
            var fiels,fieldsArray; field = document.querySelectorAll(DOMstrings.inputDescription+' , '+DOMstrings.inputValue);  
            fieldsArray=Array.prototype.slice.call(fields);
            
            fieldsArray.forEach(function(current,index,array){
                current.value= "";
            });
        },
        getDOMstrings:function(){
            return DOMstrings;
        }
    }
    
})();




//GLOBAL APP CONTROLLER
var controller=(function(budgetctrl,UIctrl){
    
    
    var setupEventListeners = function(){
        
         var DOM=UIctrl.getDOMstrings();
            //ADD EVENT LISTENERS.. 
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
    
        document.addEventListener('keypress',function(event){
            if(event.keyCode===13||event.which===13){
                ctrlAddItem();
            }
         });
    }
    
    var ctrlAddItem=function(){
            var input,newItem;
        
        //        1.get the field input data
        
                input = UIctrl.getInput();
              //  console.log(input);
        
        //        2.add the item to budget controller
        
                newItem = budgetctrl.addItem(input.type,input.description,input.value);
        
        //        3.add the item to UI controller   
                    UIctrl.addListItem(newItem,input.type);
        //to clear the fields
            UIctrl.clearFields();

        //        4.calculate the budgetctrl
        
        //        5.display the budget
        
       
    }
    return {
        init:function(){
            console.log('started...');
            setupEventListeners();
        }
 }
   
   
    
})(budgetController,UIController);

controller.init();















