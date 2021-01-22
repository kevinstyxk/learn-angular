import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserInterface } from './types/user.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserInterface[]

  constructor(private http: HttpClient, private userService: UsersService){}

  ngOnInit(): void {
    //console.log('ngOnInit', this.userService.getFoo())
    // this.http.post('http://localhost:3399/sku/fetch/globe', {}).subscribe(res => {
    //   console.log('res', res)
    // })

    //Sample
    // this.http
    //   .get('http://localhost:3000/users')
    //   .subscribe((users: UserInterface[]) => {
    //     console.log('res', users)
    //     this.users = users
    //   })

    this.userService.getUsers().subscribe((users: UserInterface[]) => {
        console.log('res', users)
        this.users = users
      })
  }

  removeUser(id: string): void {
    this.userService.removeUser(id).subscribe(() => {
      console.log("deleted from backend")
      this.users = this.users.filter(user => user.id !== id)
    })
  }

  addUser(name: string): void{
    this.userService.addUser(name).subscribe(newUser => {
      console.log('newUser', newUser)
      this.users.push(newUser)
    })
    // const uniqueID = Math.random().toString(16)
    // const newUser: UserInterface = {
    //     id: uniqueID,
    //     name,
    //     age: 30
    // }
}

}
