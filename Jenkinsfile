pipeline {

    // will find any available agent to perform any action (stage)
    agent any

    environment {
        dockerHub = credentials('dockerHub') // credentials id in jenkins
        CONTAINER = "banksystem-frontend-server"
    }

    // define stages
    stages {
        stage('Build & Deliver') {
            steps {
                sh "docker login -u ${dockerHub_USR} -p ${dockerHub_PSW}"
                sh "docker build -t arjunramsinghani/banksystem-frontend:1.0.0 ."
                sh "docker push arjunramsinghani/banksystem-frontend:1.0.0" // push image to dockerhub
            }
        }

        stage('Stop & Destroy') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') { // if container fails, the next stage will not be executed
                    sh "docker stop ${CONTAINER}"
                    sh "docker rm ${CONTAINER}"
                }
            }
        }

        stage('Deploy') {
            steps {
                sh "docker run --name ${CONTAINER} -d -p 5005:5173 arjunramsinghani/banksystem-frontend:1.0.0" // e flag for environment variables and for appliction.yaml file to have context
            }
        }
    }
}