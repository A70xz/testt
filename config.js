let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['6287711337556',Β 'AnjasKelas',Β true], 
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  saipul: 'https://saipulanuar.herokuapp.com',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'vqXAvz',
  'https://api.xteam.xyz': '86b357b40982e8ec',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Apikeys',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.linkytΒ =Β 'xnxx.com'
global.WM = 'π΄ππ©ππ-π΄ππππ π«πππππ π©π RamaGans ID'
//global.linkgc = 'xnxx.com'
//global.linkig = 'xnxx.com'
global.deslink = ''
global.logo = 'https://ibb.co/dtkDRJB'
global.titlink = 'Subscribe My Channel'
global.bearkey = 'RamaGans ID'
global.bodlink = '@pedonaikhaji'

global.wait = '_*π¬ππππ§π  ππ’ π©π«π¨π¬ππ¬ ...*_'
global.eror = '_*ΠΌΞ±Ξ±Ζ ΡΡΡΞ½ΡΡ ΡΞΉβΞ±ΠΊ ΡΡΞ±Π²ΞΉβ..*_'

//========Url Template Buttons==========//
global.dtu = 'π GROUP OFFICIAL'
global.urlnya = global.linkgc

//============= callButtons ============//
global.dtc = 'ππππ πππππ'
global.phn = '+62 877-1133-7556'

//========== Tampilan Bot =============//
global.sa = 'β­β'
global.gx = 'ββ'
global.gy = 'ββ’'
global.gz = 'β'
global.sb = 'β°ββββΰΏ'
global.kki = 'γ'
global.kka = 'γ'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
   'https://ibb.co/dtkDRJB'
]

//============= Games ================//
global.benar = '_*Benarβ*_'
global.salah = '_*Salahβ*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π§¬',
      limit: 'π',
      healt: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      fishingrod: 'π£',
      pickaxe: 'βοΈ',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      iron: 'βοΈ',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      makananpet: 'π',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
