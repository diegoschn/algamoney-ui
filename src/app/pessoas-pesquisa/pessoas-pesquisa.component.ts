import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent{
  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', status: 'Ativo'},
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: 'Inativo'},
    { nome: 'Carla Souza', cidade: 'Florianopólis', estado: 'SC', status: 'Ativo'},
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', status: 'Inativo'},
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Ativo'},
    { nome: 'Ar', cidade: 'A', estado: 'A.1', status: 'Inativo'},
    { nome: 'Br', cidade: 'B', estado: 'B.1', status: 'Ativo'},
    { nome: 'Cr', cidade: 'C', estado: 'C.1', status: 'Inativo'},
    { nome: 'Dr', cidade: 'D', estado: 'D.1', status: 'Ativo'},
    { nome: 'Er', cidade: 'E', estado: 'E.1', status: 'Inativo'},
    { nome: 'Fr', cidade: 'F', estado: 'F.1', status: 'Ativo'},
    { nome: 'Gr', cidade: 'G', estado: 'G.1', status: 'Inativo'},
    { nome: 'Hr', cidade: 'H', estado: 'H.1', status: 'Ativo'}
  ];
}
