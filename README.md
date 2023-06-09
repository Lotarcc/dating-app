# dating app #

This a web app created to replicate the functionalities of Tinder, from scratch, for learning purposes and for showing our skills.
The main limitation is that we could not use ORM, Validators nor User Accounts manager - which we all did manually.

**LIVE ONLINE SOON**

**Instructions for Installation on local**
Prep: Please make sure you have [Docker](https://www.docker.com/) running on your machine (or install if needed, use init_docker.sh script if not working)

1. git clone <https://github.com/pawaters/matcha>
3. `docker-compose up --build` in the root directory (takes 3 minutes)
4. To create users, go to /script folder, Run `docker-compose up --build` (takes 3 minutes)
5. Go to `localhost:3000` in your browser, `localhost:8080` for db admin, All fake users' password is Matcha1!

**Instructions for Installing on AWS**

1. Create a Key-pair PEM or PPK depends on your platform
2. Create a Security Groups with following rules:

| Type       | Protocol | Port Range | Source    |
|------------|----------|------------|-----------|
| Custom TCP | TCP      | 8080       | 0.0.0.0/0 |
| SSH        | TCP      | 22         | 0.0.0.0/0 |
| HTTP       | TCP      | 80         | 0.0.0.0/0 |

3. Create an EC2 Instance using Ubuntu or Amazon Linux 2 AMI at least t3.medium on Default VPC if you don't want to setup internet gateway on your own or in your VPC with Internet Gateway by using this doc [Internet Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html) and public ip.

4. Login to your instance using public ip with key-pair you've created before
5. git clone https://github.com/pawaters/matcha
6. In `.env` change the REACT_APP_FQDN to `http://<PUBLIC-DNS-OF-YOUR-INSTANCE>` without trailing "/"
6. Go to root folder (outside of server or clinet) and do docker-compose up --build for attached view of the server or docker-compose up --build -d for detached
7. To create users, go to /script folder, Run docker-compose up --build (takes 3 minutes)
8. Go to `http://<PUBLIC-DNS-OF-YOUR-INSTANCE>`, `http://<PUBLIC-DNS-OF-YOUR-INSTANCE>:8080` for db admin, All fake users' password is Matcha1!


**Stack:**
Node.js, Express, React, Redux, Material UI and PostgreSQL.
Socket.io for chat. Docker (docker-compose).
Architectural pattern: MVC. Basically:

- View: The react front end part, each with components for each part
- Models: db. (no ORM like Mongoose allowed by subject)
- Controllers: Mainly server/routes. How you use the data and give it to frontend.

Design pattern: Single-Page Application.

- Model for UI: <https://tinder.com/>
- Project Management: Jira: <https://pawaters.atlassian.net/jira/core/projects/MA/board>
- Style guide: Eslint standard, Full stack open style.

**fame rating**

- 5 pts for profile setup
- 2 pts per picture
- 1 pt per tag
- 10 points per like
- 5 points per match

**our strategy to display a list of suggestions**
We have a react component "recommended previews" that takes 2 inputs:

- max browsing criteria, in store (age, fame, distance)
- filtered users, in state --> according to sex orientation, a max distance
then with at least one common tag, then those are sorted by dividing the distance from the user by the amount of common tags to the power of 2.
This is the default "recommended" sort.

**Project constraints:**
Forbidden tech: ORM, Validators,User Accounts manager: do your own!
DB: has to be relational or graph-oriented (no Mongo - it is a document-oriented platform) --> PostgreSQL.

**List of features - summary of subject:**

- User interface (nav, search, UI. )
- User registration and login with email verification.
- User can edit his profile.
- ser can search for other users.  
- User can like other users.
- User can see who liked him.
- User can see who visited his profile.
- User can chat with other users.
- User can see who is online.
- Displaying other users according to the current user's country and interests.
- The ability to view other users profiles "The user are able to see several users at once".
- After liking, if the other user likes the current user back, they are able to chat.
- Chat room that saves conversations (maybe not needed).  

**UI**
In terms of UI/design, the goal is to make it look as close to tinder as possible:

- screenshots of what each page should look like:  <https://docs.google.com/document/d/1c18F3lTgLd5f-Wyzs96uWyAMgPfUeKDstlJScuaYvVk/edit?usp=sharing>

**Database schema**: <https://dbdiagram.io/d/638a0414bae3ed7c45445946>
