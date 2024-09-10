import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Кольцо Brazilian',
          img: '1.jpg',
          desc: '"Кольцо Brazilian" – яркий акцент вашего внимания. Прекрасный способ выразить свою любовь и создать восхитительный момент.',
          category: 'chairs',
          price: '122,99'
        },
        {
          id: 2,
          title: 'Кольцо Insaid',
          img: '2.jpg',
          desc: '"Кольцо Insaid" – стильное украшение, идеальное дополнение к вашему образу. Прекрасный выбор для тех, кто ценит утонченность и оригинальность.',
          category: 'chairs',
          price: '162,99'
        },
        {
          id: 3,
          title: 'Ожерелье "Бикини-Ботом"',
          img: '3.jpg',
          desc: 'Подчеркните свою индивидуальность с ожерельем "Бикини-Ботом". Яркое украшение для тех, кто ценит свободу и стиль',
          category: 'chairs',
          price: '445,49'
        },
        {
          id: 4,
          title: 'Кулон "Моя прелесть"',
          img: '4.jpg',
          desc: 'Утонченность в каждой детали – кулон "Моя прелесть". Носите с гордостью этот символ вашей неповторимой красоты.',
          category: 'chairs',
          price: '299,99'
        },
        {
          id: 5,
          title: 'Браслет "За гранью Ада"',
          img: '5.jpg',
          desc: 'Браслет "За гранью Ада" – стильный мужской аксессуар, выражающий силу и характер.',
          category: 'chairs',
          price: '111,59'
        },
        {
          id: 6,
          title: 'Браслет "DoubleShot"',
          img: '6.jpg',
          desc: 'Мужской браслет "DoubleShot". Отличный выбор для тех, кто ценит элегантность',
          category: 'chairs',
          price: '288,19'
        }
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}


export default App;


