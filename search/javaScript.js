function Movie (title,rate,date,time,img){
    this.title = title;
    this.rate = rate;
    this.date = date;
    this.time = time;
    this.img = img;
}
const movieInfo = []
movieInfo.push (new Movie('Avengers:Endgame',8.8,'SUN 8 SEP - 10PM','2HR 13MIN','img/avengers.jpg'))
movieInfo.push (new Movie('Hobbs & Shaw',9.2,'TUE 4 JUL - 05:00PM','2HR 13MIN','img/hobbs-and-shaw.jpg'))
movieInfo.push (new Movie('John Wick 3',8.8,'WED 18 AUG - 07:00PM','2HR 2MIN','img/john-wick.jpg'))
movieInfo.push (new Movie('Deadpool 2',7.3,'MON 16 OCT - 10:00PM','2HR 8MIN','img/deadpool-2-1.jpg'))
movieInfo.push (new Movie('The Lion King',8.1,'SUN 8 SEP - 10:00PM','2HR 23MIN','img/the-lion-king.jpg'))
movieInfo.push(new Movie('Mad Max:Fury Road',7.4,'TUE 2 JUL - 05:00PM','2H 32MIN','img/mad-max.jpg'))
movieInfo.push(new Movie('Aquaman',5.1,'WED 16 AUG - 07:00PM','2HR 17MIN','img/aquaman.jpg'))
movieInfo.push(new Movie('Mission Impossible',7.8,'MON 18 OCR - 10:00 PM','1HR 50MIN','img/mission-impossible.jpg'))


const cardView = (cardInfo) => {
    return `
<div class="card">
    <div class="img">
        <img alt=${cardInfo.time} src=${cardInfo.img}>
    </div>
    <div class="cardText">
        <div class="cardLine cardLine1">
        <p>${cardInfo.title}</p>
        <p>${cardInfo.rate}/<span style="color: cornflowerblue">10</span></p>
        </div>
        <div class="cardLine cardLine2">
        <p>LAST UPDATE</p>
        <p>RUN TIME</p>
        </div>
        <div class="cardLine cardLine3">
        <p>${cardInfo.date}</p>
        <p>${cardInfo.time}</p>
        </div>
    </div>
</div>
`
}

const generateCards = (cardInfoList) =>{
    return cardInfoList.map(cardInfo =>{
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementsByClassName("container")[0]
cardContainer.innerHTML = generateCards(movieInfo)

function  onSearch (element){
    const searchItem = element.value
    const filterCards = movieInfo.filter(card =>{
        let title = card.title.toLowerCase() , search = searchItem.toLowerCase() , date = card.date.toLowerCase() , time = card.time.toLowerCase()
        return title.includes(search) || date.includes(search) || time.includes(search)
    })
    cardContainer.innerHTML = generateCards(filterCards)
}