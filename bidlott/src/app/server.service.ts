import { Injectable } from '@angular/core';
import{ HttpClient }  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  constructor(private http:HttpClient) { }

createplan(f):any{


return this.http.post('http://localhost:3000/createplan',f);

}

getplans():any{
  return this.http.get('http://localhost:3000/getplans');
}

verifyadmin(t):any{
  return this.http.post('http://localhost:3000/verifyadmin',t);
}

signup(s):any{
  return this.http.post('http://localhost:3000/signup',s);
}

deleteplan(f):any{
 
  return this.http.post('http://localhost:3000/deleteplan',{title:f});
}

mysocity(f):any{
  console.log(JSON.stringify(f));
  return this.http.post('http://localhost:3000/mysocity',f);
}


}