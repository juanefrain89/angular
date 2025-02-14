import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { DataSet, Network } from 'vis-network/standalone';
import { log } from 'console';

interface Node {
  id: number;
  label: string;
  [key: string]: any;
}

interface Edge {
  id?: number;
  from: number;
  to: number;
  [key: string]: any;
}

@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.scss'],
})
export class OrganigramaComponent implements OnInit {
  constructor(private api: DatosService) {}

  variables: any[] = [];
  dates: any = ""; // Corregir a variable definida

  ngOnInit(): void {
    const defaultNodeProperties = {
      width: "440px",
      shape: 'box',
      widthConstraint: { minimum: 300, maximum: 440 },
      color: { background: 'white', border: '#2874a6' }
    };

    const nodes = new DataSet<Node>([
      { id: 1, label: 'juan efrain flores razo \nprogramador \nsistemas', ...defaultNodeProperties },
      { id: 2, label: 'Child 1 programador', hidden: true, ...defaultNodeProperties },
      { id: 3, label: 'Child 2 sjdjdidjjdsk', hidden: true, ...defaultNodeProperties },
      { id: 4, label: 'Child 2 sjdjdidjjdsk', hidden: true },
      { id: 5, label: 'Child 1.1 Junior Developer', hidden: true },  // Hijo de nodo 2
      { id: 6, label: 'Child 2.1 Developer Intern', hidden: true }   // Hijo de nodo 3
    ]);

    const edges = new DataSet<Edge>([
      { id: 1, from: 1, to: 2 },
      { id: 2, from: 1, to: 3 },
      { from: 3, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 6 }
    ]);

    const container = document.getElementById('myNetwork');
    if (container) {
      const data = { nodes, edges };
      const options = {

        layout: {
          hierarchical: {
            direction: 'UD',
            sortMethod: 'directed',
            width: '4000px',
    height: '900px'
          }
        },
        interaction: {
          hover: true
        },
        physics: {
          enabled: false
        }
      };

      const network = new Network(container, data, options);

      network.on('selectNode', (event) => {
        const nodeId = event.nodes[0];
        console.log('Nodo seleccionado:', nodeId);
        this.toggleChildNodes(nodeId, nodes);
      });
    } else {
      console.error('Contenedor no encontrado');
    }
    console.log('Iniciando componente Organigrama');
    this.api.obtenerUsuarios().subscribe(
      (datos) => {
        this.actualizar();
        let hijos: any[] = [];
        if (!datos || datos.length === 0) {
          console.warn('El arreglo datos está vacío o es inválido.');
          return;
        } else {
          console.log(datos.Jerarquias.length);
          for (let i = 0; i < 50; i++) {
            let array = [];
            array.push(datos.Jerarquias[i]);
            const nuevoNodo = {
              id: datos.Jerarquias[i].id_jerarquia +6,
              label: datos.Jerarquias[i].posicion || 'Nuevo Nodo', 
              ...defaultNodeProperties,
            };
            console.log(nuevoNodo);
            
            nodes.add(nuevoNodo);
 const edgeId = datos.Jerarquias[i].id_jerarquia + 6; 
  const parent = datos.Jerarquias[i].parent+6; 
   
  if (parent !== null && parent !== undefined) {
    edges.add({
      id: edgeId,      
      from: parent+1,         
      to: edgeId,
      
            
 
    });
  } else {
    console.warn(`El nodo ${datos.Jerarquias[i].id_jerarquia} no tiene un padre definido`);
  }
            for (let j = 0; j < 50; j++) {
              if (datos.Jerarquias[i].id_jerarquia == datos.Jerarquias[j].parent) {
                array.push(datos.Jerarquias[j]);
              }
            }

            hijos.push(array);
          }

          console.log(hijos);
        }

        this.variables.push(datos);
        console.log("KJekdkdk");
        console.log(this.dates);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  
  toggleChildNodes(nodeId: number, nodes: DataSet<Node>): void {
    if (nodeId) {
      nodes.update({ id: nodeId+1, hidden: false });
      nodes.update({ id: 3, hidden: false });
    } else if (nodeId === 2) {
      nodes.update({ id: 5, hidden: false }); 
    } else if (nodeId === 3) {
      nodes.update({ id: 6, hidden: false }); // Mostrar hijo de nodo 3
    }
  }

   options = {
    width: '400px',
    height: '400px'
  };

  actualizar(): void {
    console.log('Actualización realizada');
  }
}
