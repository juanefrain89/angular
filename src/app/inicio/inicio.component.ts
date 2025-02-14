import { Component, Renderer2, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => this.syncHeights(), 0); // Esperar hasta que Angular haya aplicado los estilos
  }

  @HostListener('window:resize')
  onResize() {
    this.syncHeights(); // Ajustar alturas cuando se cambia el tamaño de la ventana
  }

  private syncHeights() {
    const sesion3 = document.querySelector('.sesion3') as HTMLElement;
    const fondo2 = document.querySelector('.fondo2') as HTMLElement;
    const contenedor = this.renderer.selectRootElement('.hijo-grid5', true);
    const imagen = this.renderer.selectRootElement('.imagen2', true);
    if (sesion3 && fondo2) {
      const alturaSesion3 = sesion3.getBoundingClientRect().height; // Obtener altura real
      
      this.renderer.setStyle(fondo2, 'height', `${alturaSesion3}px`);
    }
    if (contenedor && imagen) {
      const alturaSesion3 = contenedor.getBoundingClientRect().height;
      this.renderer.setStyle(imagen, 'height', `${alturaSesion3}px`);
    }
  }
}
