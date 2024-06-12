export interface Field {
    name: string;
    label?: string;
    placeholder?:string
    type: string;
    required?: boolean;
    toLowerCase?: boolean;
    transparentBorder?: boolean;
  }
  
export interface Errors {
    [key: string]: string;
}