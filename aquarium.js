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
            //This is to calculate the total surface area. I also want to send a message to "calcGlue" that glassWidth will be 26 //. 
			function calcTSA() {
                var glassWidthmm
				var glassCost
				var length = new Number(lengthObj.value);
                var width = new Number(widthObj.value);
                var height = new Number(heightObj.value);
				if (height => 25)
					make var glassWidthmm = 6
				else 
					make var glassWidthmm = 4
                return ((length*height*2)+(width*height*2)+(length*width*2) );
			
			}
			function calcGlue() { 
				var length = new Number(lengthObj.value);
                var width = new Number(widthObj.value);
                var height = new Number(heightObj.value);
				var glass
				if (height =>25) 
					make var glassCost = 
				return (((length*2)+(width*2)+(height*4))(*0.10))
			}
			
			function calcCost() {
				var TSA = calcTSA();
				var 
			}