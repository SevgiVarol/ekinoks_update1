const puppeteer = require('puppeteer');

var nav = require("./navigate");
var encoding = require("./encoding");
var encodingLow = require("./encodinglow");
var resolution = require("./resolution");
var camera = require("./camera");
var version = require("./version");
var alarm = require("./alarm");
var time = require("./time");

///////////FOR DOME CAMERAS///////////
var login = require("./login_dome");
var nav_dome = require("./nav_dome");
var cam = require("./camera_dome");
var version_dome = require("./version_dome");
var encodingH = require("./encodingHigh_dome");
var timeSet = require("./time_settings_dome");
var encodingLow_dome= require("./encodingLow_dome");
var resolution_dome = require("./resolation_dome");
/////////////////////////////////////

async function dene(page,i,res)
{
        var resolution1 = ["1920 x 1080 (Max:30fps)", "1280 x 720 (Max:30fps)", "1280 x 720 (Max:25fps)", "1920 x 1080 (Max:25fps)"];
        var fps1 = ["15", "10", "20", "12.5"];
        var resolution2 = ["640 x 368", "480 x 272", "320 x 180", "640 x 368"];
        var fps2 = ["5", "15", "20", "12.5"];
    if(res == 1)
    { 
            await nav.toResolution(page);
            await resolution.set_stream_mode(page, "Yayın1");
            await resolution.set_resolution1(page, resolution1[i]);  
            await resolution.set_fps1(page, fps1[i]);
            await resolution.apply(page);
            console.log("Testing Done " + (i+53));
    }
    else if (res == 2)
    {
       await nav.toResolution(page);
            await resolution.set_stream_mode(page, "Yayın1");
            await resolution.set_resolution2(page, resolution2[i]);    
            await resolution.set_fps2(page, fps2[i]);
            await resolution.apply(page);
            console.log("Testing Done " + (i+57));
        
    }
    
}

async function dene2(page,i,res)
{
        var resolution1 = ["1920 x 1080 (Max:30fps)", "1280 x 720 (Max:30fps)", "1280 x 720 (Max:25fps)", "1920 x 1080 (Max:25fps)"];
        var fps1 = ["15", "10", "20", "12.5"];
        var resolution2 = ["640 x 368", "480 x 272", "320 x 180", "640 x 368"];
        var fps2 = ["5", "15", "20", "12.5"];
    if(res == 1)
    { 
            await nav.toResolution(page);
            await resolution.set_stream_mode(page, "Yayın1");
            await resolution.set_resolution1(page, resolution1[i]);
            await resolution.set_fps1(page, fps1[i]);
            await resolution.apply(page);
            console.log("DOM CAM Testing Done " + (i+61));
    }
    else if (res == 2)
    {
       await nav.toResolution(page);
            await resolution.set_stream_mode(page, "Yayın1");
            await resolution.set_resolution2(page, resolution2[i]);
            await resolution.set_fps2(page, fps2[i]);
            await resolution.apply(page);
            console.log("DOM CAM Testing Done " + (i+65));
        
    }
    
}
 
 (function() {
	const LOGIN_USERNAME_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(1) > div > div > input';
	const LOGIN_PASSWORD_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(2) > div > div > input';
	const LOGIN_BUTTON_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(3) > div > div > button';
	
	module.exports.start_1 = async function(page, test_number) {
	
            switch(test_number){
                case "22": {console.log(" ");
                        console.log("Kontrol 22 STARTED");
                        await nav.toEncodingHigh(page);
                        await encoding.set_intraframe(page, "15");
			await encoding.set_bit_con(page, "cbr");
                        await encoding.set_codding_quality(page, "orta");
                        await encoding.set_bit_rate(page, "10");
                        await encoding.set_calc_method(page, "tan");
                        await encoding.apply(page);
                        console.log("OPTIONS SETTED ");
                    break;
                }
                case "23": {// Kontrol 23
                        console.log(" ");
                        console.log("Control 23 STARTED");
                        await nav.toEncodingLow(page);
                        await encodingLow.set_intraframe(page, "15");
			await encodingLow.set_bit_con(page, "cbr");
                        await encodingLow.set_codding_quality(page, "orta");
                        await encodingLow.set_bit_rate(page, "0.4");
                        await encodingLow.apply(page);
                        console.log("OPTIONS SETTED ");
                    break;
                }
                case "24": {//Kontrol 24
                        console.log(" ");
                        console.log("Control 24 STARTED");
                        await nav.toResolution(page);
                        await resolution.set_profile(page,"1080");
                        await resolution.set_stream_mode(page,"sadece yayın1");
                        await resolution.set_resolution1(page,"1920 x 1080 (max:30fps");
                        await resolution.set_fps1(page,"10");
                        await resolution.apply(page);
                        console.log("OPTIONS SETTED ");
                    break;
                }
                case "25": {//Kontrol 25
                        console.log(" ");
                        console.log("Control 25 STARTED");
                        await nav.toCamera(page);
                        await camera.set_ir_filter_mode(page,"gece");
                        await camera.set_ir_filter_transition(page,"oto");
                        await camera.ir_filter_apply(page);
                        console.log("OPTIONS SETTED ");
                    break;
                }
                case "28": {// TEST 28
                      console.log(" ");
                      console.log("Test 28 Started");
                      await nav.toEncodingHigh(page);
                      await encoding.test_intraframe(page);
                      await encoding.test_bit_con(page);
                      await encoding.test_codding_quality(page);
                      await encoding.test_bit_rate(page);
                      await encoding.test_calc_method(page);
                    break;
                }
                case "29": {// TEST 29
                      console.log(" ");
                      console.log("Test 29 Started");
                      await nav.toEncodingLow(page);
                      await encodingLow.test_intraframe(page);
                      await encodingLow.test_bit_con(page);
                      await encodingLow.test_bit_rate(page);
                      await encodingLow.test_codding_quality(page);
                    break;
                }
                case "30": { // TEST 30

                      console.log(" ");  
                      console.log("Test 30 Started");
                      await nav.toResolution(page);
                      await resolution.test_profile(page);
                      await resolution.test_stream_mode(page);  
                      await resolution.test_resolution1(page);
                      await resolution.test_fps1(page);
                      await resolution.test_resolution2(page);
                      await resolution.test_fps2(page);
                    break;
                }
                case "37": {//TEST 37
                      console.log(" ");  
                      console.log("Test 37 Started");
                      await nav.toVersion(page);
                      await version.test_application(page);
                      await version.test_firmware(page);
                    break;
                }
                case "38": {//TEST 38
                      console.log("");
                      console.log("Test 38 Started");
                      await nav.toAlarm(page);
                      await alarm.test_sei_selected(page);
                    break;
                }
                case "39": {//TEST 39
                      await nav.toAlarm(page); 
                      await alarm.set_sei_select(page , 1);
                      await alarm.set_motion_detector(page,"a");
                      await alarm.apply(page);
                    break;
                }
                case "40": {//TEST 40
                      console.log(" ");  
                      console.log("Test 40 Started");
                      await nav.toAlarm(page); 
                      await alarm.set_sei_select(page , 1);
                      await alarm.set_motion_detector(page,"k");
                      await alarm.apply(page);
                      //defne üzerinden izlenip doğrulanacak
                    break;
                }
                case "41": {//TEST 41
                      
                      console.log("");
                      console.log("Test 41 Started");
                      await nav.toCamera(page);
                      await camera.test_ir_filter_mode(page, "0");
                      await camera.test_ir_filter_transition(page, "0");
                    break;
                }
                case "46": {//TEST 46
                      console.log("");
                      console.log("Test 46 Started");
                      await nav.toTime(page);
                      await time.test_ntp_server1(page, "pool.ntp.org");
                    break;
                }
                case "53": {await dene(page,0,1);
                    break;
                }
                case "54": {await dene(page,1,1);
                    break;
                }
                case "55": {await dene(page,2,1);
                    break;
                }
                case "56": {await dene(page,3,1);
                    break;
                }
                case "57": {await dene(page,0,2);
                    break;
                }
                case "58": {await dene(page,1,2);
                    break;
                }
                case "59": {await dene(page,2,2);
                    break;
                }
                case "60": {await dene(page,3,2);
                    break;
                }
                default: console.log("Test "+test_number+" blunamadı lütfen tekrar deneyin..");
                
            }
                
	}
	
	module.exports.start_2 = async function(page, test_number) {
            switch(test_number){
                case "27": {//TEST27
                        console.log(" ");
                        console.log("Control Doc2-27 STARTED");
                        await nav_dome.toDomeEncodingHigh(page);
                        await encodingH.set_intraframe(page, "15");
                        await encodingH.set_bit_con(page, "cbr");
                        await encodingH.set_codding_quality(page, "Yüksek");
                        await encodingH.set_bit_rate(page, "1");
                        await encodingH.apply(page);
                        console.log("OPTIONS SETTED ");   
                    break;
                    
                }
                case "28": {//TEST28
                        console.log(" ");
                        console.log("Control Doc2-28 STARTED");
                        await nav_dome.toDomeEncodingLow(page);
                        await encodingLow_dome.set_intraframe(page, "15");
                        await encodingLow_dome.set_bit_con(page, "cbr");
                        await encodingLow_dome.set_codding_quality(page, "Yüksek");
                        await encodingLow_dome.set_bit_rate(page, "1");
                        await encodingLow_dome.apply(page);
                        console.log("OPTIONS SETTED ");
                    break;
                    
                }
               /* case "29": {//TEST29
                        console.log(" ");
                        console.log("Control Doc2-29 STARTED");
                        await nav_dome.toResolution(page);
                        await resolution_dome.set_stream_mode(page,"sadece yayın1");
                        await resolution_dome.set_resolution1(page,"1280 x 720 (max:30fps");
                        await resolution_dome.set_fps1(page,"10");
                        await resolution_dome.apply(page);
                        console.log("OPTIONS SETTED ");
                    break;
                    
                }*///statik kamera için
                case "33": {//TEST33
                        console.log(" ");
                        console.log("Test Doc2-33 STARTED");
                        await nav_dome.toDomeEncodingHigh(page);
                        await encodingH.test_intraframe_2(page);
                        await encodingH.test_bit_con_2(page);
                        await encodingH.test_codding_quality_2(page);
                        await encodingH.test_bit_rate_2(page);
                        await encodingH.test_calc_method_2(page);
                    break;
                    
                }
                case "34": {//TEST34
                        console.log(" ");
                        console.log("Test Doc2-34 STARTED");
                        await nav_dome.toDomeEncodingLow(page);
                        await encodingLow_dome.test_intraframe_2(page);
                        await encodingLow_dome.test_bit_con_2(page);
                        await encodingLow_dome.test_bit_rate_2(page);
                        await encodingLow_dome.test_codding_quality_2(page);
                    break;
                    
                }
               /* case "35": {//TEST35
                        console.log(" ");  
                        console.log("Test Doc2-35 STARTED");
                        await nav_dome.toResolution(page);
                        await resolution_dome.test_profile_2(page);
                        await resolution_dome.test_stream_mode_2(page);  
                        await resolution_dome.test_resolution1_2(page);
                        await resolution_dome.test_fps1_2(page);
                        await resolution_dome.test_resolution2_2(page);
                        await resolution_dome.test_fps2_2(page);
                    break;
                    
                } *////statik kamera için  
                case "43": { //TEST-43
                        console.log("");
                        console.log("Test Doc2-43 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.turn_to_task_value(page);
                        console.log("Test is completed!");
                    break;
                    
                }
                case "44": {//TEST-44
                        console.log("");
                        console.log("Test Doc2-44 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.turn_to_task_control(page);
                        console.log("Test is completed!");
                    break;
                    
                }    
                case "47": {//TEST-47
                        console.log("");
                        console.log("Test Doc2-47 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        for (let i = 0; i < 9; i++){
                        await cam.set_patrol_id(page,i+".");
                        await page.waitFor(2000);
                        }
                        console.log("Test is completed!");
                    break;
                    
                }
                case "56": {//TEST-56
                        console.log("");
                        console.log("Test Doc2-56 Started");
                        await nav_dome.toTimeSettings(page);
                        await page.waitFor(2000);
                        await timeSet.test_np1_value(page);
                        await timeSet.apply(page);
                        console.log("Test is completed!");
                    break;
                    
                }
                case "58": {//TEST-58
                        console.log("");
                        console.log("Test Doc2-58 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.ir_cut_open(page);
                        await cam.lighting_level(page,"manuel");
                        console.log("Please bring the camera to a position where you can see it");
        
                        var level = ["level0","level1","level2","level3","level4","level5","level6","AUTO"];
                        for (let i = 0; i < 8; i++){
                        await cam.lighting_level(page,level[i]);
                        await page.waitFor(3000);
                        }
                        console.log("Test is completed!");
                    break;
                    
                }
                case "61": {await dene2(page,0,1);
                    break;
                }
                case "62": {await dene2(page,1,1);
                    break;
                }
                case "63": {await dene2(page,2,1);
                    break;
                }
                case "64": {await dene2(page,3,1);
                    break;
                }
                case "65": {await dene2(page,0,2);
                    break;
                }
                case "66": {await dene2(page,1,2);
                    break;
                }
                case "67": {await dene2(page,2,2);
                    break;
                }
                case "68": {await dene2(page,3,2);
                    break;
                }
                case "137": {//TEST-137
                        console.log("");
                        console.log("Test Doc2-137 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.turn_left(page);
                        await page.waitFor(4000);
                        await cam.stop(page);
                        console.log("Test is completed!");
                    break;
                    
                }
                case "138": {//TEST-138
                        console.log("");
                        console.log("Test Doc2-138 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.turn_left(page);
                        await page.waitFor(4000);
                        await cam.turn_right(page);
                        console.log("Test is completed!");
                    break;
                    
                }
                case "139": {//TEST-139
                        console.log("");
                        console.log("Test Doc2-139 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.turn_right(page);
                        await page.waitFor(4000);
                        await cam.stop(page);
                        console.log("Test is completed!");
                    break;
                    
                }
                case "140": {//TEST-140
                        console.log("");
                        console.log("Test Doc2-140 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.turn_right(page);
                        await page.waitFor(4000);
                        await cam.turn_left(page);
                        console.log("Test is completed!");
                    break;
                    
                }
                case "143": {//TEST-143
                        console.log("");
                        console.log("Test Doc2-143 Started");
                        await nav_dome.toDomeCamera(page);
                        await page.waitFor(2000);
                        await cam.turn_right(page);
                        await nav_dome.toWatchCamera(page);
                        await page.waitFor(6000);
                        await nav_dome.toDomeVersion(page);
                        await version_dome.reload(page);
                        await page.waitFor(2000);
                        await nav_dome.toWatchCamera(page);    
                        console.log("Test is completed!");
                    break;
                    
                }
                case "191": {//TEST-191
                        console.log("");
                        await nav_dome.toDomeEncodingHigh(page);
                        await page.waitFor(2000);
                        await encodingH.traffic_forming(page);
                        console.log("Test Doc2-191 Started");
                        await encodingH.frequency(page,"50");
                        await encodingH.precision(page,"Agresif");
                        await encodingH.apply(page);
                        console.log("Test is completed!");
                        //grafik çizimleri yok
                    break;
                    
                }
                case "192": {//TEST-193
                        console.log("");
                        await nav_dome.toDomeEncodingHigh(page);
                        await page.waitFor(2000);
                        await encodingH.traffic_forming(page);
                        console.log("Test Doc2-193 Started");
                        await encodingH.frequency(page,"50");
                        await encodingH.precision(page,"Orta");
                        await encodingH.apply(page);
                        console.log("Test is completed!");
                        //grafik çizimleri yok
                    break;
                    
                }
                case "193": {//TEST-195
                        console.log("");
                        await nav_dome.toDomeEncodingHigh(page);
                        await page.waitFor(2000);
                        await encodingH.traffic_forming(page);
                        console.log("Test Doc2-195 Started");
                        await encodingH.frequency(page,"50");
                        await encodingH.precision(page,"Hafif");
                        await encodingH.apply(page);
                        console.log("Test is completed!");
                        //grafik çizimleri yok
                    break;
                    
                }
                default: await console.log("Test "+test_number+" blunamadı lütfen tekrar deneyin..");
 
                
            }
	
        
                
	}
	
	
}());

