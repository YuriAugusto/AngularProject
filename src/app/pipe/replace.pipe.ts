import { Pipe, PipeTransform } from "@angular/core";

@Pipe({//aqui eu torno a classe elegível a ser utilizada como um pipe customizado
  name:'sobrescrever'//esse é o nome que será utilizado para chamar o pipe
})

export class ReplacePipe implements PipeTransform{

  transform(value: string, char: string, valueToReplace: string){
    return value.replace(char,valueToReplace);
  }
}
