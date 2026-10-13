const wrapper=document.getElementById('wrapper')
const sortTitleBut=document.getElementById('sortTitle')
const sortYearBut=document.getElementById('sortYear')
const selectGen=document.getElementById('genre')
const pickBut=document.getElementById('pick')
const filmPicked=document.getElementById('selectedFilm')

const films=[
    {title:"The Matrix",genre:"Sci-Fi",year:1999,length:164},
    {title:"Toy Story",genre:"Animation",year:1995,length:81},
    {title:"Superbad",genre:"Comedy",year:2007,length:113},
    {title:"Bridesmaid",genre:"Comedy",year:2011,length:125},
    {title:"Coco",genre:"Animation",year:2017,length:105},
    {title:"Inception",genre:"Sci-Fi",year:2010,length:148},
]

let shownFilms=[...films]
let genreClick=0

function renderfilms(shownFilms){
    wrapper.innerHTML=""
    const filmCount=document.createElement('p')
    filmCount.innerHTML="Showing "+shownFilms.length+" out of "+films.length+" movies"
    wrapper.appendChild(filmCount)
    shownFilms.forEach(film => {
        const ele=document.createElement('button')
        ele.innerHTML=film.title+", "+film.genre+", "+film.year+", "+film.length+" min"
        ele.addEventListener('click',function(){filmPicked.innerHTML="You're watching "+film.title})
        wrapper.appendChild(ele)
        const br=document.createElement('br')
        wrapper.append(br)})}

sortTitleBut.addEventListener('click',function(){
    const sorted=shownFilms.sort((a,b)=>a.title.localeCompare(b.title))
    renderfilms(sorted)})

sortYearBut.addEventListener('click',function(){
    const sorted=shownFilms.sort((a,b)=>a.year-b.year)
    renderfilms(sorted)})

selectGen.addEventListener('click',function(){
    const genre=selectGen.value
    genreClick+=1
    if(genreClick==2){ //exists only to make it so that when the users clicks on the select to open the dropdown, it doesn't immediately unsort. Will unsort if they click off then back on tho
        shownFilms=films.filter((film)=>{return film.genre==genre ||genre=="All"})
        renderfilms(shownFilms)
        genreClick=0}})

pickBut.addEventListener('click',function(){
    const film=shownFilms[Math.floor(Math.random()*shownFilms.length)]
    filmPicked.innerHTML="You're watching "+film.title})

renderfilms(shownFilms)