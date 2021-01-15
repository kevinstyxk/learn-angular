import { Component } from "@angular/core"

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html'
})

export class UsersListComponent {
    testuser = ['Jack', 'Steve', 'John']
}