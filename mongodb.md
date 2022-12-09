#### Install

Install MongoDB and mongosh

https://www.mongodb.com/docs/manual/installation/

#### Tool

MongoDB Compass / Mongoose

MongoDB Atlas -> cloud

database > collections > documents


```
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update

wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb

sudo apt-get install -y mongodb-org

sudo service mongod start
sudo service mongod status

mongosh
show dbs
use database
show collections


db.dropDatabase()
db.users.insertOne({ name: "John" })
db.users.find()
db.users.findOne()
db.users.insertMany([{ name: "John" }, { name: "Kyle" } ]}
db.users.find().sort({ age:1, name: -1 }).limit(2)  (sort first by age then by name in reverse order)
db.users.find().skip(1)   (skip the first entry)
db.users.find({ name: "Kyle" }, { name: 1, age: 1, _id: 0 })   (return fields name and age, not _id field)
db.users.find({ name: { $eq: "Kyle" }})  (equal)
db.users.find({ name: { $ne: "Kyle" }})  (not equal)
db.users.find({ age: { $gt: 13 }})       (greater than) (works also with gte (greater or equal to), lt (less than) and lte (less or equal to)
db.users.find({ name: { $in: ["Kyle", "Sally"] }})  (in the list), $nin (not in the list)
db.users.find({ age: { $exists: false }})  (field exists)
db.users.find({ $and: [{ age: 26 }, { name: "Kyle" }] })  (AND)
db.users.find({ $or: [{ age: { $lte: 20 } }, { name: "Kyle" }] })  (OR)
db.users.find({ age: { $not: { $lte: 20 } }})  (NOT)
$expr   (EXRESSION)
db.users.find({ "adress.street": "123 Main St" })
db.users.countDocuments({ })   (get number of documents according to the query)
db.users.updateOne({ age: 26}, {$set: { age: 27 } })    (set age from object with age: 26 to 27), best is to use _id
db.users.updateOne({ age: 26}, { $inc: { age: 3 } })    (increment by 3)
db.users.updateOne({ age: 26}, { $rename: { name: "firstName" } })     (rename "name" property to "firstName") 
db.users.updateOne({ age: 26}, { $unset: { age: "" } })    (remove age property)
db.users.updateOne({ age: 26}, { $push: { hobbies: "Swimming" } })    (add "Swimming" to hobbies array)
db.users.updateOne({ age: 26}, { $pull: { hobbies: "Bowling" } })    (remove "Bowling" from hobbies array)
db.users.deleteOne({ })
db.users.deleteMany({ })
```
