'use strict';

class Graph {
  constructor(value){
    this.value = value;
    this.adjacents = [];
  }
  setValue (value){
    this.value = value;
  }
  getValue (){
    return this.value;
  }
  setAjacent(node){
    this.adjacents[this.adjacents.length] = node;
  }
  getAdjacents(){
    return this.adjacents;
  }
}