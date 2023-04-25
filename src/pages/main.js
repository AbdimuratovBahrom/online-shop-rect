import "../App.css";
import Iphone from "../img/iphone-12-pro-1.jpeg";
import Note11pro from "../img/redmi-note-11-pro-plus-5g-rear-2048w-1152h.jpeg";
import Watch from "../img/63515f0a3ba7d820292680dc-1.jpg";
import Huawei from "../img/HUAWEI-Nova-9-SE-smartfon-8GB-RAM-czarny-dual-SIM-Typ-Smartfon.jpg";
import GooglePlay from "../img/Google_Play_Store.png";
import AppStore from "../img/ios-store.png";
import Humo from "../img/Humo.jpg";
import Uzcard from "../img/UZCard.webp";
import Apelsin from "../img/фзудышт 0.2.jpg";
import Click from "../img/Click.webp";
import Payme from "../img/PAyMe.jpg";
import Paynet from "../img/PAynet.webp";
import Logo from "../img/olcha 800x450.png";
import App from "../img/Application.webp";
import {
  LikeOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

function Main() {
  return (
    <div className="Content">
      <section className="f__sect">
        
        <Card
          style={{
            width: 300,
          }}
          cover={[
            <img alt="example" src={Iphone} />,
            
            <LikeOutlined />,

            <BarChartOutlined />,
          ]}
          actions={[
            <ShoppingCartOutlined />,
            <button className="btn__crd">В рассрочку</button>,
          ]}
        >
          <h1 className="tittle">Iphone 14 Pro max</h1>
          <p className="price">15 109 000 сум</p>
          <p className="credits">1385000 X 12</p>
        </Card>
        <Card
          style={{
            width: 300,
          }}
          cover={[
            <img alt="example" src={Note11pro} />,
            <LikeOutlined />,
            <BarChartOutlined />,
          ]}
          actions={[
            <ShoppingCartOutlined />,
            <button className="btn__crd">В рассрочку</button>,
          ]}
        >
          <h1 className="tittle"> Redmi Note 11 pro</h1>
          <p className="price">3 804 000 сум</p>
          <p className="credits">634 000 X 6</p>
        </Card>
        <Card
          style={{
            width: 300,
          }}
          cover={[
            <img alt="example" src={Watch} />,
            <LikeOutlined />,
            <BarChartOutlined />,
          ]}
          actions={[
            <ShoppingCartOutlined />,
            <button className="btn__crd">В рассрочку</button>,
          ]}
        >
          <h1 className="tittle">SmartWatch X8 Ultra</h1>
          <p className="price">370 000 сум</p>
          <p className="credits">50 000 x 8</p>
        </Card>
        <Card
          style={{
            width: 300,
          }}
          cover={[
            <img alt="example" src={Huawei} />,
            <LikeOutlined />,
            <BarChartOutlined />,
          ]}
          actions={[
            <ShoppingCartOutlined />,
            <button className="btn__crd">В рассрочку</button>,
          ]}
        >
          <h1 className="tittle">Huawei nova 9 se</h1>
          <p className="price">3 609 000 сум</p>
          <p className="credits">488 000 X 12</p>
        </Card>
      </section>
      <h1 className="App">
       <br />
       <br />
       <br />
        Наше мобильное приложение доступно в App store и Google play
      </h1>
      <section className="Second__sect">
        <div className="AppImg1">
          <img width="200px" src={GooglePlay} alt="" />
          <img width="200px" src={AppStore} alt="" />
        </div>
        <div className="AppImg2">
          <img src={App} alt="" />
        </div>
      </section>
      <section className="MarketPlace">
        <h1>Маркетплейс - Olcha удобный гипермаркет для покупок</h1>
        <p>
          Комфортную жизнь любого человека и удобный быт невозможно представить
          без современной техники. Рабочие и личные вопросы - в <a> смартфоне</a>,
          любимые фильмы и сериалы – телевизор, уборка – пылесос, готовка –
          плита, духовка и множество более мелких, но не менее полезных
          девайсов. Кроме того, технологии развиваются, а поэтому электроника
          требует регулярного обновления, хочется испытать новые модели или
          попросту не хватает мощности имеющихся девайсов. В связи с этим
          полезно иметь надежное место для покупки бытовой техники. Если Вы пока
          такового для себя не нашли, мы приглашаем на несколько минут
          задержаться на нашем сайте. Уверяем, Вы убедитесь, что не зря
          потратили свое время.
        </p>
        <h1>Где покупать технику в Узбекистане?</h1>
        <p>
          Точек для приобретения электроники в стране немало, но важно, чтобы
          клиенту подходил ассортимент, цена, общие условия совершения заказа.
          Что предлагаем мы:
        </p>

        <p>
          {" "}
          Отличный выбор техники всех категорий – от телевизоров, смартфонов,
          кухонных принадлежностей до автотоваров и геймерских девайсов. Кроме
          того, мы реализуем исключительно оригинальную брендовую продукцию, по
          которой Вы получаете гарантии и сервисное обслуживание; За счет работы
          в формате маркетплейса мы значительно сокращаем операционные издержки
          и можем предложить цены, ниже рыночных на тот же товар с гарантией
          оригинальности; Удобные покупки в рассрочку – без бумажной волокиты,
          нюансов с банками. Для вас достаточно иметь лишь паспорт и банковскую
          карту, чтобы быстро оформить оплату по частям без пени за просрочки;
          Быстрая доставка (в Ташкенте от 4 до 12 рабочих часов, в регионах – от
          1-3 рабочих дней). Так легко совершать покупки еще не было –
          оформляйте все в несколько кликов онлайн, а затем получайте
          оперативной доставкой; У нас часто действуют скидки, устраиваются дни
          мегаакций и предусмотрены персональные презенты к заказам любого
          объема.
        </p>

        <h1>Покупки в маркетплейсе – быстро, удобно, безопасно</h1>

        <p>
          Olcha.uz – это компания, которая с 2017 года на рынке, но опыт
          сотрудников в этой сфере достигает 16 лет. Мы работаем с хорошими
          брендами техники разного ценового сегмента и каждому клиенту сможем
          предложить вариант на его бюджет. Удобство онлайн-покупок для Вас
          сопровождается и финансовыми выгодами такого формата работы. Экономьте
          и покупайте надежные товары в несколько кликов. Будем рады
          проконсультировать.
        </p>
      </section>
      <footer className="footer">
        <div className="footerLeftBox">
          <ul className="footer__ul">
            <li>
              {" "}
              <img width="200px" src={Logo} alt=""></img>
            </li>
            <li> <a href="#">Телефон поддержки</a> </li>
            <li>
              <span className="footSpan">+998 (71) 202 202 1</span>
            </li>
            <li> <a href="#"> Козитарнов, Ташкент</a> </li>
            <li> <a href="#">  info@olcha.uz</a></li>
          </ul>

          <ul className="footer__ul">
            <li>
              <span className="footSpan">Информация</span>
            </li>
            <li> <a href="#">  О компании</a></li>
            <li> <a href="#">  Вакансии</a></li>
            <li> <a href="#">  Возврат и обмен товаров</a></li>
            <li> <a href="#">  Условия рассрочки</a></li>
            <li> <a href="#">  Помощь</a></li>
            <li> <a href="#">  Доставка</a></li>
          </ul>

          <ul className="footer__ul">
            <li> <a href="#">  Eco-friendly</a></li>
            <li> <a href="#">  Бонусы и акции</a></li>
            <li> <a href="#">  Оплата и доставка</a></li>
            <li> <a href="#">  Продавайте на olcha</a></li>
            <li> <a href="#">  Сервисные центры</a></li>
          </ul>
        </div>
        <div className="footerRightBox">
          <div className="CardTop">
           <button className="cardbutton"> <img className="CardImages1" src={Humo} alt="" /></button>
           <button className="cardbutton"> <img className="CardImages2" src={Uzcard} alt="" /></button>
            <br />
           <button className="cardbutton"> <img className="CardImages3" src={Apelsin} alt="" /></button>
          </div>
          <div className="CardBottom">
           <button className="cardbutton"> <img className="CardImages4" src={Click} alt="" /></button>
            
           <button className="cardbutton"> <img className="CardImages5" src={Payme} alt="" /></button>
            <br />
           <button className="cardbutton"> <img className="CardImages6" src={Paynet} alt="" /></button>
          </div>
        </div>
      </footer>
      <img className="logoHeader" src={Logo} alt="" />
    </div>
  );
}
export default Main;
