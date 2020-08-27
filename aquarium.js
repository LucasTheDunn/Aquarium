      window.onload=function() {
                lengthObj = document.getElementById('txtLength');
                widthObj = document.getElementById('txt');
                heightObj = document.getElementById('txtHeight');
                document.getElementById('btnReset').onclick = resetInputs;
                document.getElementById('btnCalc').onclick = calcCost;
            }
            function resetInputs() {
                lengthObj.value = '';
                widthObj.value = '';
                heightObj.innerHTML = '';
            }
            function calcTSA() {
                var length = new Number(lengthObj.value);
                var width = new Number(widthObj.value);
                var height = new Number(heightObj.value);
                return ((length*height*2)+(width*height*2)+(length*width*2) );
			
			}
			function calcGlue() { 
				var length = new Number(lengthObj.value);
                var width = new Number(widthObj.value);
                var height = new Number(heightObj.value);
				return (((length*2)+(width*2)+(height*4)(*0.10)
			}
			
			function calcCost() {
				var TSA = calcTSA();
			}