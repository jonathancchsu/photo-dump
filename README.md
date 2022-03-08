# _**Photo-Dump**_

## **Welcome to Photo Dump wiki**

Photo Dump is an application that allows users to keep a collection of moments in their lives by uploading photos and sharing them with people.

## **Technologies used**

<img src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" alt="drawing" width="50"/> <img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" alt="react" width="50"> <img src="https://camo.githubusercontent.com/2b6b50702c658cdfcf440cef1eb88c7e0e5a16ce0eb6ab8bc933da7697c12213/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656475782f72656475782d6f726967696e616c2e737667" alt="redux" width="50"> <img src="https://camo.githubusercontent.com/3a759e3619411b17fc119439adc96780278f6df968813a95a00f30f9fdb11f6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d706c61696e2d776f72646d61726b2e737667" alt="nodejs" width="50"> <img src="https://camo.githubusercontent.com/66a47251fab3236cff187214ff8215c1df71b46739b8b1803ac4cebdfe5c7918/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f657870726573732f657870726573732d6f726967696e616c2d776f72646d61726b2e737667" alt="expressjs" width="50"> <img src="https://camo.githubusercontent.com/d536b9cc0c533324368535ece721f5424f28eae3ec0e6f3847408948ecacfce6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f706f737467726573716c2f706f737467726573716c2d6f726967696e616c2e737667" alt="postgreSQL" width="50"> <img src="https://camo.githubusercontent.com/a2ef2bb116ae565bb254cbb11194dae357eb7582a8babeab337bd3932687d63d/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f73657175656c697a652f73657175656c697a652d6f726967696e616c2e737667" alt="sequelize" width="50"> <img src="https://camo.githubusercontent.com/2e496d4bfc6f753ddca87b521ce95c88219f77800212ffa6d4401ad368c82170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667" alt="css3" width="50"> <img src="https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" alt="html5" width="50"> <img src="https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667" alt="git" width="50"> <img src="https://camo.githubusercontent.com/5fa137d222dde7b69acd22c6572a065ce3656e6ffa1f5e88c1b5c7a935af3cc6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667" alt="vscode" width="50">
<!-- <img src="" alt="" width="50">
<img src="" alt="" width="50">
<img src="" alt="" width="50">
<img src="" alt="" width="50">
<img src="" alt="" width="50"> -->


## **Link to Live Site**

### **[Photo Dump](https://photo-dump.herokuapp.com/)**

## **Getting Started**

1. Clone this repo.

* `git clone https://github.com/jonathancchsu/photo-dump.git`

2. Install dependencies from the root directory.

* `npm install`

3. Create a postgreSQL user with `CREATEDB` and `PASSWORD` in PSQL.

* `CREATE USER <username> WITH PASSWORD <password> CREATEDB;`

4. Create a .env file in the backend folder based on the .env.example in the same directory.

5. Enter the username and password of the database user into the .env file along with the name of the database. A secure JWT_SECRET, with the desired PORT (a location that would not interfere with the operations of your machine, e.g. 5000.)

6. First, check the package.json file in the front end folder and make sure that the port you are hosting on is matching with the port in `"proxy: "http://localhost:5000"`. Also make sure that the port configuration is matching one in the .env file `PORT=`.

7. Create, migrate and seed the database with the following command lines.
* `npx dotenv sequelize-cli db:create`
* `npx dotenv sequelize-cli db:migrate`
* `npx dotenv sequelize-cli db:seed:all`

8. Start the application in the backend directory.
* `npm start`

9. Redirect to the frontend directory and start the application there as well.
* `npm start`

10. The application will start with your default browser, if not, go the `http://localhost:${your-port}` in your brower.

11. You will be able to use the application with demo user or creating an account.

## **Feature List**

### 1. Account management
* A new user will be able to create a new account.
* Users with existing accounts will be able to log in and log out with their accounts.
* Only users with logged in accounts will be able to view/ use the functions of this application.

### 2. Photos
* Users will be able to upload, view, and delete their photos.
* Users will be able to edit their captions and title for their photos.

### 3. Photo Albums
* Users will be able to create, view, update and delete their photo albums.
* Users will be able to add photos to their albums as well as take them out of the album.

### 4. Profile
* Users will be able to view their own profiles with the photos that they posted.

### 5. (Bonus) Likes
* Users will be able to like photos of other users.
* Users will be able to take back their likes.

### 6. (Bonus) Comments
* Users will be able to leave comments on photos.
* Users will be able to edit and delete their comments.

### 7. (Bonus) Search
* Users will be able to search for other users' profiles with usernames.

### 8. (Bonus) Categories
* Users will be able to categorize their photos when posting a new photo.
* Users will be able to change or remove the category of their photos.

## **Database Schema**

![photo-dump (1)](https://user-images.githubusercontent.com/92463844/157144962-4e3af837-e436-45c4-b673-3a71e3bc0783.png)

## **Front End Routes**

### `/photos`

Users will be able to see all the photos posted, a specific post, or the form to upload a new photo.

* `GET /photos`
* `GET /photos/:id`
* `GET /photos/new`
* `POST /photos/new`

### `/profile`

Users will be able to view the profiles of their own or of other users.

* `GET /profile`
* `GET /profile/:id`

### `/albums`

Users will be able to view all the albums, a specific album, or the form to make a new album.

* `GET /albums`
* `GET /albums/:id`
* `GET /albums/new`
* `POST /albums/new`
