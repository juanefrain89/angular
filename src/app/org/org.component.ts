import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { TreeNode } from 'angular13-organization-chart';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
interface CustomTreeNode extends TreeNode {
  hierarchyId?: number;
  puesto?: string;
  departamento?: string;
  rotateDegree?: number;
  display?: boolean;
  mostrar?: boolean;
  h?: number;
  nombre?: string;
  empleado?: any;
  image?: string;
  css?: string;
  label?: string;
  description?: string;
  name?: string;
}
@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss'],
})
export class OrgComponent implements OnInit {
  faArrowLeft = faArrowLeft;  
  faArrowDown = faArrowDown;  
  currentIcon = this.faArrowLeft;  
  faFaceMeh = faFaceMeh;
  toggleIcon() {
    this.currentIcon = this.currentIcon === this.faArrowLeft ? this.faArrowDown : this.faArrowLeft;
  }
  tree: CustomTreeNode = {
    children: [],
    hideChildren: false,
  };
  allHierarchyData: any[] = [];
  empleados: any[] = [];
  puestos: any[] = [];
  departamentos: any[] = [];
  cambiar(numero_empleado: any) {
    this.empleados = this.empleados.map((empleado: any) => {
      if (empleado.numero_empleado === numero_empleado) {
      console.log("entro");
      console.log(empleado);
      
      
        return { ...empleado, rotar: !empleado.rotar };
      }
      return empleado;
    });
  }
 
  seleccionarNodo(event: Event) {
    let clickedElement: HTMLElement;
    
    // Si el click viene de container2, busca el padre superior2
    if ((event.currentTarget as HTMLElement).classList.contains('container2')) {
        const parentElement = (event.currentTarget as HTMLElement).closest('.superior2') as HTMLElement;
        if (parentElement) {
            clickedElement = parentElement;
        } else {
            return; // Si no encuentra el padre, sale de la función
        }
    } else {
        clickedElement = event.currentTarget as HTMLElement;
    }

    const elementos = document.querySelectorAll(".superior");
    const elementos2 = document.querySelectorAll(".superior2");
       
    if (clickedElement.classList.contains("superior2")) {    
        const icon = clickedElement.querySelector('.container2') as HTMLElement;
        if (icon) {
            const isRotated = icon.style.transform === 'rotate(90deg)';
            icon.style.transform = isRotated ? 'rotate(0deg)' : 'rotate(90deg)';
        }
    }

    if (clickedElement.classList.contains("superior")) {
        const icon = clickedElement.querySelector('.container2') as HTMLElement;
        if (icon) {
            const isRotated = icon.style.transform === 'rotate(90deg)';
            icon.style.transform = isRotated ? 'rotate(0deg)' : 'rotate(90deg)';
        }
    }
}
  constructor(private servicio: DatosService) {}
  sliderValue = 50; 
  ngOnInit(): void {
    this.servicio.obtenerdepartamentos().subscribe(
      (datos: any) => {
        this.departamentos = datos.Departamentos;
      },
      (error) => {
        console.error('Error al obtener los departamentos:', error);
      }
    );
    this.servicio.obtenerpuesto().subscribe(
      (datos: any) => {
        this.puestos = datos.Puestos;
      },
      (error) => {
        console.error('Error al obtener los puestos:', error);
      }
    );

    
    this.servicio.obtenerempleados().subscribe(
      (datos: any) => {
        console.log('Datos recibidos:', datos); 
        if (datos?.Empleados && Array.isArray(datos.Empleados)) {
          this.empleados = datos.Empleados.map((empleado: any) => ({
            ...empleado,
            rotar: true
          }));
        } else {
          console.error('Formato inesperado de datos:', datos);
        }
      },
      (error) => {
        console.error('Error al obtener los empleados:', error);
      }
    );
    
    
    this.servicio.obtenerUsuarios().subscribe(
      (datos: any) => {
        this.allHierarchyData = datos.Jerarquias;

        const rootNodes = datos.Jerarquias.filter(
          (item: any) => item.parent === 0
        );

        
        this.tree.children = rootNodes.map((item: any) => ({
          children: [],
          hideChildren: true,
          css: 'background-color:black; min-width: 333px; color: black; cursor: pointer;',
          label: item.posicion,
          description: item.posicion,
          h: item.parent,
          hierarchyId: item.id_jerarquia,
        }));
      },
      (error) => {
        console.error('Error al obtener las jerarquías:', error);
      }
    );
  }

  setDefaultImage(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '../../assets/defecto.webp'; 
  }

  rotateDegree = 0; // Variable para almacenar el ángulo de rotación


    
  loadChildren(parentId: number): void {
    const parentNode = this.findNodeById(this.tree, parentId);
    
    if (!parentNode) return;
    
    // Si ya tiene hijos cargados, solo alterna hideChildren
    if (parentNode.children.length > 0) {
        parentNode.hideChildren = !parentNode.hideChildren;
        parentNode.display = parentNode.children.length > 0; // true si tiene hijos
    } else {
        // Busca los hijos en allHierarchyData
        const children = this.allHierarchyData.filter(
            (item: any) => item.parent === parentId
        );
        
        // Si no hay hijos, establece display como false
        if (children.length === 0) {
            parentNode.display = false;
            return;
        }
        
        // Mapea los hijos encontrados
        parentNode.children = children.map((item: any) => {
            const empleadoInfo = this.empleados.find(
                (empleado) => empleado.numero_empleado === item.numero_empleado
            );
            
            const puestoInfo = this.puestos.find(
                (puesto) => puesto.id_puesto === item.id_puesto
            );
            
            const departamentoInfo = this.departamentos.find(
                (departamento) => departamento.id_departamento === item.id_departamento
            );
            
            const tieneHijos = this.allHierarchyData.some(
                (hijo: any) => hijo.parent === item.id_jerarquia
            );
            
            return {
                children: [],
                name: item.posicion,
                hideChildren: true,
                display: tieneHijos, // Inicializa display basado en si tiene hijos
                image: empleadoInfo?.avatar
                    ? `https://api-rh.tlea.online/${empleadoInfo.avatar}`
                    : '../../assets/defecto.webp',
                css: 'background-color: black !important; min-width: 333px; color: white; cursor: pointer; transition: all 2s ease; animation: show 5s forwards;',
                label: item.posicion,
                description: item.posicion,
                nombre: empleadoInfo?.nombre,
                empleado: empleadoInfo,
                puesto: puestoInfo?.nombre,
                departamento: departamentoInfo?.departamento || 'Sin departamento',
                hierarchyId: item.id_jerarquia,
                mostrar: tieneHijos,
                h: item.parent,
                rotateDegree: undefined,
            };
        });
        
        parentNode.hideChildren = false;
        parentNode.display = true; // true porque encontró hijos
    }
    
    this.tree = { ...this.tree };
}
  
  selectedNodeId: number | null = null;
 numeroempleado: any
  imagen2 : any 
  curp:any
  puesto : any
  fecha_ingreso : any
des:any ="skjjshjdhjdhdh"
nacimiento: any
nss : any
ver = false
departamento: any


onNodeClick(nodeId: number, descripcion: any, imagen: any, fecha_ingreso: any, curp: any, 
  nacimiento: any, apellido_paternos: any, apellid_materno: any, departamento: any, 
  numeroempleado: any, puesto: any, nss: any): void {
    
  // Concatenate name
  this.des = descripcion + " " + apellido_paternos + " ";
  this.ver = !this.ver;
  console.log(this.ver);
  
  // Set basic properties
  this.imagen2 = imagen;
  
  // Format the dates
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return dateObj.toLocaleDateString('es-ES', options)
      .replace(/de (\d{4})/, 'del $1');
  };

  this.fecha_ingreso = formatDate(fecha_ingreso);
  this.nacimiento = formatDate(nacimiento);
  
  // Set remaining properties
  this.curp = curp;
  this.nss = nss;
  this.departamento = departamento;
  this.puesto = puesto;
  this.numeroempleado = numeroempleado;
  console.log(descripcion);
  
  // Handle DOM element positioning
  let x: HTMLElement | null = document.querySelector(".superior3");
  if (x !== null) {
    x.style.position = "fixed";
    x.style.left = "95%";
    x.style.top = "50%";
    x.style.transform = "translateX(-100%) translateY(-50%)";
    x.style.transition = "transform 0.5s ease";
  }
  
  // Set selected node
  this.selectedNodeId = nodeId;
  console.log(this.selectedNodeId);
}


  rotar(nodeid: number) {
    const elements = document.querySelectorAll(".superior2");
    
    // Option 1: If you want the first element
    if (elements.length > 0) {
      const y = elements[nodeid] as HTMLElement;
      y.style.backgroundColor ="black"
    }
    
    
    elements.forEach(element => {
      const htmlElement = element as HTMLElement;
     
    });
  }
  quitar(){
    this.ver = false
    let x: HTMLElement | null = document.querySelector(".superior3");
    if (x !== null) {
        x.style.transform = "translateY(-200%)";
    }
  }

  private findNodeById(
    node: CustomTreeNode,
    id: number
  ): CustomTreeNode | null {
    if (node.hierarchyId === id) {
      return node;
    }

    if (node.children) {
      for (const child of node.children) {
        const foundNode = this.findNodeById(child as CustomTreeNode, id);
        if (foundNode) return foundNode;
      }
    }
    return null;
  }
}


