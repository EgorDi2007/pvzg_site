import{a7 as B,v as N,u as i,P as m,w as E,U as _,V as g,Q as s,bE as h,z as G,N as p,ae as U,bF as V,bG as Y,C as H,bH as z}from"./app-NvaFlmR0.js";import{_ as D}from"./plugin-vue_export-helper-DlAUqK2U.js";const v=B({__name:"ZombieCatalog",props:{zombies:{}},emits:["selectZombie"],setup(A,{expose:t,emit:o}){t();const e=A,T=o,O={props:e,emits:T,selectZombie:n=>{T("selectZombie",n)}};return Object.defineProperty(O,"__isScriptSetup",{enumerable:!1,value:!0}),O}}),F=["onClick"],x=["src","alt"];function K(A,t,o,e,T,r){return N(),i(_,null,[m(' <div class="zombie-catalog"> '),m(" <h2>植物列表</h2> "),E("ul",null,[(N(!0),i(_,null,g(o.zombies,O=>(N(),i("li",{key:O.id,onClick:n=>e.selectZombie(O)},[m(` <img :src="'/assets/wikiplants/' + plant.enName.replace(/\\s+/g, '_').replace(/[\\']/g, '') + '2.webp'"
                :alt="plant.name"> `),m(` <div class="zombie-image-frame">
                <img class="zombie-img" :src="'/assets/image/plants-tp/plants_' + plant.plantType + '_0.webp'"
                    :alt="plant.name">
                <img class="frame-img" :src="'/assets/image/plants-frame/background_' + plant.frameWorld + '_0.webp'"
                    :alt="plant.frameWorld">
            </div> `),E("img",{src:"/assets/image/zombies/Zombie_"+O.zombieType+"_0.webp",alt:O.name},null,8,x),E("p",null,s(O.name),1)],8,F))),128))]),m(" </div> ")],2112)}const j=D(v,[["render",K],["__scopeId","data-v-cc2d4b40"],["__file","ZombieCatalog.vue"]]),$=B({__name:"ZombieDetail",props:{zombie:{},keyMap:{}},setup(A,{expose:t}){t();const o=A,e=h("i18nLanguage","zh"),T={props:o,i18nLanguage:e};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}}),Q={key:0,class:"zombie-detail"},q={class:"details-container"},J={class:"zombie-image"},X=["src","alt"],ee={class:"zombie-title"},Ee={class:"zombie-stats"},ae={class:"ability"},Oe=["src"],oe={class:"value"},te={key:"CodeName"},Te={class:"value"},Ne={class:"details-container"},re={class:"zombie-introduction"},ne={class:"description"},ie={class:"descriptionKey"},me={class:"description"};function Ae(A,t,o,e,T,r){return o.zombie?(N(),i("div",Q,[E("div",q,[E("div",J,[m(` <img :src="'/assets/wikiplants/' + plant.enName.replace(/\\s+/g, '_').replace(/[\\']/g, '') + '2.webp'"
                    :alt="plant.name"> `),m(` <div class="zombie-image-frame">
                    <img class="zombie-img" :src="'/assets/image/plants-tp/plants_' + plant.plantType + '_0.webp'"
                        :alt="plant.name">
                    <img class="frame-img"
                        :src="'/assets/image/plants-frame/background_' + plant.frameWorld + '_0.webp'"
                        :alt="plant.frameWorld">
                </div> `),E("img",{src:"/assets/image/zombies/Zombie_"+o.zombie.zombieType+"_0.webp",alt:o.zombie.name},null,8,X),E("p",ee,s(o.zombie.name),1),m(` <img v-if="zombie.enFamily" :src="'/assets/wikicon/' + zombie.enFamily + '_familyicon.webp'"
                    :alt="zombie.enFamily" class="family-img"> `)]),E("div",Ee,[E("table",null,[E("tbody",null,[(N(!0),i(_,null,g(o.zombie.elements,(O,n)=>(N(),i("tr",{key:n},[E("td",ae,[E("img",{src:o.keyMap[n].icon},null,8,Oe),G(" "+s(o.keyMap[n][e.i18nLanguage]),1)]),E("td",oe,s(O),1)]))),128)),E("tr",te,[t[0]||(t[0]=E("td",{class:"ability"}," CodeName ",-1)),E("td",Te,s(o.zombie.codename),1)])])])])]),E("div",Ne,[E("div",re,[E("p",ne,s(o.zombie.description),1),t[1]||(t[1]=E("br",null,null,-1)),(N(!0),i(_,null,g(o.zombie.special,O=>(N(),i("p",{key:O.NAME[e.i18nLanguage],class:"description"},[G(s(O.NAME[e.i18nLanguage])+": ",1),E("span",ie,s(O.DESCRIPTION[e.i18nLanguage]),1)]))),128)),t[2]||(t[2]=E("br",null,null,-1)),E("p",me,s(o.zombie.chat),1)])])])):m("v-if",!0)}const le=D($,[["render",Ae],["__scopeId","data-v-75855527"],["__file","ZombieDetail.vue"]]),se=B({__name:"ZombieFilter",props:{familyNameMap:{}},emits:["filterZombies"],setup(A,{expose:t,emit:o}){t();const e=A,T=o,r=p(""),O=p(""),n=h("i18nLanguage","zh"),u=W=>(O.value=O.value==W?"":W,S()),S=()=>{T("filterZombies",{name:r.value})},b=U(()=>n==="zh"?"输入僵尸名称":"Enter zombie name"),P={props:e,emits:T,searchTerm:r,selectedAttribute:O,i18nLanguage:n,selectAttribute:u,handleFilter:S,placeholder:b};return Object.defineProperty(P,"__isScriptSetup",{enumerable:!1,value:!0}),P}}),Ie={class:"zombie-filter"},ce={class:"search-input-group"},Ce=["placeholder"];function Me(A,t,o,e,T,r){return N(),i("div",Ie,[E("div",ce,[t[1]||(t[1]=E("label",{for:"zombie-search"},"Search:",-1)),V(E("input",{id:"zombie-search",type:"text","onUpdate:modelValue":t[0]||(t[0]=O=>e.searchTerm=O),placeholder:e.placeholder,onInput:e.handleFilter},null,40,Ce),[[Y,e.searchTerm]])]),m(` <div class="filter-family-group">
            <template v-for="item in familyNameMap">
                <div class="filter-family-option" :class="{ selected: selectedAttribute === item['en'] }"
                    @click="selectAttribute(item['en'])">
                    <img :src="'/assets/wikicon/' + item['en'] + '_familyicon.webp'" :alt="item['en']"
                        :class="item['en'] === selectedAttribute ? 'selected' : ''" />
                </div>
            </template>
</div> `)])}const Se=D(se,[["render",Me],["__scopeId","data-v-263dedf6"],["__file","ZombieFilter.vue"]]),We=[{NAME:"Basic Zombie",ZOMBIETYPE:"tutorialbasic",CODENAME:"tutorial",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"frontyard"},{NAME:"Conehead Zombie",ZOMBIETYPE:"tutorialarmor1",CODENAME:"tutorial_armor1",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"frontyard"},{NAME:"Buckethead Zombie",ZOMBIETYPE:"tutorialarmor2",CODENAME:"tutorial_armor2",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"frontyard"},{NAME:"Brickhead Zombie",ZOMBIETYPE:"tutorialarmor4",CODENAME:"tutorial_armor4",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:4e3,OBTAINWORLD:"frontyard"},{NAME:"Flag Zombie",ZOMBIETYPE:"tutorialflag",CODENAME:"tutorial_flag",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"frontyard"},{NAME:"Rally Zombie",ZOMBIETYPE:"tutorialrally",CODENAME:"tutorial_flag_veteran",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"frontyard"},{NAME:"Imp",ZOMBIETYPE:"imp",CODENAME:"tutorial_imp",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"frontyard"},{NAME:"Gargantuar",ZOMBIETYPE:"gargantuar",CODENAME:"tutorial_gargantuar",SUNCOST:100,WAVEPOINTCOST:1500,WEIGHT:3e3,OBTAINWORLD:"frontyard"},{NAME:"Bobsled Zombie",ZOMBIETYPE:"bobsled",CODENAME:"bobsled",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:100,OBTAINWORLD:"frontyard"},{NAME:"Bobsled Team",ZOMBIETYPE:"bobsledteam",CODENAME:"bobsled_team",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:100,OBTAINWORLD:"frontyard"},{NAME:"Balloon Zombie",ZOMBIETYPE:"balloon",CODENAME:"tutorial_balloon",SUNCOST:400,WAVEPOINTCOST:200,WEIGHT:100,OBTAINWORLD:"frontyard"},{NAME:"All-Star Zombie",ZOMBIETYPE:"allstar",CODENAME:"allstar",SUNCOST:100,WAVEPOINTCOST:1500,WEIGHT:3500,OBTAINWORLD:"frontyard"},{NAME:"Zomboni",ZOMBIETYPE:"sleighcart",CODENAME:"sleighcart",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:100,OBTAINWORLD:"frontyard"},{NAME:"Catapult Zombie",ZOMBIETYPE:"catapult",CODENAME:"catapult",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:100,OBTAINWORLD:"frontyard"},{NAME:"Mummy Zombie",ZOMBIETYPE:"egyptbasic",CODENAME:"mummy",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"egypt"},{NAME:"Conehead Mummy",ZOMBIETYPE:"egyptarmor1",CODENAME:"mummy_armor1",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Buckethead Mummy",ZOMBIETYPE:"egyptarmor2",CODENAME:"mummy_armor2",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"egypt"},{NAME:"Pyramid-Head Mummy",ZOMBIETYPE:"egyptarmor4",CODENAME:"mummy_armor4",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:4e3,OBTAINWORLD:"egypt"},{NAME:"Flag Mummy Zombie",ZOMBIETYPE:"egyptflag",CODENAME:"mummy_flag",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"egypt"},{NAME:"Egypt Rally Zombie",ZOMBIETYPE:"egyptrally",CODENAME:"mummy_flag_veteran",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"egypt"},{NAME:"Ra Zombie",ZOMBIETYPE:"egyptra",CODENAME:"ra",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:700,OBTAINWORLD:"egypt"},{NAME:"Camel Zombie",ZOMBIETYPE:"egyptcamel",CODENAME:"camel_segment",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcamelonehump",CODENAME:"camel_onehump",SUNCOST:100,WAVEPOINTCOST:600,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcameltwohump",CODENAME:"camel_twohump",SUNCOST:100,WAVEPOINTCOST:800,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcamelthreehump",CODENAME:"camel_threehump",SUNCOST:100,WAVEPOINTCOST:1e3,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcamelmanyhump",CODENAME:"camel_manyhump",SUNCOST:100,WAVEPOINTCOST:1200,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombie",ZOMBIETYPE:"egyptcameltouch",CODENAME:"camel_segment_touch",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcamelonehumptouch",CODENAME:"camel_onehump_touch",SUNCOST:100,WAVEPOINTCOST:600,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcameltwohumptouch",CODENAME:"camel_twohump_touch",SUNCOST:100,WAVEPOINTCOST:800,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcamelthreehumptouch",CODENAME:"camel_threehump_touch",SUNCOST:100,WAVEPOINTCOST:1e3,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Camel Zombies",ZOMBIETYPE:"egyptcamelmanyhumptouch",CODENAME:"camel_manyhump_touch",SUNCOST:100,WAVEPOINTCOST:1200,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Explorer Zombie",ZOMBIETYPE:"egyptexplorer",CODENAME:"explorer",SUNCOST:100,WAVEPOINTCOST:250,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Torchlight Zombie",ZOMBIETYPE:"egypttorchlight",CODENAME:"explorer_veteran",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Tomb Raiser Zombie",ZOMBIETYPE:"egypttombraiser",CODENAME:"tomb_raiser",SUNCOST:100,WAVEPOINTCOST:300,WEIGHT:2e3,OBTAINWORLD:"egypt"},{NAME:"Pharoah Inner Zombie",ZOMBIETYPE:"egyptpharaohinner",CODENAME:"pharaoh_inner",SUNCOST:100,WAVEPOINTCOST:150,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Weaker Pharoah Zombie",ZOMBIETYPE:"egyptpharaohweak",CODENAME:"pharaoh_weak",SUNCOST:100,WAVEPOINTCOST:450,WEIGHT:100,OBTAINWORLD:"egypt"},{NAME:"Pharoah Zombie",ZOMBIETYPE:"egyptpharaoh",CODENAME:"pharaoh",SUNCOST:100,WAVEPOINTCOST:450,WEIGHT:100,OBTAINWORLD:"egypt"},{NAME:"Egypt Imp",ZOMBIETYPE:"egyptimp",CODENAME:"egypt_imp",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"egypt"},{NAME:"Mummified Gargantuar",ZOMBIETYPE:"egyptgargantuar",CODENAME:"egypt_gargantuar",SUNCOST:100,WAVEPOINTCOST:1500,WEIGHT:3e3,OBTAINWORLD:"egypt"},{NAME:"Zombot Sphinx-inator",ZOMBIETYPE:"egyptzomboss",CODENAME:"zombossmech_egypt",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:0,OBTAINWORLD:"egypt"},{NAME:"Zombot Sphinx-inator",ZOMBIETYPE:"egyptzomboss",CODENAME:"zombossmech_egypt2",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:0,OBTAINWORLD:"egypt"},{NAME:"Pirate Zombie",ZOMBIETYPE:"piratebasic",CODENAME:"pirate",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"pirate"},{NAME:"Conehead Pirate",ZOMBIETYPE:"piratearmor1",CODENAME:"pirate_armor1",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"pirate"},{NAME:"Buckethead Pirate",ZOMBIETYPE:"piratearmor2",CODENAME:"pirate_armor2",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"pirate"},{NAME:"Barrelhead Pirate",ZOMBIETYPE:"piratearmor4",CODENAME:"pirate_armor4",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:4e3,OBTAINWORLD:"pirate"},{NAME:"Flag Pirate Zombie",ZOMBIETYPE:"pirateflag",CODENAME:"pirate_flag",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"pirate"},{NAME:"Pirate Rally Zombie",ZOMBIETYPE:"piraterally",CODENAME:"pirate_flag_veteran",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"pirate"},{NAME:"Swashbuckler Zombie",ZOMBIETYPE:"pirateswashbuckler",CODENAME:"swashbuckler",SUNCOST:100,WAVEPOINTCOST:150,WEIGHT:1500,OBTAINWORLD:"pirate"},{NAME:"Seagull Zombie",ZOMBIETYPE:"pirateseagull",CODENAME:"seagull",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:4e3,OBTAINWORLD:"pirate"},{NAME:"Pelican Zombie",ZOMBIETYPE:"piratepelican",CODENAME:"pelican",SUNCOST:100,WAVEPOINTCOST:350,WEIGHT:4e3,OBTAINWORLD:"pirate"},{NAME:"Barrel Roller Zombie",ZOMBIETYPE:"piratebarrelpusher",CODENAME:"barrelroller",SUNCOST:100,WAVEPOINTCOST:500,WEIGHT:2e3,OBTAINWORLD:"pirate"},{NAME:"Pirate Barrel",ZOMBIETYPE:"piratebarrel",CODENAME:"pirate_barrel",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:0,OBTAINWORLD:"pirate"},{NAME:"Imp Cannon",ZOMBIETYPE:"pirateimpcannon",CODENAME:"cannon",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:1500,OBTAINWORLD:"pirate"},{NAME:"Pirate Captain Zombie",ZOMBIETYPE:"piratecaptain",CODENAME:"pirate_captain",SUNCOST:100,WAVEPOINTCOST:500,WEIGHT:1e3,OBTAINWORLD:"pirate"},{NAME:"Zombie Parrot",ZOMBIETYPE:"pirateparrot",CODENAME:"pirate_captain_parrot",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:0,OBTAINWORLD:"pirate"},{NAME:"Imp Pirate Zombie",ZOMBIETYPE:"pirateimp",CODENAME:"pirate_imp",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"pirate"},{NAME:"Gargantuar Pirate",ZOMBIETYPE:"pirategargantuar",CODENAME:"pirate_gargantuar",SUNCOST:100,WAVEPOINTCOST:1500,WEIGHT:3e3,OBTAINWORLD:"pirate"},{NAME:"Zombot Plank Walker",ZOMBIETYPE:"piratezomboss",CODENAME:"zombossmech_pirate",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:0,OBTAINWORLD:"pirate"},{NAME:"Zombot Plank Walker",ZOMBIETYPE:"piratezomboss",CODENAME:"zombossmech_pirate2",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:0,OBTAINWORLD:"pirate"},{NAME:"Cowboy Zombie",ZOMBIETYPE:"cowboybasic",CODENAME:"cowboy",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"cowboy"},{NAME:"Conehead Cowboy",ZOMBIETYPE:"cowboyarmor1",CODENAME:"cowboy_armor1",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"cowboy"},{NAME:"Buckethead Cowboy",ZOMBIETYPE:"cowboyarmor2",CODENAME:"cowboy_armor2",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"cowboy"},{NAME:"Cart-Head Cowboy",ZOMBIETYPE:"cowboyarmor4",CODENAME:"cowboy_armor4",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:4e3,OBTAINWORLD:"cowboy"},{NAME:"Flag Cowboy Zombie",ZOMBIETYPE:"cowboyflag",CODENAME:"cowboy_flag",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"cowboy"},{NAME:"Cowboy Rally Zombie",ZOMBIETYPE:"cowboyrally",CODENAME:"cowboy_flag_veteran",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"cowboy"},{NAME:"Prospector Zombie",ZOMBIETYPE:"cowboyprospector",CODENAME:"prospector",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"cowboy"},{NAME:"Pianist Zombie",ZOMBIETYPE:"cowboypiano",CODENAME:"piano",SUNCOST:100,WAVEPOINTCOST:450,WEIGHT:2e3,OBTAINWORLD:"cowboy"},{NAME:"Poncho Zombie",ZOMBIETYPE:"cowboyponcho",CODENAME:"poncho",SUNCOST:100,WAVEPOINTCOST:300,WEIGHT:4e3,OBTAINWORLD:"cowboy"},{NAME:"Poncho Zombie",ZOMBIETYPE:"cowboyponchonoshield",CODENAME:"poncho_no_plate",SUNCOST:100,WAVEPOINTCOST:150,WEIGHT:4e3,OBTAINWORLD:"cowboy"},{NAME:"Poncho Zombie",ZOMBIETYPE:"cowboyponchoshield",CODENAME:"poncho_plate",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"cowboy"},{NAME:"Chicken Wrangler Zombie",ZOMBIETYPE:"cowboychickenfarmer",CODENAME:"chicken_farmer",SUNCOST:100,WAVEPOINTCOST:350,WEIGHT:3e3,OBTAINWORLD:"cowboy"},{NAME:"Zombie Chicken",ZOMBIETYPE:"cowboychicken",CODENAME:"chicken",SUNCOST:100,WAVEPOINTCOST:10,WEIGHT:0,OBTAINWORLD:"cowboy"},{NAME:"Jack O'Chicken",ZOMBIETYPE:"cowboychickenpumpkin",CODENAME:"chicken_pumpkin",SUNCOST:100,WAVEPOINTCOST:10,WEIGHT:0,OBTAINWORLD:"market"},{NAME:"Zombie Bull",ZOMBIETYPE:"cowboybull",CODENAME:"west_bull",SUNCOST:100,WAVEPOINTCOST:600,WEIGHT:1e3,OBTAINWORLD:"cowboy"},{NAME:"Rodeo Legend Zombie",ZOMBIETYPE:"cowboybullblack",CODENAME:"west_bull_veteran",SUNCOST:100,WAVEPOINTCOST:1e3,WEIGHT:1e3,OBTAINWORLD:"cowboy"},{NAME:"Zombie Bull Rider",ZOMBIETYPE:"cowboyimp",CODENAME:"west_bullrider",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"cowboy"},{NAME:"Wild West Gargantuar",ZOMBIETYPE:"cowboygargantuar",CODENAME:"cowboy_gargantuar",SUNCOST:100,WAVEPOINTCOST:1500,WEIGHT:3e3,OBTAINWORLD:"cowboy"},{NAME:"Zombot War Wagon",ZOMBIETYPE:"cowboyzomboss",CODENAME:"zombossmech_cowboy",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:0,OBTAINWORLD:"cowboy"},{NAME:"Zombot War Wagon",ZOMBIETYPE:"cowboyzomboss",CODENAME:"zombossmech_cowboy2",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:0,OBTAINWORLD:"cowboy"},{NAME:"Kongfu Zombie",ZOMBIETYPE:"kongfubasic",CODENAME:"kongfu",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"kongfu"},{NAME:"Kongfu Conehead Zombie",ZOMBIETYPE:"kongfuarmor1",CODENAME:"kongfu_armor1",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"kongfu"},{NAME:"Kongfu Kettlehead Zombie",ZOMBIETYPE:"kongfuarmor2",CODENAME:"kongfu_armor2",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"kongfu"},{NAME:"Kongfu Helmet Zombie",ZOMBIETYPE:"kongfuarmor3",CODENAME:"kongfu_armor3",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:4e3,OBTAINWORLD:"kongfu"},{NAME:"Flag Kongfu Zombie",ZOMBIETYPE:"kongfuflag",CODENAME:"kongfu_flag",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"kongfu"},{NAME:"Kongfu Rally Zombie",ZOMBIETYPE:"kongfurally",CODENAME:"kongfu_flag_veteran",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"kongfu"},{NAME:"Hammer Zombie",ZOMBIETYPE:"kongfuhammer",CODENAME:"kongfu_hammer",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:2e3,OBTAINWORLD:"kongfu"},{NAME:"Kongfu Torch Zombie",ZOMBIETYPE:"kongfutorch",CODENAME:"kongfu_torch",SUNCOST:100,WAVEPOINTCOST:250,WEIGHT:3e3,OBTAINWORLD:"kongfu"},{NAME:"Monk Zombie",ZOMBIETYPE:"monkbasic",CODENAME:"monk",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"kongfu"},{NAME:"Monk Conehead Zombie",ZOMBIETYPE:"monkarmor1",CODENAME:"monk_armor1",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"kongfu"},{NAME:"Monk Kettlehead Zombie",ZOMBIETYPE:"monkarmor2",CODENAME:"monk_armor2",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"kongfu"},{NAME:"Monk Helmet Zombie",ZOMBIETYPE:"monkarmor3",CODENAME:"monk_armor3",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:4e3,OBTAINWORLD:"kongfu"},{NAME:"Flag Monk Zombie",ZOMBIETYPE:"monkflag",CODENAME:"monk_flag",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"kongfu"},{NAME:"Monk Rally Zombie",ZOMBIETYPE:"monkrally",CODENAME:"monk_flag_veteran",SUNCOST:100,WAVEPOINTCOST:0,WEIGHT:100,OBTAINWORLD:"kongfu"},{NAME:"Nunchaku Monk Zombie",ZOMBIETYPE:"monknunchaku",CODENAME:"monk_nunchaku",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:2e3,OBTAINWORLD:"kongfu"},{NAME:"Torch Monk Zombie",ZOMBIETYPE:"monktorch",CODENAME:"monk_torch",SUNCOST:100,WAVEPOINTCOST:250,WEIGHT:3e3,OBTAINWORLD:"kongfu"},{NAME:"Future Zombie",ZOMBIETYPE:"futurebasic",CODENAME:"future",SUNCOST:100,WAVEPOINTCOST:100,WEIGHT:1e3,OBTAINWORLD:"future"},{NAME:"Future Conehead Zombie",ZOMBIETYPE:"futurearmor1",CODENAME:"future_armor1",SUNCOST:100,WAVEPOINTCOST:200,WEIGHT:3e3,OBTAINWORLD:"future"},{NAME:"Future Buckethead Zombie",ZOMBIETYPE:"futurearmor2",CODENAME:"future_armor2",SUNCOST:100,WAVEPOINTCOST:400,WEIGHT:4e3,OBTAINWORLD:"future"},{NAME:"Holo Head Zombie",ZOMBIETYPE:"futurearmor4",CODENAME:"future_armor4",SUNCOST:100,WAVEPOINTCOST:700,WEIGHT:4e3,OBTAINWORLD:"future"},{NAME:"Jetpack Zombie",ZOMBIETYPE:"futurejetpack",CODENAME:"future_jetpack",SUNCOST:100,WAVEPOINTCOST:150,WEIGHT:4e3,OBTAINWORLD:"future"},{NAME:"Relic Hunter Zombie",ZOMBIETYPE:"lostrelichunter",CODENAME:"lostcity_relichunter",SUNCOST:100,WAVEPOINTCOST:550,WEIGHT:3e3,OBTAINWORLD:"lostcity"}],pe={ZOMBIES:We},ue={TOUGHNESS:{en:"TOUGHNESS",zh:"血量",icon:"/assets/wikicon/Toughness2I.webp"},SUNCOST:{en:"SUN COST",zh:"阳光消耗",icon:"/assets/wikicon/Sun_Cost2I.webp"},SPECIAL:{en:"SPECIAL",zh:"特点",icon:"/assets/wikicon/Special2I.webp"},RECHARGE:{en:"RECHARGE",zh:"冷却时间",icon:"/assets/wikicon/Recharge2I.webp"},DAMAGE:{en:"DAMAGE",zh:"伤害",icon:"/assets/wikicon/Damage2I.webp"},FAMILY:{en:"FAMILY",zh:"家族",icon:"/assets/wikicon/Family2I.webp"},RANGE:{en:"RANGE",zh:"索敌",icon:"/assets/wikicon/Range2I.webp"},AREA:{en:"AREA",zh:"范围",icon:"/assets/wikicon/Area2I.webp"},ARMINGTIME:{en:"ARMING TIME",zh:"装填时间",icon:"/assets/wikicon/Arming_Time2I.webp"},PLANTFOOD:{en:"PLANT FOOD EFFECT",zh:"叶绿素效果",icon:"/assets/wikicon/Plant_Food_Power2I.webp"},SUNPRODUCTION:{en:"SUN PRODUCTION",zh:"阳光产量",icon:"/assets/wikicon/Sun_Production2I.webp"}},be={Defence:{en:"Reinforce-mint",zh:"防御家族"},Shadow:{en:"Conceal-mint",zh:"暗影家族"},Peashooter:{en:"Appease-mint",zh:"豌豆家族"},Fire:{en:"Pepper-mint",zh:"燃烧家族"},Cold:{en:"Winter-mint",zh:"寒冰家族"},Sharp:{en:"Spear-mint",zh:"锋利家族"},Lobber:{en:"Arma-mint",zh:"投掷家族"},Poison:{en:"Ail-mint",zh:"毒性家族"},Electricity:{en:"Fila-mint",zh:"电能家族"},Slow:{en:"Contain-mint",zh:"滞缓家族"},Magic:{en:"Enchant-mint",zh:"魔法家族"},Sun:{en:"Enlighten-mint",zh:"阳光家族"},Melee:{en:"Enforce-mint",zh:"健壮家族"},Explosive:{en:"Bombard-mint",zh:"爆裂家族"},Nope:{en:"None",zh:"无"}},M={Almanac:ue,PlantFamily:be},Pe=B({__name:"App",setup(A,{expose:t}){t();const o=M==null?void 0:M.Almanac,e=M==null?void 0:M.PlantFamily,T=h("i18nLanguage","zh"),r=p([]),O=p([]),n=p(null),u=a=>{n.value=a},S={water:"beach",market:"prenium"},b=a=>{var I,y,Z,f,L,R;const l={elements:{},special:[],enFamily:"",id:a.ID,zombieType:a.ZOMBIETYPE,codename:a.CODENAME,name:a.NAME,enName:a.NAME,image:a.image,frameWorld:S[a.OBTAINWORLD]||a.OBTAINWORLD,description:(y=(I=a.ALMANAC)==null?void 0:I.Introduction)==null?void 0:y[T],chat:(f=(Z=a.ALMANAC)==null?void 0:Z.Chat)==null?void 0:f[T]};return(L=a==null?void 0:a.ALMANAC)!=null&&L.Elements&&a.ALMANAC.Elements.forEach(w=>{const{TYPE:c,SORT:d,VALUE:k}=w;let C;d&&d[T]?C=d[T]:k?C=k:c=="RECHARGE"?C=a.COOLDOWN:c=="FAMILY"?(C=e[a[c]][T],l.enFamily=e[a[c]].en):C=a[c],l.elements&&(l.elements[c]=C)}),(R=a==null?void 0:a.ALMANAC)!=null&&R.Special&&(l.special=a.ALMANAC.Special),l},P=a=>{const{name:l}=a;O.value=r.value.filter(I=>I.name.toLowerCase().includes(l.toLowerCase())||I.enName.toLowerCase().includes(l.toLowerCase())||I.codename.toLowerCase().includes(l.toLowerCase()))};r.value=pe.ZOMBIES.map(b),O.value=r.value,u(O.value[0]);const W={keyMap:o,familyNameMap:e,i18nLanguage:T,zombies:r,filteredZombies:O,selectedZombie:n,selectZombie:u,frameMap:S,formatOriginZombie:b,filterZombies:P,ZombieCatalog:j,ZombieDetail:le,ZombieFilter:Se};return Object.defineProperty(W,"__isScriptSetup",{enumerable:!1,value:!0}),W}}),_e={class:"app"},Be={class:"container"},De={class:"filter"},ye={key:0},de={key:1},ge={class:"container"},he={class:"sidebar"},Ze={class:"content"};function fe(A,t,o,e,T,r){return N(),i("div",_e,[E("div",Be,[E("div",De,[e.i18nLanguage=="zh"?(N(),i("h1",ye,"PvZ2 Gardendless 僵尸图鉴")):(N(),i("h1",de,"PvZ2 Gardendless Zombies Almanac")),H(e.ZombieFilter,{onFilterZombies:e.filterZombies,familyNameMap:e.familyNameMap},null,8,["familyNameMap"])])]),E("div",ge,[E("div",he,[H(e.ZombieCatalog,{zombies:e.filteredZombies,onSelectZombie:e.selectZombie},null,8,["zombies"])]),E("div",Ze,[e.selectedZombie?(N(),z(e.ZombieDetail,{key:0,keyMap:e.keyMap,zombie:e.selectedZombie},null,8,["keyMap","zombie"])):m("v-if",!0)])])])}const ke=D(Pe,[["render",fe],["__scopeId","data-v-5ce6cc64"],["__file","App.vue"]]);export{ke as A};
