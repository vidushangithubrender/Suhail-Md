const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://freefirevidushan:XfMWagYG9AFY8Cg5@cluster0.khbdb9q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY ×͜× VÌÐÚ§HÄñ ×͜×" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789178809";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f022bb748f55c2dc06c17.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_14_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMys0M216RVpTTExwbWdNc0wwWWt2MkVFRXdRdDgvQUNYZUxZT0ZENG9tST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGhtNXZQUVZRd3E0SHpTMnN3LTVxd1wiLFxuICBcInBob25lSWRcIjogXCJiNzliYTE1Ni1iMDFhLTRhN2ItYTEyOC1lYzBkNWI3ZjE2NDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgMTEzLFxuICAgICAgMzEsXG4gICAgICAyMDcsXG4gICAgICAyMDMsXG4gICAgICAyNSxcbiAgICAgIDExNyxcbiAgICAgIDE2NixcbiAgICAgIDM3LFxuICAgICAgMTU5LFxuICAgICAgMTEzLFxuICAgICAgNjksXG4gICAgICAxNjIsXG4gICAgICA4MixcbiAgICAgIDIyMyxcbiAgICAgIDI0NixcbiAgICAgIDgyLFxuICAgICAgMTA4LFxuICAgICAgMSxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDcsXG4gICAgICAxMjgsXG4gICAgICA3MixcbiAgICAgIDU5LFxuICAgICAgMTU1LFxuICAgICAgMTEwLFxuICAgICAgMTcwLFxuICAgICAgNTIsXG4gICAgICA3MixcbiAgICAgIDEzMixcbiAgICAgIDQ0LFxuICAgICAgMjE5LFxuICAgICAgMjAxLFxuICAgICAgMjQyLFxuICAgICAgMzQsXG4gICAgICAyMDYsXG4gICAgICA2NyxcbiAgICAgIDIwNCxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEVzRGS1NIUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODkxNzg4MDk6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU2MTMxMzYzODMyMDExOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096cnVyZ0VFTmFsMDdVR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTlZaL1JtNnU0QTNESlByL1ZubURTVVMwSVRjY2hSb2JrQ1hOWVp2eU5UMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQYVhtMUovWTRpTmoxTkwxMWNwMXhTc2I3L2p2VHZ4V0QwSjZicERhblgzdnFYUUs2Y1dFU0RzNVV3c3d0OEJjRjFCQ3ZkTHNjSEt5NllNL29aN0dDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzY05nRnRJQjBCVFZ6TVVaTnRVZmVxTjlDZnVWaGErcE8rdTdUV25ETk55YzlEYTY1UUtiSUNCU1JmeFNDSmE3ZGx1QUt6V2JTRW9Ka2ZWMmFrSGdEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTE3ODgwOToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMjY0OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDZmZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNmZi5qc29uIjogIntcImtleURhdGFcIjpcIk1HMTIzTC9HRVQxV3hoYkIyUTROYXpTUGJhMG9WSWp1bWhSaE9hQnMvaDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE5MjE0NjQxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ×͜× VÌÐÚ§HÄñ ×͜× 』```", //*『Add this bot to any group as you like"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "×͜× VÌÐÚ§HÄñ ×͜×",
  ownername:process.env.OWNER_NAME|| "×͜× VÌÐÚ§HÄñ ×͜×",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "×͜× VÌÐÚ§HÄñ ×͜×"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
