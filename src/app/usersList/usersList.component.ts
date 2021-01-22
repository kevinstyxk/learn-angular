import { Component, Input, Output, EventEmitter } from "@angular/core"
import { UserInterface } from "../types/user.interface"

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html',
    styleUrls: ['./usersList.component.scss']
})

export class UsersListComponent {
    @Input() users: UserInterface[]
    @Output() removeUser = new EventEmitter<string>()
    @Output() addUserEvent = new EventEmitter<string>()

    newUsername: string = ''
    newUserAge: number = null
    //testusers = ['Jack', 'Steve', 'John']

    

    setNewUserName(username: string): void{
        this.newUsername = username
    }

    setNewUserAge(age: number): void{
        this.newUserAge = age
    }

    addUser(): void{
        this.addUserEvent.emit(this.newUsername)
        // const uniqueID = Math.random().toString(16)
        // const newUser = {
        //     id: uniqueID,
        //     name: name,
        //     age: this.newUserAge
        
        // }
        // this.users.push(newUser)
        this.newUsername = ''
        this.newUserAge = null
    }
}