# FROM is building the base image with all the required language kits for react
FROM node:20

# stores all of our app data by default in the app folder, common practice
WORKDIR /app

# copies package.json to the current destination directory
COPY package.json .

# installs packages from node package manager (npm)
RUN npm install

# COPY - periods(.) mean everything from the local directory (to the dockerfile location) will be copied in the work dir
# in the image which is the second period
# Always pair this with a docker ignore file
COPY . .

# the port must be free before we use it, otherwise we make it free
EXPOSE 5173

# runs our start command everytime
CMD ["npm", "run", "dev"]