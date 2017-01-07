/// <reference path="../out/types.d.ts" />
import * as mongodb from 'mongodb';

interface User {
  _id: mongodb.ObjectID
  name: string
  age: number
}

mongodb.MongoClient.connect('%$#&%*^%^$').then(async db => {
  let userCollection = db.collection<User>('user')
//   let userCollection = db.collection('user')
  let user = await userCollection.findOne({ name: 'Alex' })
  let users = await userCollection.find().toArray()

  // Because of generics, the ide know the type of the user is 'User',
  //and is can show the properties after I entered the '.'
  let age = user.age
  users.forEach(_user => console.log(_user.name))
})