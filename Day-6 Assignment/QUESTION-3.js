let name=prompt('Enter your name :','Anonymous')
document.getElementById('head').innerHTML=`Welcome ${name}`;
function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    document.getElementById('time').innerText=time; 
}
setInterval(clock,1000);
function changeMode(){
    let attr=document.getElementById('dark')
    attr.classList.toggle('dark')
}