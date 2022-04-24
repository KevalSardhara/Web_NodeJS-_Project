const submitbtn = document.getElementById("submitBTN");
const city_text = document.getElementById("city_text");


const getInfo = async (event) => {
    event.preventDefault();
    // alert("hello");
    if(city_text.value === ""){
        return;
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f94543d153a4e9b287f812de151af1bc`;
            // const responce = await
        }
        catch(e){
            
        }
    }
  
}
submitbtn.addEventListener("click", getInfo)