import { Component, AfterViewInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']  // Corregido 'styleUrl' a 'styleUrls'
})
export class EjemploComponent implements AfterViewInit {
  public state = {
    diagramNodeData: [
      { id: 'Alpha', text: 'Alpha', color: 'lightblue' },
      { id: 'Beta', text: 'Beta', color: 'orange' }
    ],
    diagramLinkData: [
      { key: -1, from: 'Alpha', to: 'Beta' }
    ],
    diagramModelData: { prop: 'value' },
    skipsDiagramUpdate: false,
    paletteNodeData: [
      { id: 'Gamma', text: 'Gamma', color: 'green' }
    ]
  };

  public diagramDivClassName: string = 'myDiagramDiv';
  public paletteDivClassName: string = 'myPaletteDiv';

  // Método para inicializar el diagrama
  public initDiagram(): go.Diagram {
    const dia = new go.Diagram({
      'undoManager.isEnabled': true,
      model: new go.GraphLinksModel({
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key'
      })
    });

    // Plantilla para los nodos del diagrama
    dia.nodeTemplate =
      new go.Node('Auto')
        .add(
          new go.Shape('RoundedRectangle', { stroke: null }).bind('fill', 'color'),
          new go.TextBlock({ margin: 8, editable: true }).bindTwoWay('text', 'text')
        );

    return dia;
  }

  // Método para inicializar la paleta
  public initPalette(): go.Palette {
    const palette = new go.Palette();
    palette.nodeTemplate =
      new go.Node('Auto')
        .add(
          new go.Shape('RoundedRectangle', { stroke: null }).bind('fill', 'color'),
          new go.TextBlock({ margin: 8 }).bind('text', 'key')
        );
    palette.model = new go.GraphLinksModel({
      linkKeyProperty: 'key'
    });

    return palette;
  }

  // Método para manejar cambios en el modelo del diagrama
  public diagramModelChange(changes: go.IncrementalData) {
    console.log(changes);
  }

  // Método de ciclo de vida de AfterViewInit
  ngAfterViewInit() {
    // Inicializa cualquier lógica adicional después de que la vista se haya inicializado.
  }
}
