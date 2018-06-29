

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
    
    var calculateTotal = function(type){
        var sum =0;
        data.allItems[type].forEach(function(cur){
            sum+=cur.value;
        });
        data.total[type]=sum;
        
    };
    
    var data = {
        allItems :{
            inc:[],
            exp:[]
        },
        total:{
            inc:0,
            exp:0
        },
        budget:0,
        percentage:-1
    };
    
    return { 
        addItem:function(type,des,val){
            var newItem,ID;
           
            //ID=[0,1,2,3] then nex id will be 4  //ID=[1,3,5,6,7] then id=8 //ID=lastId +1
            
            //create new ID
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
        calculatebudget :function(){
            
            //calculate total income and expenses
                calculateTotal('inc');
                calculateTotal('exp');
                
            //calculate total budget income - expenses
                data.budget = data.total.inc-data.total.exp;            
            
            
            if(data.total.inc>0){
                 //calculate the percentage of expenses exp/inc*100
                data.percentage  = Math.round((data.total.exp/data.total.inc)*100);
            }  else{
                data.percentage=-1;
            }
        },
        
        returnBudget:function(){
            return {
                budget:data.budget,
                totalInc:data.total.inc,
                totalExp:data.total.exp,
                percentage:data.percentage
                
            };
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
        expenseContainer:'.expenses__list',
        budgetLabel:'.budget__value',
        incomeBudget:'.budget__income--value',
        expensesBudget:'.budget__expenses--value',
        expensePercentage:'.budget__expenses--percentage',
        container:'.container'
        
    }
    return {
        getInput:function(){
            return{
            type : document.querySelector(DOMstrings.inputType).value,
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        
        addListItem:function(obj,type){
            var html,newHTML,element;
            //1.create html string with placeholders
            if(type==='inc'){
            
            element=DOMstrings.incomeContainer;        
                
            html='<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="iteexpensem__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type==='exp'){
                
            element = DOMstrings.expenseContainer;    
                
            html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //2.replace the placeholder text with actual data
            newHTML=html.replace('%id%',obj.id);
            newHTML=newHTML.replace("%description%",obj.description);
            newHTML=newHTML.replace('%value%',obj.value);
            
            
            //3.insert the HTML INTO DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
        },
        
        clearFields:function(){
            var fields,fieldsArray; 
            fields = document.querySelectorAll(DOMstrings.inputDescription+' , '+DOMstrings.inputValue);  
            fieldsArray=Array.prototype.slice.call(fields);
            
            fieldsArray.forEach(function(current,index,array){
                current.value= "";
            });
        },
        displayBudget:function(obj){
            document.querySelector(DOMstrings.budgetLabel).innerHTML=obj.budget;
            document.querySelector(DOMstrings.incomeBudget).innerHTML=obj.totalInc;
            document.querySelector(DOMstrings.expensesBudget).innerHTML=obj.totalExp;
            
            if(obj.percentage>0){
                  document.querySelector(DOMstrings.expensePercentage).innerHTML=obj.percentage+'%';    
            }
            else{
                  document.querySelector(DOMstrings.expensePercentage).innerHTML='---';    
            }
          
            
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
        
        
        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem)
    }
    
    var updateBudget  = function(){
        
        //        1.calculate the budget
                    budgetController.calculatebudget();
        
        //        2.return the budget
                    var budget=budgetController.returnBudget();
        
        //        3.display the budget        
                   // console.log(budget);
                    UIctrl.displayBudget(budget);
    }
    
    var ctrlAddItem=function(){
            var input,newItem;
        
        //        1.get the field input data
                input = UIctrl.getInput();
              //  console.log(input);
        
        if(input.value>0 &&  input.description && !isNaN(input.value)){
        
         //        2.add the item to budget controller
                newItem = budgetctrl.addItem(input.type,input.description,input.value);
        
      
        //        3.add the item to UI controller   
                UIctrl.addListItem(newItem,input.type);
    
        //          4.to clear the fields
                UIctrl.clearFields();

        
        //        5.calculate and update budget
                updateBudget();
           
           }
        
       
    }
    
    var ctrlDeleteItem=function(event){
        var itemId,splitId;
        itemId=event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemId){
            //inc-1
            splitId = itemId.split('-');
        }
        //console.log(itemId)
    }
    return {
        init:function(){
            console.log('started...');
            UIctrl.displayBudget({
                budget:0,
                totalInc:0,
                totalExp:0,
                percentage:-1
                
            });
            setupEventListeners();
        }
 }
   
   
    
})(budgetController,UIController);

controller.init();















