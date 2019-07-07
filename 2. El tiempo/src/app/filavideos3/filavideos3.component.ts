import { Component, OnInit } from '@angular/core';

interface Videos {
  url: string,
  paragraph: string,
  h3: string
};

interface Sections {
  videos: Videos[],
  title: string,
  sectionName: string
}


@Component({
  selector: 'app-filavideos3',
  templateUrl: './filavideos3.component.html',
  styleUrls: ['./filavideos3.component.sass']
})
export class Filavideos3Component implements OnInit {
  public sections: Sections[] = [
    {
      title: "Ultimos vídeos",
      sectionName: "TV eltiempo",
      videos: [
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "Mega-incendio: El fuego voraz que trae el cambio climático", paragraph: "Los incendios vienen: devastadores e incontrolables" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "Por qué no debes dejar a un niño dentro del coche en verano", paragraph: "Evita golpes de calor en el interior del vehículo" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "El gran ojo de dragón de Japón¡Impresionante!", paragraph: "Sucede sólo en primavera y el efecto es espectacular" }
      ]
    },
    {
      title: "TV eltiempo",
      sectionName: "La previsión deltiempo.es",
      videos: [
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "Y tras la ola de calor...¡Llegan las tormentas!", paragraph: "Tormentas en Pirineo y en el interior este" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "El tiempo en julio 2019:¿seguirá el calor?", paragraph: "La previsión para ek mes de julio 2019" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "¿Bajarán por fin las temperaturas la próxima semana?", paragraph: "Cierto alivio térmico a partir del lunes" }
      ]
    },
    {
      title: "TV eltiempo",
      sectionName: "Actualidad",
      videos: [
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "La radiación se dispara por la ola de calor", paragraph: "Riesgo extremo de radiación en muchas zonas de España" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "¡Una nutria en el Manzanares!¿Por qué han vuelto?", paragraph: "Estos días se ha visto a una nutria en el río Manzanares" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "Así son las salpas que abarrotan las playas andaluzas", paragraph: "Son animales invertebrados y no pican" }
      ]
    },
    {
      title: "TV eltiempo",
      sectionName: "Escapadas",
      videos: [
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "Los corazones de la naturaleza:¡visítalos por San Valentín!", paragraph: "Sorpréndete con estas imágenes" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "¿Sin plan para el puente? Viajes a los pueblos más bonitos de España", paragraph: "Estos sn los nuevos pueblos que se añaden al listado" },
        { url: "https://www.youtube.com/watch?v=x00r8uuqPiw", h3: "Escápate a cinco lugares que seguro no conoces de España", paragraph: "¡Te solucionamos tus días libres!" }
      ]
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
