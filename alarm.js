  (function() {

        const SEI_ALARM_SELECTOR_UP = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(9) > div > div';
	const MOTION_DETECTOR_SELECTOR_UP= 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(10) > div > div';
        const SEI_ALARM_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(9) > div > div > label > input';
	const MOTION_DETECTOR_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(10) > div > div > select';    
	const MOTION_TRESHOLD_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(10) > div > div > select';  
        const APPLY_BUTTON_SELECTOR='body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(13) > div > div > button';
        const POPUP_BOTTON_SELECTOR='body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button';
        
	module.exports.test_sei_selected = async function(page) 
        {
                        const input = await page.$(SEI_ALARM_SELECTOR_UP);
                        const inpot = await input.$eval('.ng-valid' , node => node.checked);
                        console.log("SEI is SELECTED?");
                        console.log(inpot);
                        return(inpot);
                        console.log("");
                        if(inpot == 1)
                        {
                        const input1 = await page.$(MOTION_DETECTOR_SELECTOR_UP);
                        const inpot1 = await input1.$eval('.form-control' , node => node.value);
                        
                        if(inpot1 == 2)
                        {console.log("Motion Detector Value is TRUE");
                        }
                        else
                        {console.log("Motion Detector Value is FALSE");}
                            
                        }
            
	}
	
	module.exports.set_sei_select = async function(page , set)
        {   
            const input = await page.$(SEI_ALARM_SELECTOR_UP);
            const inpot = await input.$eval('.ng-valid' , node => node.checked);
            if (inpot != set)
            {    
            await page.click(SEI_ALARM_SELECTOR);
            }
            
                      
        }
         module.exports.set_motion_detector = async function(page , set)
        {
            await page.click(MOTION_DETECTOR_SELECTOR);
            await page.keyboard.type(set);
            await page.keyboard.down('Enter');
            
        }
        module.exports.set_motion_treshold = async function(page , set)
        {
            await page.click(MOTION_TRESHOLD_SELECTOR);
            for (let i = 0; i < 20; i++)
            await page.keyboard.down('Backspace');
            await page.keyboard.type(set);
        }
	module.exports.apply = async function(page)
        {
            await page.click(APPLY_BUTTON_SELECTOR);
            await page.waitFor(2000); 
            await page.click(POPUP_BOTTON_SELECTOR);
            
        }
	
    
}());


 

