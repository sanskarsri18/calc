let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
let back = document.getElementsByClassName('bi bi-backspace-fill');
back='';


for(item of buttons){
    item. addEventListener('click',(e)=> {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
    if(buttonText == 'X')
    {
        buttonText = '*';
        screenValue+= buttonText;
        screen.value+= screenValue;
    }
    else
    if(buttonText=='÷')
    {
        buttonText = '/';
        screenValue+= buttonText;
        screen.value+= screenValue;
        }
    else
    if(buttonText == 'Clear')
    {
        
        screenValue= '';
        screen.value = screenValue;
    }
    else
    if(buttonText == '=')
    {
        screen.value = eval(screen.value);
        // screen.value='';
    }
    else

    if(buttonText == '1/x')
    {
        screen.value = 1/screen.value;
        
    }
    else

    if(buttonText == 'Rand')
    {
        screen.value = Math.random();
        // screen.value = eval(screenValue);
    }
    
    else


    if(buttonText=='exp')
    {
        screen.value = Math.exp(screen.value);
    }
    else
    if(buttonText=='ln')
    {
        screen.value = Math.log(screen.value);
    }
    else
    if(buttonText=='sin')
    {
        screen.value = Math.sin(screen.value);
    }
    else
    if(buttonText=='cos')
    {
        screen.value = Math.cos(screen.value);
    }
    else
    if(buttonText=='log')
    {
        screen.value = Math.log10(screen.value,3);
    }
    else
    if(buttonText=='∛')
    {
        screen.value = Math.pow(screen.value,1/3);
    }
    else
    if(buttonText=='x!')
    {
        let i=1;
        let a=screen.value;
        while(a>=1)
        {
            i = i*a;
            a--;
        }
        screen.value =i;
    }
    else
    if(buttonText=='tan')
    {
        screen.value = Math.tan(screen.value);
    }
    // else
    // if(buttonText == 'del')
    // {
    //     let l = screen.value;
    // screen.value = l.substr(0,l.length-1);
    // }
    // else
    // if(document.getElementById('root'))
    // {
    //     screen.value= Math.pow(screen.value,(1/2));
    // }
    
    else
    {
        screen.value+= buttonText;
        // screen.value = screenValue;
    }
    
    

})
   function pi()
    {
        screen.value = Math.PI;
    }
    function root ()
    {
        screen.value = Math.pow(screen.value,(1/2));
    }

    function backspace()
    {
        let l = screen.value;
        screen.value = l.substr(0,l.length-1);
    }

    function cube(){
      
        screen.value = Math.pow(screen.value,3);
    
    }

    function square(){
        screen.value = Math.pow(screen.value,2);
    }
    // function power(){
    //     buttonText = '^';
    //     let s='^';
    //     screenValue+= buttonText;
    //     screen.value+= screenValue;
    // }
}


