# DevTinder

- Create a vite + react application


# Deployment

Signup on AWS
Launch instances
chmod 400 <secret>pem
ssh -i "Tinder-secret.pem" ubuntu@ec2-3-111-36-97.ap-south-1.compute.amazonaws.com
Install  same node version 21.5.0
Git clone

# Frontend Deployment

npm install
npm run build
Sudo apt update
Sudo apt install nginx
Sudo systemctl start nginx
Sudo systemctl enable nginx
Copy code from Dist to /var/www/html/
Sudo scp :80 of your instance

# Backend Deployment

  - allowed ec2 instance public IP on mongodb server
    - npm intsall pm2 -g
    - pm2 start npm --name "devTinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name> , pm2 stop <name>, pm2 delete <name>
    - config nginx - /etc/nginx/sites-available/default
    - restart nginx - sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to "/api"

    # Nginx config

      Frontend = http://43.204.96.49/
    Backend = http://43.204.96.49:7777/

    Domain name = devtinder.com => 43.204.96.49

    Frontend = devtinder.com
    Backend = devtinder.com:7777 => devtinder.com/api

    nginx config : 

    server_name 3.111.36.97;

    location /api/ {
        proxy_pass http://localhost:3000/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }





