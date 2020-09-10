      window.onload=function() {
                lengthObj = document.getElementById('txtLength');
                widthObj = document.getElementById('txtWidth');
                heightObj = document.getElementById('txtHeight');
				costObj = document.getElementById('tdCost');
                document.getElementById('btnReset').onclick = resetInputs;
                document.getElementById('btnCalcCost').onclick = calcCost;
            }
			
            function resetInputs() {
                lengthObj.value = '';
                widthObj.value = '';
				heightObj.value = '';
                costObj.innerHTML = '';
            }
            //This is to calculate the total surface area. I also want to send a message to "calcGlue" that glassWidth will be 6 if the height is 25 or more, and the width will be 4 if the height is less than 25 //. 
			
			function calcTSA() {
				var length = new Number(lengthObj.value);
                var width = new Number(widthObj.value);
                var height = new Number(heightObj.value);
				var cost;
				if (height>25){
					cost = 0.1;
				}else{
					cost = 0.06;
				}

                costObj.innerHTML = ((length*height*2)+(width*height*2)+(length*width*2)*cost);
			
			}
			
			
			function calcGlue() { 
				var length = new Number(lengthObj.value);
                var width = new Number(widthObj.value);
                var height = new Number(heightObj.value);
				var glue = 0.1;

				return (((length*2)+(width*2)+(height*4))*glue);
			}
			/*SPC is */
			function calcTime() {
				var areaCost = (60/6000);
			}
			
			
			
			
			/*In here, we must have many variables. We need the TSA, the amount of 
			time it	takes to make the aquarium, how much the glue costs, and GST.*/
			function calcCost() {
				var TSA = calcTSA();
				var Time = calcTime();
				var glue = calcGlue();
				return ((TSA*Time*Glue)*1.1)
			}
				
				
				
			