        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('#convert').disabled= true;
                document.querySelector('#money').onkeyup = function(){
                    if(document.querySelector('#money').value.length >0)
                        document.querySelector('#convert').disabled= false;
                    else
                        document.querySelector('#convert').disabled = true;
                    };
        document.querySelector('#ratio').innerHTML = 17000;
        document.querySelector('#fmoney').onchange = function()
        {
            document.querySelector('#ratio').innerHTML = this.value;
        };
        document.querySelector('#convert').onclick= tinhtong; 
        });
        function tinhtong() {
            let a = document.querySelector('#fmoney').value;
            let b = document.querySelector('#money').value;
            document.querySelector('#result').innerHTML = a*b;
        }