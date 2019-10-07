export class UsersService{
    users = [
        {
          id: 1,
          name: 'Max'
        },
        {
          id: 2,
          name: 'Anna'
        },
        {
          id: 3,
          name: 'Chris'
        }
      ];

    getUserbyID(id: number){
      console.log("user id ", id, " type: ", typeof(id))
        return this.users.find((user) => {return id == user.id} )
    }

    getAllUsers(){
        return this.users.slice();
    }

}