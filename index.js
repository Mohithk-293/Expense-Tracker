document.querySelector(".expense-btn").addEventListener("click",function()
{   
var foodAmt=travelAmt=groceriesAmt=entertainmentAmt=othersAmt=0;
creatingExpenseForm();  

document.querySelector("#expense-submit").addEventListener("click",function()
{
    
    var amount=document.querySelector("#amount").value;
    var option=document.querySelector("#option").value;
    var date=document.querySelector("#date").value;
    var note=document.querySelector("#note").value;
   
    if(amount==="")
    {

    }
    else
   {
    pressSubmit(amount,option,date,note);

    switch(option)
    {
        case "Food"         :foodAmt=eval(foodAmt)+eval(amount);
                             document.querySelector(".food").innerHTML=`Food- ${foodAmt} Rs. spent`
                             break;
        case "Travel"       :travelAmt=eval(travelAmt)+eval(amount);
                             document.querySelector(".travel").innerHTML=`Travel- ${travelAmt} Rs. spent` 
                             break; 
        case "Groceries"    :groceriesAmt=eval(groceriesAmt)+eval(amount);
                             document.querySelector(".groceries").innerHTML=`Groceries- ${groceriesAmt} Rs. spent`
                             break; 
        case "Entertainment":entertainmentAmt=eval(entertainmentAmt)+eval(amount);
                             document.querySelector(".entertainment").innerHTML=`Entertainment- ${entertainmentAmt} Rs. spent`
                             break; 
        default             :othersAmt=eval(othersAmt)+eval(amount);
                             document.querySelector(".others").innerHTML=`Others- ${othersAmt} Rs. spent`
                             break;                                 
    }
  }
    
});
});

function creatingExpenseForm()
{
    const createElm=document.createElement("div");
    createElm.classList.add("form");
    createElm.innerHTML=`
    <form>
    <p class="exp-form-inputs">Amount:<input class="expense-form" id="amount" type="number" placeholder="Enter amount"></input></p>
    <p class="exp-form-inputs">Category:
        <select  class="expense-form" id="option">
            <option value="">--Select a Category</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
         </select>
    <p class="exp-form-inputs">Date:<input class="expense-form" id="date" type="date"></input></p>
    <p class="exp-form-inputs">Note:<input class="expense-form" id="note" type="text" placeholder="What did you spend on?"></input></p>
    <p > <button type="button" id="expense-submit" class="submit">Submit</button></p>
    </form>
    `;
    document.querySelector(".expense").appendChild(createElm);
    
}


function pressSubmit(amount,option,date,note)
{
    var tableElm=document.createElement("tr");
    tableElm.innerHTML=`
    <td>${amount}</td>
    <td>${option}</td>
    <td>${date}</td>
    <td>${note}</td>
    `;
    document.querySelector("table").appendChild(tableElm);
}



document.querySelector(".Category-btn").addEventListener("click",function()
{
     createCategoryForm();
     addCategory();
    
});

function createCategoryForm()
{
    var categoryElm=document.createElement("div");
     categoryElm.classList.add("form");
     categoryElm.innerHTML=`
     <p class="category-name">Category Name :&nbsp; <input type="text" class="category-form" placeholder="Enter category name"></p>
     <button type="button" id="category-submit" class="submit">Submit</button>
     `;
     document.querySelector(".Category").appendChild(categoryElm);
}

function addCategory()
{
    document.querySelector("#category-submit").addEventListener("click",function()
    {
        var categoryItem=document.querySelector(".category-form").value;
        
        if(categoryItem==="")
        {
            
        }
        else
        {
            var newCategory=document.createElement("p");
            newCategory.innerHTML=`${categoryItem}- 0 Rs. spent`;
            document.querySelector(".Category-box").appendChild(newCategory);
        }
        
    });
}

