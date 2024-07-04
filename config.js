const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_37_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICAxODUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2swd2UyU0VZRWFva0c2L0RCcUllQTdQU0tXUUFabkhRT2FacUY4LzI2Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRi01NUptdEhTaktHRThwMVJOSlZ1QVwiLFxuICBcInBob25lSWRcIjogXCJjZWM2MGM4NS02NWE3LTRjM2MtYmEwNS1mZDlkNTFhZjdiOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMjQ4LFxuICAgICAgMjI5LFxuICAgICAgMjQyLFxuICAgICAgNjYsXG4gICAgICAyOCxcbiAgICAgIDgzLFxuICAgICAgMTcwLFxuICAgICAgMTg3LFxuICAgICAgMTE4LFxuICAgICAgMTQ3LFxuICAgICAgMTE0LFxuICAgICAgMjM2LFxuICAgICAgNDcsXG4gICAgICAyMzEsXG4gICAgICA0OSxcbiAgICAgIDIxNCxcbiAgICAgIDExMCxcbiAgICAgIDEwOSxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDI1NCxcbiAgICAgIDksXG4gICAgICAxOTEsXG4gICAgICAyMTAsXG4gICAgICAyNTUsXG4gICAgICAzNSxcbiAgICAgIDExLFxuICAgICAgMTMzLFxuICAgICAgMjQ5LFxuICAgICAgMTYyLFxuICAgICAgMTc5LFxuICAgICAgMjAzLFxuICAgICAgMjIsXG4gICAgICAyMDYsXG4gICAgICA2OCxcbiAgICAgIDI1MSxcbiAgICAgIDE0MSxcbiAgICAgIDIxOCxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCOUVKS0ExTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDYyNzQ2MjU3OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUWFtYXJcIixcbiAgICBcImxpZFwiOiBcIjE2MzQ3MTIwMzI5MTIxNzo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMjV0NXdHRVBIMm1iUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhZOStYM2pBbHIzU0RkTUY2eDI5MDVIb09GY0tETU1DMEVCTC83UUQ2UlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVFyZzROek5TUmlFTmJ6RHFmVnJ3OEdkRUxPRlVYWnNpbE1UcUNTSzA1YXg5WHlKRjVkOUNQTVdHZ3g2UFhnN1gzTWpHUHYyWGxMYUVzSmRYVlBPQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDF3REVkQ2JyclltTzJiWjQvUWp3NStSUHB0UXZYbmdVZXhvWmdwaXZaN25rSVk3MDBVU3ZPbDlTVjErRjhaN2ZHRFBTQXpRTk1LcjJkdDlpVUUzQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDYyNzQ2MjU3OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4OTQ1OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
