import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
    let username='testuser'
    let password='password'
  
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token')});
    
       return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
  }

  public deleteEmployee(employee) {
    let username='testuser'
    let password='password'
  
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token')});
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId,{headers});
  }

  public createEmployee(employee) {
    let username='testuser'
    let password='password'
  
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token')});
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee,{headers});
  }
}