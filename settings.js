/*
› Create By @Pet
› Base Ori @Peterbase
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['6281280174445'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6281280174445'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6281280174445' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Own Pet Botz' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'Pet-Botz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Pet' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UC2yce20yVSvDQLI3uL5wUjw'
global.ig = 'https://instagram.com/onlypet_oky'
global.mygc = 'https://chat.whatsapp.com/JEv6rKBV6ZwE923iMZW9R5'
global.myweb = 'https://github.com/Peterelzevir/Peter-Botz/'
global.email = 'Petbotz@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© Pinemark Bot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Pinemark' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/Pet.jpg')
/*global.veloriy = fs.readFileSync('./image/Petbotz.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: 'Done Bang',
admin: '_Khusus Admin Group!_',
botAdmin: '_Bot Harus Jadi Admin Terlebih Dahulu Guys!_',
owner: '_Fitur Hanya Untuk Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group Yah!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat Cuy!_',
bot: '_Fitur Khusus Pengguna Nomor Bot yah_',
wait: '_Processing yak..._',
error: '_Fitur Lagi Error Bos!_',
endLimit: '_Limit Harian Kamoeh Telah Habis, Limit Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
