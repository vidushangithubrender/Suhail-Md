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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_44_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAwLFxuICAgICAgICA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3LFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNDBCMkpRamoyMmxZVFdjVlpIZGZ6dHZ5K0xRQ3VjVlgwL2ZtZDJhU0RMQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1MTUxMjQ3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTU0MTVERTdBMzY3MUI1QkYxMjExMzlDMDExNDZGQUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTMwMjg4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZQVklrdWdfVHkyS3VtNjN0Q2MtUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmQ0OGY3OWUtYWJhYS00YTg4LWE5YmUtYmJkMmZhMjllMGY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgOTAsXG4gICAgICA0NCxcbiAgICAgIDQxLFxuICAgICAgMTMzLFxuICAgICAgMjIxLFxuICAgICAgMTMxLFxuICAgICAgODYsXG4gICAgICAxNzYsXG4gICAgICAyMjMsXG4gICAgICAyMTMsXG4gICAgICAyNTQsXG4gICAgICAxNTYsXG4gICAgICA5OCxcbiAgICAgIDExNCxcbiAgICAgIDEzNyxcbiAgICAgIDIwMyxcbiAgICAgIDE2NSxcbiAgICAgIDE2NyxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAyNSxcbiAgICAgIDEwNixcbiAgICAgIDE0MSxcbiAgICAgIDkxLFxuICAgICAgMzQsXG4gICAgICAyNDEsXG4gICAgICAxOTEsXG4gICAgICAxOTksXG4gICAgICAxNCxcbiAgICAgIDMwLFxuICAgICAgOTcsXG4gICAgICAxNDQsXG4gICAgICAxNjAsXG4gICAgICAxODEsXG4gICAgICAxNDksXG4gICAgICAxNSxcbiAgICAgIDE5OSxcbiAgICAgIDg5LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVozVkpOUEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzUxNTEyNDcyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxOTIyNDI1NzU5NzU0MToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNoYW1vZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpSW5jUUNFT1dveDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibHNHRXdmNEdVWVZrRG5zcno1dFc3MUdjbzhPNkdkSndOeGcwOENYTUZUYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOTTFydmpuZlJUMDJHclcrOW1mTmVVcFliZU0xcEZBb1JkczlHSHppdTN6M1FKT0lPY1N2UC9QZ0lTdk8yS0c3R2V5NEV4bFJJL0VPdG04NlVpTGVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2bmlIZGJzekllSVBucWVSaFVmaGFrYmRzdmY2Q0NsUWh0YWZKZllJSmVYQUNSSGVQbVU3UHp6aE9hMEJuYzZzay9pUitTc3dWcUZaM0xrQTZIMEdBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1MTUxMjQ3MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjkzMDI4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc2M1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzYzLmpzb24iOiAie1wia2V5RGF0YVwiOlwibG9OT043eFdDaXVWdkxzYkZGVG9Sb29PTVBaMUZYKzhWenRSNHJadDNacz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Nzk5NTM1MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjkzMDI4MzYxM1wifSIKfQ=="  // PUT your SESSION_ID 


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
