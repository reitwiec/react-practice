# Code Portal

### Dependencies
1. node
2. yarn
3. redis
4. mysql

### Steps to run
1. Clone repository
2. run `yarn install` under main directory
3. Create `.env` file with the following keys
	1. DB_NAME
	2. DB_HOST
	3. DB_USER
	4. DB_PASS
	5. REDIS_HOST
	6. REDIS_POST
	7. PORT (optional)
4. Create a database in mysql with the same name as DB_NAME
5. run `yarn dev`
