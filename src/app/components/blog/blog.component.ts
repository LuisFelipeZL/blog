import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrNews: News[] = [];
  n_title: string = "";
  n_image: string = "";
  n_content: string = "";
  n_date: string = "";

  id: number = 3;

  addNews: string = "";

  /**
   * The constructor is a function that is called when a new instance of the class is created
   */
  constructor() {
    /* It's creating an array of objects. */
    this.arrNews = [
      { id: 2,
         title: 'ChatGPT en humanos: cómo es el dispositivo que conecta el cerebro con la Inteligencia Artificial', image: "https://media.ambito.com/p/36bd34b936abaf7697d884693372e2dc/adjuntos/239/imagenes/040/614/0040614475/730x0/smart/neurosity-crown-inteligencia-artificial-chatgpt-2jpg.jpg",
          content: 'Inteligencia artificial. Parece mentira, pero lo creamos los humanos. A través de estos nuevos modos de investigar, y casi sin hacer nada, la tecnología avanzada, nos regala un sinfín de posibilidades para resolver y organizar, desde la redacción de una carta de amor hasta la solución de un problema doméstico.',
          date: '04/04/2023' },
      { id: 1, title: "El 'ChatGPT' de Apple sería una revolución para desarrolladores", image: "https://s1.eestatic.com/2023/06/27/actualidad/774683292_234293680_1706x960.jpg",
       content: 'Ya ha quedado claro que tanto España como el resto del mundo está viviendo una revolución tecnológica con la inteligencia artificial. Percibida como un peligro por muchos y como una oportunidad para otros, la IA al estilo ChatGPT promete configurar un nuevo panorama tecnológico que sin duda marcará a las generaciones venideras. Apple, una de las pocas empresas que aún no ha apostado fuerte por la inteligencia artificial, podría revolucionarla en un futuro con esta patente.',
        date: '21/05/2023' }
    ]
  }

  /**
   * A lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  ngOnInit(): void {
    this.drawNews();
    console.log(this.arrNews);
  }

  /* It's checking if the fields are empty and if they are not, it's adding the news to the array. */
  uploadNews(): void {
    if (this.n_title !== "" && this.n_image !== "" && this.n_content !== "" && this.n_date !== "") {
      /* It's checking if the title already exists in the array. */
      let exists = this.arrNews.find(news => news.title === this.n_title);
      if (exists === undefined) {
        let newNews: News = {
          id: this.id,
          title: this.n_title,
          image: this.n_image,
          content: this.n_content,
          date: this.n_date
        }
        this.arrNews.unshift(newNews);
        this.id++;
        this.drawNews();
        this.n_title = "";
        this.n_image = "";
        this.n_content = "";
        this.n_date = "";
      }
      else {
        alert('El titulo ya existe.')
      }
    } else {
      alert('Los campos no pueden estar vacios.');
    }

  }

  /**
   * We're looping through the array of news items and adding each one to the addNews variable
   */
  drawNews(): void {
    this.addNews = "";
    this.arrNews.forEach((news) => {
      this.addNews +=
        `<article class="news-item">
          <img src="${news.image}"
              alt="" class="news-image">
          <h1 class="news-title">
            ${news.title}
          </h1>
          <p class="news-content">
            ${news.content}
          </p>
          <p class="news-date">${news.date}</p>
        </article>
      `;
    });
  }
}
